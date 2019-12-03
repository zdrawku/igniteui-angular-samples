// tslint:disable: max-line-length
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Inject, Input, NgZone, Output, Type, ViewContainerRef } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { IgxAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-area-series-component";
import { IgxBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-bar-series-component";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-column-series-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxItemLegendComponent } from "igniteui-angular-charts/ES5/igx-item-legend-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-line-series-component";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-line-series-component";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-series-component";
import { IgxStacked100AreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series-component";
import { IgxStacked100BarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-component";
import { IgxStacked100ColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-component";
import { IgxStacked100LineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-component";
import { IgxStackedAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-area-series-component";
import { IgxStackedBarSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-bar-series-component";
import { IgxStackedColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-column-series-component";
import { IgxStackedLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-stacked-line-series-component";
import { ChartInitializer,
         IChartComponentOptions,
         IChartSeriesOptions,
         IgxBarDataChartInitializer,
         IgxDataChartInitializer,
         IgxPieChartInitializer,
         IgxScatterChartInitializer,
         IgxStackedBarDataChartInitializer,
         IgxStackedDataChartInitializer,
         IStackedFragmentOptions } from "./initializers";
@Directive({
    selector: "[chartHost]"
})
export class ChartHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
    selector: "[chartIntegration]"
})
export class ChartIntegrationDirective {

    public get chartData() {
        return this._chartData;
    }

    public set chartData(selectedData: any[]) {
        const dataModel = selectedData[0];
        this.labelMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === "string");
        this.valueMemberPaths = Object.keys(dataModel).filter(key => typeof dataModel[key] === "number");
        this.selectedRows = this.grid.filteredSortedData.slice(this.range.rowStart, this.range.rowEnd + 1);
        this._chartData = selectedData;
        if (this.labelMemberPaths.length !== 0) {
            this.labelMemberPath = this.labelMemberPaths[0];
        } else if (this.defaultLabelMemberPath !== "") {
            this.labelMemberPath = this.defaultLabelMemberPath;
            this._chartData = selectedData.map((dataRecord, index) => this.addMemberPath(dataRecord, this.selectedRows[index], this.labelMemberPath));
        } else {
            this.labelMemberPath  = undefined;
        }
    }

    @Output()
    public onChartTypesDetermined = new EventEmitter<string[]>();

    public range;

    @Input()
    public defaultLabelMemberPath: string = "";

    private labelMemberPath: string;
    private selectedRows;
    private _chart;
    private dataChartSeries = new Map<string, Type<any>>();
    private scatterChartSeries = new Map<string, Type<any>>();
    private labelMemberPaths = [];
    private valueMemberPaths = [];
    private _chartData;
    private _scatterChartTypes = [];
    private _dataChartTypes = [];
    constructor(@Inject(IgxGridComponent) private grid: IgxGridComponent, private factoryResolver: ComponentFactoryResolver, private zone: NgZone) {
        let iterable;
        this.dataChartSeries.set("ColumnGrouped", IgxColumnSeriesComponent);
        this.dataChartSeries.set("AreaGrouped", IgxAreaSeriesComponent);
        this.dataChartSeries.set("LineGrouped", IgxLineSeriesComponent);
        this.dataChartSeries.set("BarGrouped", IgxBarSeriesComponent);

        this.dataChartSeries.set("ColumnStacked", IgxStackedColumnSeriesComponent);
        this.dataChartSeries.set("AreaStacked", IgxStackedAreaSeriesComponent);
        this.dataChartSeries.set("LineStacked", IgxStackedLineSeriesComponent);
        this.dataChartSeries.set("BarStacked", IgxStackedBarSeriesComponent);

        this.dataChartSeries.set("Column100Stacked", IgxStacked100ColumnSeriesComponent);
        this.dataChartSeries.set("Area100Stacked", IgxStacked100AreaSeriesComponent);
        this.dataChartSeries.set("Line100Stacked", IgxStacked100LineSeriesComponent);
        this.dataChartSeries.set("Bar100Stacked", IgxStacked100BarSeriesComponent);

        this.scatterChartSeries.set("ScatterPoint", IgxScatterSeriesComponent);
        this.scatterChartSeries.set("ScatterBubble", IgxBubbleSeriesComponent);
        this.scatterChartSeries.set("ScatterLine", IgxScatterLineSeriesComponent);

        iterable = this.dataChartSeries.keys();
        for (let head = iterable.next().value; head !== undefined; head = iterable.next().value) {
            this._dataChartTypes.push(head);
        }
        iterable = this.scatterChartSeries.keys();
        for (let head = iterable.next().value; head !== undefined; head = iterable.next().value) {
            this._scatterChartTypes.push(head);
        }
    }

    public chartFactory(chartType: string, viewContainerRef: ViewContainerRef, options: IChartComponentOptions, seriesInfo?: { seriesType?: string, seriesModel?: IChartSeriesOptions }) {

        let componentFactory: ComponentFactory<any>;
        let componentRef: ComponentRef<any>;
        const itemLegendFactory = this.factoryResolver.resolveComponentFactory(IgxItemLegendComponent);
        const legendFactory = this.factoryResolver.resolveComponentFactory(IgxLegendComponent);

        let legendComponentRef;
        let initializer: ChartInitializer;
        switch (chartType) {
            case "Pie":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxPieChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                const itemLegendComponentRef = viewContainerRef.createComponent(itemLegendFactory);
                options.chartOptions["legend"] = itemLegendComponentRef.instance;
                this.addPieChartDataOptions(options);
                initializer = new IgxPieChartInitializer();
                break;
            case "Column":
            case "Area":
            case "Line":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                options.xAxisOptions = {
                    label: this.labelMemberPath
                };
                options.yAxisOptions = undefined;
                this.addDataChartDataOptions(options, false, seriesInfo.seriesModel);
                if (seriesInfo.seriesType.indexOf("Stacked") !== -1) {
                    this.addDataChartDataOptions(options, true, seriesInfo.seriesModel);
                    initializer = new IgxStackedDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                } else {
                    this.addDataChartDataOptions(options, false, seriesInfo.seriesModel);
                    initializer = new IgxDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                }
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                options.chartOptions["legend"] = legendComponentRef.instance;
                break;
            case "Bar":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                options.yAxisOptions = {
                    label: this.labelMemberPath
                };
                options.xAxisOptions = null;
                if (seriesInfo.seriesType.indexOf("Stacked") !== -1) {
                    this.addDataChartDataOptions(options, true, seriesInfo.seriesModel);
                    initializer = new IgxStackedBarDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                } else {
                    this.addDataChartDataOptions(options, false, seriesInfo.seriesModel);
                    initializer = new IgxBarDataChartInitializer(this.dataChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                }
                options.chartOptions["legend"] = legendComponentRef.instance;
                break;
            case "Scatter":
                componentFactory = this.factoryResolver.resolveComponentFactory(IgxDataChartComponent);
                componentRef = viewContainerRef.createComponent(componentFactory);
                legendComponentRef = viewContainerRef.createComponent(legendFactory);
                this.addScatterChartDataOptions(options, seriesInfo.seriesModel);
                options.chartOptions["legend"] = legendComponentRef.instance;
                initializer = new IgxScatterChartInitializer(this.scatterChartSeries.get(`${chartType + seriesInfo.seriesType}`));
                break;
        }
        this.chartInstance(initializer, componentRef.instance, options);

        return this._chart;
    }

    private chartInstance(initializer: ChartInitializer, chart: any, options?: IChartComponentOptions) {
        if (options) {
            this._chart = initializer.initChart(chart, options);
        } else {
            this._chart = initializer.initChart(chart);
        }
    }

    private addPieChartDataOptions(options: IChartComponentOptions) {
        options.chartOptions["dataSource"] = this.chartData;
        options.chartOptions["valueMemberPath"] = this.valueMemberPaths[0];
        if (!this.labelMemberPath) {
            options.chartOptions["labelMemberPath"] = this.valueMemberPaths[0];
        } else {
            options.chartOptions["labelMemberPath"] = this.valueMemberPaths[0];
        }
    }

    private addDataChartDataOptions(options: IChartComponentOptions, stacked: boolean, model?: IChartSeriesOptions) {
        options.chartOptions["dataSource"] = this.chartData;
        if (stacked) {
            const fragmentOptions: IStackedFragmentOptions[] = [];
            this.valueMemberPaths.forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = valueMemberPath;
                tempObj["valueMemberPath"] = valueMemberPath;
                fragmentOptions.push({ ...tempObj });
            });
            options.stackedFragmentOptions = fragmentOptions;
        } else if (model) {
            const seriesOptions: IChartSeriesOptions[] = [];
            this.valueMemberPaths.forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = valueMemberPath;
                tempObj["valueMemberPath"] = valueMemberPath;
                seriesOptions.push({ ...tempObj, ...model });
            });
            options.seriesOptions = seriesOptions;
        }
    }

    private addScatterChartDataOptions(options: IChartComponentOptions, model?: IChartSeriesOptions) {
        const dataSubjects = new Set(this.valueMemberPaths);
        dataSubjects.add(model["yMemberPath"]);
        if (model["radiusScale"]) {
            dataSubjects.add(model["radiusMemberPath"]);
        }
        this.valueMemberPaths = [...dataSubjects];
        options.chartOptions["dataSource"] = this.chartData.map((dataRecord, index) => this.addMemberPath(dataRecord, this.selectedRows[index], ...dataSubjects));
        if (model) {
            const seriesOptions: IChartSeriesOptions[] = [];
            this.valueMemberPaths.filter(v => !(v === model["yMemberPath"] || v === model["radiusMemberPath"])).forEach(valueMemberPath => {
                const tempObj = new Object();
                tempObj["title"] = `${model["yMemberPath"]} vs ${valueMemberPath}`;
                tempObj["xMemberPath"] = valueMemberPath;
                tempObj["labelMemberPath"] = this.labelMemberPath;
                seriesOptions.push({ ...tempObj, ...model });
            });
            options.seriesOptions = seriesOptions;
        }
    }

    private addMemberPath(dataRecord, selectedRow, ...paths) {
        paths.forEach(path => {
            dataRecord = { ...{ [path]: selectedRow[path] }, ...dataRecord };
        });
        return dataRecord;
    }
}
