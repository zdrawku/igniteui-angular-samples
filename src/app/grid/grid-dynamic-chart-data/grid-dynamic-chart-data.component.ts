// tslint:disable: max-line-length
import { AfterViewInit, ChangeDetectorRef, Component, Directive, ElementRef, HostListener, NgZone, OnInit, Pipe, PipeTransform, ViewChild, ViewContainerRef } from "@angular/core";
import { AutoPositionStrategy, CloseScrollStrategy, HorizontalAlignment, IgxDialogComponent, IgxGridComponent, IgxOverlayOutletDirective, IgxTabsComponent, VerticalAlignment } from "igniteui-angular";
import { noop} from "rxjs";
import { debounceTime, tap } from "rxjs/operators";
import { FinancialData } from "../services/financialData";
import { ChartIntegrationDirective, IChartArgs } from "./chart-integration.directive";
// import { ChartService } from "./chart.service";
import { ConditionalFormatingDirective } from "./conditional-formating.directive";
@Directive({
    selector: "[chartHost]"
})
export class ChartHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
@Pipe({
    name: "getChartArgs"
})
export class ChartArgsPipe implements PipeTransform {
    public transform(value: string): IChartArgs[] {
        switch (value) {
            case "Column":
            case "Area":
            case "Line":
            case "Bar":
                return [
                    { chartType: value, seriesType: "Grouped" },
                    { chartType: value, seriesType: "Stacked" },
                    { chartType: value, seriesType: "100Stacked" }
                ];
            case "Scatter":
                return [
                    { chartType: value, seriesType: "Bubble" },
                    { chartType: value, seriesType: "Point" },
                    { chartType: value, seriesType: "Line" }
                ];
        }
    }
}
@Component({
    selector: "app-grid-dynamic-chart-data",
    templateUrl: "./grid-dynamic-chart-data.component.html",
    styleUrls: ["./grid-dynamic-chart-data.component.scss"],
    providers: [    ]
})
export class GridDynamicChartDataComponent implements OnInit, AfterViewInit {

    public data;
    public opened = true;
    @ViewChild(ConditionalFormatingDirective, {read: ConditionalFormatingDirective, static: true})
    public formatting: ConditionalFormatingDirective;

    @ViewChild(ChartIntegrationDirective, {read: ChartIntegrationDirective, static: true})
    public chartIntegration: ChartIntegrationDirective;

    @ViewChild("grid", {read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild("chart", { read: ChartHostDirective, static: true })
    public chartHost: ChartHostDirective;

    @ViewChild("chartDialog", { static: true })
    public dialog: IgxDialogComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild("chartSelectionDialog", { static: true })
    public chartSelectionDialog: IgxDialogComponent;

    @ViewChild("chartPreviewDialog", { static: true })
    public chartPreviewDialog: IgxDialogComponent;

    @ViewChild("chartPreview", { read: ChartHostDirective, static: true })
    public chartPreview: ChartHostDirective;

    @ViewChild(IgxTabsComponent, { static: true })
    public tabs: IgxTabsComponent;

    @ViewChild("configArea", { static: true })
    public area: ElementRef;

    public chartConfigAreaState = "opened";
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public currentChart;
    public currentChartArg: IChartArgs = { chartType: "column", seriesType: "Grouped" };
    public fullScreenOpened = false;
    public row;
    public range;
    public chartsToDisable = {};
    public disableCreateChart = false;
    public cellsToFormat = [];
    // Dialogs options
    public _chartDialogOverlaySettings = {
        closeOnOutsideClick: false,
        modal: true,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy()
    };

    private rowIndex;
    private colIndex;

    private _chartSelectionDilogOverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: null
    };

    private _chartPreviewDialogOverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: new AutoPositionStrategy({
            horizontalDirection: HorizontalAlignment.Center,
            horizontalStartPoint: HorizontalAlignment.Center,
            verticalStartPoint: VerticalAlignment.Top,
            verticalDirection: VerticalAlignment.Top,
            openAnimation: null,
            closeAnimation: null
        })
    };

    constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

    public ngOnInit() {

        this.formatting.onFormattersReady.subscribe(names => this.formattersNames = names);
        (this.tabs.headerContainer.nativeElement as HTMLElement).onpointerdown = event => event.stopPropagation();

        this.chartSelectionDialog.onOpen.subscribe(() => {
            this.currentChartArg = { chartType: "Column", seriesType: "Grouped" };
        });
        this.dialog.onOpen.subscribe(() => {
            this.resetChartDialogInitialDimensions();
            this.chartSelectionDialog.close();
        });

        this.dialog.onClose.subscribe(() => {
            this.resetChartDialogInitialDimensions();
            this.contextmenu = true;
            this.chartConfigAreaState = "opened";
            this.opened = true;
        });

        this.chartSelectionDialog.onClose.subscribe((evt) => this.chartPreviewDialog.close());

        this.grid.onDataPreLoad.subscribe((evt) => this.disableContextMenu());

        this.data = new FinancialData().generateData(1000);

        this.grid.onRangeSelection.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(100)).subscribe(range => {

            this.zone.runOutsideAngular(() => {
            this.chartIntegration.range = range;
            this.chartIntegration.chartData = this.grid.getSelectedData();
            this.range = range;
            this.tabs.tabs.first.isSelected = true;
            this.formatting.range = range;
        });

            this.renderButton();
        });
    }

    public ngAfterViewInit(): void {
        this.grid.headerContainer.getScroll().onscroll = () => this.disableContextMenu();
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    // tslint:disable: member-ordering
    public chartTypesMenuX;
    public chartTypesMenuY;

    public previewChartTypes = ["Column", "Area", "Line", "Bar"];

    public chartTypes = ["Column", "Area", "Bar", "Line", "Scatter"];

    public pieChartArgs: IChartArgs = {
        chartType: "Pie",
        seriesType: undefined
    };

    public toggleChartSelectionDialog(event) {

        if (!this.chartSelectionDialog.isOpen) {
            this._chartSelectionDilogOverlaySettings.outlet = this.outlet;
            const positionStrategy = {
                verticalStartPoint: VerticalAlignment.Bottom,
                target: event.target
            };

            if (((this.grid.visibleColumns.length - 1) - this.colIndex) < 2 || !this.grid.navigation.isColumnFullyVisible(this.colIndex + 1)) {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Left;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Right;
            } else {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Center;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Center;
            }
            this._chartSelectionDilogOverlaySettings.positionStrategy = new AutoPositionStrategy({ ...positionStrategy });
            this.chartSelectionDialog.open(this._chartSelectionDilogOverlaySettings);
        } else {
            this.chartSelectionDialog.close();
        }
    }

    public previewChart(chart: string) {
        this._chartPreviewDialogOverlaySettings.positionStrategy.settings.target = this.tabs.tabsContainer.nativeElement;
        this.chartPreviewDialog.toggleRef.element.style.width = (this.chartSelectionDialog.toggleRef as any).elementRef.nativeElement.clientWidth + "px";
        this.createChart({ chartType: chart, seriesType: "Grouped" }, this.chartPreview, this.chartPreviewDialog, this._chartPreviewDialogOverlaySettings);
    }

    public formattersNames = [];
    public analyse(type) {
        this.formatting.formatCells(type);
    }

    public rightClick(eventArgs: any) {

        const lastRange = this.grid.getSelectedRanges()[0];
        if (lastRange.columnEnd === lastRange.columnStart && lastRange.rowEnd === lastRange.rowStart) {
            return;
        }

        if (this.range.columnEnd === this.range.columnStart && this.range.rowEnd === this.range.rowStart) {
            return;
        }
        eventArgs.event.preventDefault();
        const node = eventArgs.cell.selectionNode;
        const isCellWithinRange = this.grid.getSelectedRanges().some((range) => {
            if (node.column >= range.columnStart &&
                node.column <= range.columnEnd &&
                node.row >= range.rowStart &&
                node.row <= range.rowEnd) {
                return true;
            }
            return false;
        });

        if (!isCellWithinRange) {
            this.disableContextMenu();

        } else {
            this.renderButton();
        }
    }

    public createChart(args: IChartArgs, host: ChartHostDirective, dialog: IgxDialogComponent, overlaySettings: any) {
        const chartHost = host;
        const dialogToOpen = dialog;
        const dialogOverlaySettings = overlaySettings;
        this.currentChartArg = args;
        chartHost.viewContainerRef.clear();
        requestAnimationFrame(() => {
            this.currentChart = this.chartIntegration.chartFactory(args, chartHost.viewContainerRef);
            if (dialogToOpen.isCollapsed) {
                dialogOverlaySettings.outlet = this.outlet;
                dialogToOpen.open(overlaySettings);
            }
        });
    }

    public disableContextMenu() {
        this.contextmenu = false;
        this.chartSelectionDialog.close();
    }

    @HostListener("pointerdown", ["$event"])
    public onPointerDown(event) {
        if (!event.target.parentElement.classList.contains("analytics-btn") &&
            !event.target.classList.contains("more-btn") &&
            event.target.className.indexOf("igx-button") === -1) {
            this.disableContextMenu();
        }
    }

    public trackByFn(index, item) {
        return index;
    }

    public toggle() {
        this.chartConfigAreaState = this.opened ? "closed" : "opened";
        this.opened = !this.opened;
    }

    public toggleFullScreen() {
        let height;
        let width;
        if (!this.fullScreenOpened) {
            height = this.grid.nativeElement.clientHeight + "px";
            width = this.grid.nativeElement.clientWidth + "px";
        } else {
            height = (this.grid.nativeElement.clientHeight * (70 / 100)) + "px";
            width = (this.grid.nativeElement.clientWidth * (70 / 100)) + "px";
        }

        requestAnimationFrame(() => {
            (this.dialog.toggleRef as any).elementRef.nativeElement.style.width = width;
            (this.dialog.toggleRef as any).elementRef.nativeElement.firstElementChild.style.height = height;
            (this.dialog.toggleRef as any).elementRef.nativeElement.style.transition = "width .2s ease-in-out";
            (this.dialog.toggleRef as any).elementRef.nativeElement.firstElementChild.style.transition = "height .3s ease-in-out";
        });
        this.fullScreenOpened = !this.fullScreenOpened;
    }

    private resetChartDialogInitialDimensions() {
        this.fullScreenOpened = false;
        this.dialog.toggleRef.element.style.width = (this.grid.nativeElement.clientWidth * (70 / 100)) + "px";
        (this.dialog.toggleRef.element.firstChild as HTMLElement).style.height = (this.grid.nativeElement.clientHeight * (70 / 100)) + "px";
    }

    private renderButton() {
        this.rowIndex = this.range.rowEnd;
        this.colIndex = this.range.columnEnd;
        while (!this.grid.navigation.isColumnFullyVisible(this.colIndex)) {
            this.colIndex--;
        }
        if ((!this.grid.getRowByIndex(this.rowIndex) || (this.grid.rowList.toArray().indexOf(this.grid.getRowByIndex(this.rowIndex)) >= this.grid.rowList.length - 2) && this.rowIndex + 2 < this.grid.dataLength)) {
            const lastFullyVisibleRowIndex = this.grid.rowList.toArray()[this.grid.rowList.length - 3].index;
            const field = this.grid.visibleColumns[this.colIndex].field;
            this.clickedCell = this.grid.getCellByColumn(lastFullyVisibleRowIndex, field);
        } else {
            this.clickedCell = this.grid.getCellByColumn(this.rowIndex, this.grid.visibleColumns[this.colIndex].field);
        }

        this.contextmenuX = this.clickedCell.element.nativeElement.getClientRects()[0].right;
        this.contextmenuY = this.clickedCell.element.nativeElement.getClientRects()[0].bottom;
        this.contextmenu = true;
    }
}
