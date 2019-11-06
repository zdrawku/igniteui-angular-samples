import { HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxColumnHidingModule,
    IgxComboModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxExcelExporterService,
    IgxExpansionPanelModule,
    IgxFocusModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxTooltipModule
} from "igniteui-angular";
// tslint:disable-next-line: max-line-length
import { IgxSparklineCoreModule} from "igniteui-angular-charts/ES5/igx-sparkline-core-module";
import { IgxSparklineModule} from "igniteui-angular-charts/ES5/igx-sparkline-module";
import {
     CustomGridPagingStyleSample
    } from "../../src/app/grid/custom-grid-paging-style/custom-grid-paging-style.component";
import {
    GridAdvancedFilteringSampleComponent
} from "../../src/app/grid/grid-advanced-filtering-sample/grid-advanced-filtering-sample.component";
import {
    GridAdvancedFilteringStyleComponent
} from "../../src/app/grid/grid-advanced-filtering-style/grid-advanced-filtering-style.component";
import {
    GridBatchEditingSampleComponent
} from "../../src/app/grid/grid-batch-editing/grid-batch-editing-sample.component";
import { GridWithTransactionsComponent } from "../../src/app/grid/grid-batch-editing/grid-transaction.component";
import { GridComponent } from "../../src/app/grid/grid-boston-marathon/grid.component";
import { GridCellSelectionComponent } from "../../src/app/grid/grid-cellSelection-sample/grid-cellSelection.component";
import {
    GridClipboardSampleComponent
} from "../../src/app/grid/grid-clipboard-operations-sample/grid-clipboard-operations-sample.component";
import {
    GridColumnHidingSampleComponent
} from "../../src/app/grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "../../src/app/grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import {
    GridColumnHidingToolbarStyleComponent
} from "../../src/app/grid/grid-column-hiding-toolbar-style/grid-column-hiding-toolbar-style.component";
import {
    GridCompositeDataComponent
} from "../../src/app/grid/grid-composite-data-binding/grid-composite-data.component";
import {
    GridConditionalCellStyleComponent
} from "../../src/app/grid/grid-conditional-cell-style/grid-conditional-cell-style.component";
import {
    GridConditionalRowSelectorsComponent
} from "../../src/app/grid/grid-conditional-row-selectors/grid-conditional-row-selectors-sample.component";
import { ContextmenuComponent } from "../../src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component";
import {
    GridContextmenuSampleComponent
} from "../../src/app/grid/grid-contextmenu-sample/grid-contextmenu-sample.component";
import { GridCustomFilteringComponent } from "../../src/app/grid/grid-custom-filtering/grid-custom-filtering.component";
import {
    GridCustomKBNavigationComponent
} from "../../src/app/grid/grid-custom-kb-navigation/grid-custom-kb-navigation-sample.component";
import {
    GridCustomSummariesSelection
} from "../../src/app/grid/grid-custom-summaries-selection/grid-custom-summaries-selection.component";
import {
    GridDisplayDensitySampleComponent
} from "../../src/app/grid/grid-displaydensity-sample/grid-displaydensity-sample.component";
import {
    GridEditingEventsComponent
} from "../../src/app/grid/grid-editing-events/grid-editing-events.component";
import { GridEditingSampleComponent } from "../../src/app/grid/grid-editing-sample/grid-editing-sample.component";
import {
    GridEditingStyleSample
} from "../../src/app/grid/grid-editing-style-sample/grid-editing-style-sample.component";
import {
    GridExcelStyleFilteringLoadOnDemandComponent
} from "../../src/app/grid/grid-excel-style-filtering-load-on-demand/grid-excel-style-filtering-load-on-demand.component";
import { RemoteValuesService } from "../../src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service";
import {
    ExcelStyleFilteringSample1Component
} from "../../src/app/grid/grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component";
import {
    ExcelStyleFilteringSample2Component
} from "../../src/app/grid/grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component";
import {
    ExcelStyleFilteringSample3Component
} from "../../src/app/grid/grid-excel-style-filtering-sample-3/grid-excel-style-filtering-sample-3.component";
import {
    ExcelStyleFilteringStyleComponent
} from "../../src/app/grid/grid-excel-style-filtering-style/grid-excel-style-filtering-style.component";
import { FilteringSampleComponent } from "../../src/app/grid/grid-filtering-sample/grid-filtering-sample.component";
import { GridFilteringStyleComponent } from "../../src/app/grid/grid-filtering-style/grid-filtering-style.component";
import {
    FilteringTemplateSampleComponent
} from "../../src/app/grid/grid-filtering-template-sample/grid-filtering-template-sample.component";
import {
    GridGroupByPagingSampleComponent
} from "../../src/app/grid/grid-group-by-paging-sample/grid-group-by-paging-sample.component";
import { GridGroupBySampleComponent } from "../../src/app/grid/grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupByStyling } from "../../src/app/grid/grid-groupby-styling/grid-groupby-styling.component";
import {
    GridGroupBySummarySampleComponent
} from "../../src/app/grid/grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import {
    GridGroupBySummaryStylingSampleComponent
} from "../../src/app/grid/grid-groupby-summary-styling-sample/grid-groupby-summary-styling-sample.component";
import { GridMovingSampleComponent } from "../../src/app/grid/grid-moving-sample/grid-moving-sample.component";
import {
    GridMovingStyledSampleComponent
} from "../../src/app/grid/grid-moving-styled-sample/grid-moving-styled-sample.component";
// tslint:disable-next-line: max-line-length
import { GridMRLCustomNavigationComponent } from "../../src/app/grid/grid-mrl-custom-navigation/grid-mrl-custom-navigation.component";
import {
    GridMultiCellSelectionStyleComponent
} from "../../src/app/grid/grid-multi-cell-selection-style/grid-multi-cell-selection-style.component";
import {
    GridMultiCellSelectionComponent
} from "../../src/app/grid/grid-multi-cell-selection/grid-multi-cell-selection.component";
import {
    GridMultiRowLayoutConfigurationComponent
} from "../../src/app/grid/grid-multi-row-layout-configuration/grid-multi-row-layout-configuration.component";
import {
    GridMultiRowLayoutStylingComponent
} from "../../src/app/grid/grid-multi-row-layout-styling/grid-multi-row-layout-styling.component";
import { GridMultiRowLayoutComponent } from "../../src/app/grid/grid-multi-row-layout/grid-multi-row-layout.component";
import { GridNestedDataBindComponent } from "../../src/app/grid/grid-nested-data-binding/grid-nested-data-bind";
import { GridPagerSampleComponent } from "../../src/app/grid/grid-pager-sample/grid-pager-sample.component";
import { PagingSampleComponent } from "../../src/app/grid/grid-paging-sample/grid-paging-sample.component";
import {
    RemoteFilteringSampleComponent
} from "../../src/app/grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "../../src/app/grid/grid-remote-paging-sample/remote-paging-sample.component";
import {
    GridResizeLineStylingSampleComponent
} from "../../src/app/grid/grid-resize-line-styling-sample/grid-resize-line-styling-sample";
import { ResizingSampleComponent } from "../../src/app/grid/grid-resizing-sample/grid-resizing-sample.component";
import { GridDragBaseSampleComponent } from "../../src/app/grid/grid-row-drag-base/grid-row-drag-base.component";
import {
    GridDragToGridSampleComponent
} from "../../src/app/grid/grid-row-drag-to-grid/grid-row-drag-to-grid.component";
import { GridDragSampleComponent } from "../../src/app/grid/grid-row-drag/grid-row-drag.component";
import { PlanetComponent } from "../../src/app/grid/grid-row-drag/planet/planet.component";
import {
    GridRowEditSampleComponent
} from "../../src/app/grid/grid-row-editing-sample/grid-row-editing-sample.component";
import {
    GridRowEditStyleComponent
} from "../../src/app/grid/grid-row-editing-style/grid-row-editing-style.component";
import { GridRowReorderComponent } from "../../src/app/grid/grid-row-reorder-sample/grid-row-reorder";
import { FinancialSampleComponent, LocalService } from "../../src/app/grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "../../src/app/grid/grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "../../src/app/grid/grid-sample-4/grid-sample-4.component";
import { PinningStylingComponent } from "../../src/app/grid/grid-sample-pinning-styling/grid-pinning-styling.component";
import { PinningSampleComponent } from "../../src/app/grid/grid-sample-pinning/grid-pinning.component";
import { PinningToolbarSampleComponent } from "../../src/app/grid/grid-sample-pinning/grid-toolbar-pinning.component";
import { GridSelectionTemplateExcelComponent
} from "../../src/app/grid/grid-sample-selection-template-excel/grid-sample-selection-template-excel.component";
import {
    GridSelectionTemplateNumbersComponent
} from "../../src/app/grid/grid-sample-selection-template-numbers/grid-sample-selection-template-numbers.component";
import { GridSelectionSampleComponent } from "../../src/app/grid/grid-sample-selection/grid-selection.component";
import { AboutComponent } from "../../src/app/grid/grid-save-state/about.component";
import { GridSaveStateComponent } from "../../src/app/grid/grid-save-state/grid-state.component";
import { IgxGridStateDirective } from "../../src/app/grid/grid-save-state/state.directive";
import { GridSearchSampleComponent } from "../../src/app/grid/grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "../../src/app/grid/grid-sorting-sample/grid-sorting-sample.component";
import { SortingStylingComponent } from "../../src/app/grid/grid-sorting-styling/grid-sorting-styling.component";
import { GridToolbarSample1Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridToolbarStyleComponent } from "../../src/app/grid/grid-toolbar-style/grid-toolbar-style.component";
import {
    GridMultiColumnHeaderTemplateComponent
} from "../../src/app/grid/multi-column-header-template/multi-column-header-template";
import {
    GridMultiColumnHeadersStylingComponent
} from "../../src/app/grid/multi-column-headers-styling/multi-column-headers-styling.component";
import { GridMultiColumnHeadersComponent } from "../../src/app/grid/multi-column-headers/multi-column-headers";
import { DataService } from "../../src/app/grid/services/data.service";
import { RemoteFilteringService } from "../../src/app/grid/services/remoteFilteringService";
import { RemotePagingService } from "../../src/app/grid/services/remotePagingService";
import { RemoteServiceVirt } from "../../src/app/grid/services/remoteService";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: GridComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridComponent, DataService,
                    IgxSparklineCoreModule, IgxSparklineModule],
                ngDeclarations: [GridComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRippleModule,
                    IgxSwitchModule, HttpClientModule, IgxSparklineCoreModule, IgxSparklineModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: FinancialSampleComponent,
            additionalFiles: ["/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, FinancialSampleComponent, LocalService],
                ngDeclarations: [FinancialSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [LocalService]
            })
        }));

        configs.push(new Config({
            component: GridSample3Component,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxButtonModule, IgxGridModule, IgxInputGroupModule,
                    IgxRippleModule, IgxSwitchModule, GridSample3Component, LocalService, IgxIconModule],
                ngDeclarations: [GridSample3Component],
                ngImports: [IgxButtonModule, IgxGridModule,
                    IgxInputGroupModule, IgxRippleModule, HttpClientModule, IgxIconModule]
            })
        }));

        configs.push(new Config({
            component: GridGroupBySampleComponent,
            additionalFiles: ["/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxGridModule,
                    IgxSwitchModule, GridGroupBySampleComponent, IgxIconModule, IgxBadgeModule],
                ngDeclarations: [GridGroupBySampleComponent],
                ngImports: [IgxButtonModule, IgxGridModule, IgxIconModule, IgxBadgeModule]
            })
        }));

        configs.push(new Config({
            component: GridGroupBySummarySampleComponent,
            additionalFiles: ["/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxButtonGroupModule, IgxGridModule,
                    IgxSwitchModule, GridGroupBySummarySampleComponent, IgxIconModule, IgxBadgeModule],
                ngDeclarations: [GridGroupBySummarySampleComponent],
                ngImports: [IgxButtonModule, IgxButtonGroupModule, IgxGridModule,
                    IgxIconModule, IgxBadgeModule]
            })
        }));

        configs.push(new Config({
            component: GridGroupBySummaryStylingSampleComponent,
            additionalFiles: ["/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxButtonGroupModule, IgxGridModule,
                    IgxSwitchModule, GridGroupBySummaryStylingSampleComponent, IgxIconModule, IgxBadgeModule],
                ngDeclarations: [GridGroupBySummaryStylingSampleComponent],
                ngImports: [IgxButtonModule, IgxButtonGroupModule, IgxGridModule,
                    IgxIconModule, IgxBadgeModule]
                })
        }));

        configs.push(new Config({
            component: GridFilteringStyleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridFilteringStyleComponent],
                ngDeclarations: [GridFilteringStyleComponent],
                ngImports: [IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: FilteringSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxRippleModule, FilteringSampleComponent, IgxInputGroupModule],
                ngDeclarations: [FilteringSampleComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxInputGroupModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: FilteringTemplateSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxGridModule,
                    IgxRippleModule,
                    FilteringTemplateSampleComponent,
                    IgxInputGroupModule,
                    IgxDatePickerModule],
                ngDeclarations: [FilteringTemplateSampleComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxInputGroupModule, IgxDatePickerModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: PagingSampleComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, PagingSampleComponent, DataService],
                ngDeclarations: [PagingSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: GridPagerSampleComponent,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxRippleModule, IgxSwitchModule, GridPagerSampleComponent, IgxSelectModule],
                ngDeclarations: [GridPagerSampleComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxSwitchModule, IgxSelectModule]
            })
        }));

        configs.push(new Config({
            component: GridSelectionSampleComponent,
            additionalFiles: ["/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxSnackbarModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxSwitchModule, GridSelectionSampleComponent],
                ngDeclarations: [GridSelectionSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule, IgxSnackbarModule,
                    IgxIconModule, IgxInputGroupModule, IgxSwitchModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridSelectionTemplateExcelComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridSelectionTemplateExcelComponent],
                ngDeclarations: [GridSelectionTemplateExcelComponent],
                ngImports: [IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridSelectionTemplateNumbersComponent,
            additionalFiles: [
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCheckboxModule, IgxGridModule,
                    GridSelectionTemplateNumbersComponent],
                ngDeclarations: [GridSelectionTemplateNumbersComponent],
                ngImports: [IgxCheckboxModule, IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridSearchSampleComponent,
            additionalFiles: ["/src/app/grid/grid-search-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxButtonModule, IgxGridModule, IgxIconModule,
                    IgxInputGroupModule, IgxRippleModule, IgxChipsModule, GridSearchSampleComponent],
                ngDeclarations: [GridSearchSampleComponent],
                ngImports: [IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule,
                    IgxRippleModule, IgxChipsModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridColumnHidingSampleComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxGridModule, IgxRadioModule,
                    IgxColumnHidingModule, GridColumnHidingSampleComponent],
                ngDeclarations: [GridColumnHidingSampleComponent],
                ngImports: [IgxGridModule, IgxRadioModule, IgxColumnHidingModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridColumnHidingToolbarSampleComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxGridModule, GridColumnHidingToolbarSampleComponent],
                ngDeclarations: [GridColumnHidingToolbarSampleComponent],
                ngImports: [IgxGridModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridColumnHidingToolbarStyleComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxGridModule, GridColumnHidingToolbarStyleComponent],
                ngDeclarations: [GridColumnHidingToolbarStyleComponent],
                ngImports: [IgxGridModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: ResizingSampleComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, ResizingSampleComponent],
                ngDeclarations: [ResizingSampleComponent],
                ngImports: [IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridResizeLineStylingSampleComponent,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridResizeLineStylingSampleComponent],
                ngDeclarations: [GridResizeLineStylingSampleComponent],
                ngImports: [IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: SortingSampleComponent,
            additionalFiles: ["/src/app/data/localData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxIconModule, IgxRippleModule,
                    SortingSampleComponent, IgxInputGroupModule, IgxSelectModule],
                ngDeclarations: [SortingSampleComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/localData.ts"],
            component: SortingStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxIconModule, IgxRippleModule,
                    SortingStylingComponent, IgxInputGroupModule, IgxSelectModule],
                ngDeclarations: [SortingStylingComponent],
                ngImports: [IgxGridModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridRemoteVirtualizationSampleComponent,
            additionalFiles: ["/src/app/grid/services/remoteService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridRemoteVirtualizationSampleComponent, IgxGridModule, IgxToastModule,
                    IgxBadgeModule, HttpClientModule, RemoteServiceVirt],
                ngDeclarations: [GridRemoteVirtualizationSampleComponent],
                ngImports: [IgxGridModule, IgxToastModule, IgxBadgeModule, HttpClientModule],
                ngProviders: [RemoteServiceVirt]
            })
        }));

        configs.push(new Config({
            component: RemoteFilteringSampleComponent,
            additionalFiles: ["/src/app/grid/services/remoteFilteringService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [RemoteFilteringSampleComponent, IgxGridModule,
                    IgxBadgeModule, HttpClientModule, RemoteFilteringService, IgxToastModule],
                ngDeclarations: [RemoteFilteringSampleComponent],
                ngImports: [IgxGridModule, IgxBadgeModule, HttpClientModule, IgxToastModule],
                ngProviders: [RemoteFilteringService]
            })
        }));

        configs.push(new Config({
            component: PinningSampleComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [PinningSampleComponent, IgxGridModule, IgxIconModule],
                ngDeclarations: [PinningSampleComponent],
                ngImports: [IgxGridModule, IgxIconModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: PinningToolbarSampleComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [PinningToolbarSampleComponent, IgxGridModule, IgxIconModule],
                ngDeclarations: [PinningToolbarSampleComponent],
                ngImports: [IgxGridModule, IgxIconModule],
                ngProviders: []
            })
        }));

        // column-moving sample
        configs.push(new Config({
            component: GridMovingSampleComponent,
            additionalFiles: ["/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMovingSampleComponent, IgxGridModule, IgxBadgeModule, IgxIconModule],
                ngDeclarations: [GridMovingSampleComponent],
                ngImports: [IgxGridModule, IgxBadgeModule, IgxIconModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridMovingStyledSampleComponent,
            additionalFiles: ["/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMovingStyledSampleComponent, IgxGridModule, IgxBadgeModule, IgxIconModule],
                ngDeclarations: [GridMovingStyledSampleComponent],
                ngImports: [IgxGridModule, IgxBadgeModule, IgxIconModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample1Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample1Component, IgxAvatarModule, IgxGridModule],
                ngDeclarations: [GridToolbarSample1Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample2Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample2Component, IgxAvatarModule, IgxGridModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarSample2Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample3Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample3Component, IgxAvatarModule, IgxGridModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarSample3Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample4Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample4Component, IgxAvatarModule, IgxGridModule],
                ngDeclarations: [GridToolbarSample4Component],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridToolbarStyleComponent,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarStyleComponent, IgxAvatarModule, IgxGridModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarStyleComponent],
                ngImports: [IgxAvatarModule, IgxGridModule],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridEditingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-editing-sample/data.ts",
                "/src/app/grid/grid-editing-sample/product.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule,
                    IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxComboModule,
                    IgxRippleModule, GridEditingSampleComponent],
                ngDeclarations: [GridEditingSampleComponent],
                ngImports: [IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule,
                    IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxComboModule]
            })
        }));

        configs.push(new Config({
            component: GridEditingEventsComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxToastModule, GridEditingEventsComponent],
                ngDeclarations: [GridEditingEventsComponent],
                ngImports: [IgxGridModule, IgxToastModule]
            })
        }));

        configs.push(new Config({
            component: GridEditingStyleSample,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridEditingStyleSample, IgxGridModule, IgxDatePickerModule],
                ngDeclarations: [GridEditingStyleSample],
                ngImports: [IgxGridModule, IgxDatePickerModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiColumnHeadersComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiColumnHeadersComponent, IgxGridModule, IgxButtonModule],
                ngDeclarations: [GridMultiColumnHeadersComponent],
                ngImports: [IgxGridModule, IgxButtonModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiColumnHeadersStylingComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiColumnHeadersStylingComponent, IgxGridModule, IgxButtonModule],
                ngDeclarations: [GridMultiColumnHeadersStylingComponent],
                ngImports: [IgxGridModule, IgxButtonModule]
            })
        }));

        configs.push(new Config({
            component: RemotePagingGridSample,
            additionalFiles: ["/src/app/grid/services/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [RemotePagingGridSample, IgxGridModule, RouterModule, HttpClientModule, RemotePagingService,
                    IgxSelectModule],
                ngDeclarations: [RemotePagingGridSample],
                ngImports: ["RouterModule.forRoot([])", IgxGridModule, HttpClientModule, IgxSelectModule],
                ngProviders: [RemotePagingService]
            })
        }));

        configs.push(new Config({
            component: GridDisplayDensitySampleComponent,
            additionalFiles: ["/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxButtonGroupModule,
                    IgxGridModule, GridDisplayDensitySampleComponent],
                ngDeclarations: [GridDisplayDensitySampleComponent],
                ngImports: [IgxButtonModule, IgxButtonGroupModule,
                    IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridConditionalCellStyleComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridConditionalCellStyleComponent],
                ngDeclarations: [GridConditionalCellStyleComponent],
                ngImports: [IgxGridModule]
            })
        }));

        // Grid Batch Editing
        configs.push(new Config({
            component: GridBatchEditingSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts", "/src/app/data/utils.ts",
                "/src/app/grid/grid-batch-editing/grid-transaction.component.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridBatchEditingSampleComponent, IgxGridModule, IgxDialogModule, IgxButtonModule,
                    IgxFocusModule, GridWithTransactionsComponent],
                ngDeclarations: [GridBatchEditingSampleComponent, GridWithTransactionsComponent],
                ngImports: [IgxGridModule, IgxDialogModule, IgxButtonModule,
                    IgxFocusModule]
            })
        }));

        // Grid Custom Summaries
        configs.push(new Config({
            component: GridCustomSummariesSelection,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridCustomSummariesSelection, IgxGridModule],
                ngDeclarations: [GridCustomSummariesSelection],
                ngImports: [IgxGridModule]
            })
        }));

        // Grid Row Editing
        configs.push(new Config({
            component: GridRowEditSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridRowEditSampleComponent, IgxGridModule, IgxFocusModule],
                ngDeclarations: [GridRowEditSampleComponent],
                ngImports: [IgxGridModule, IgxFocusModule]
            })
        }));

        // Grid Row Editing Styling
        configs.push(new Config({
            component: GridRowEditStyleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridRowEditStyleComponent, IgxGridModule, IgxFocusModule, IgxIconModule],
                ngDeclarations: [GridRowEditStyleComponent],
                ngImports: [IgxGridModule, IgxFocusModule, IgxIconModule]
            })
        }));

        configs.push(new Config({
            component: GridCustomFilteringComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridCustomFilteringComponent, IgxGridModule],
                ngDeclarations: [GridCustomFilteringComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: ExcelStyleFilteringSample1Component,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ExcelStyleFilteringSample1Component, IgxGridModule, IgxButtonGroupModule],
                ngDeclarations: [ExcelStyleFilteringSample1Component],
                ngImports: [IgxGridModule, IgxButtonGroupModule]
            })
        }));

        configs.push(new Config({
            component: ExcelStyleFilteringSample2Component,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ExcelStyleFilteringSample2Component, IgxGridModule],
                ngDeclarations: [ExcelStyleFilteringSample2Component],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: ExcelStyleFilteringSample3Component,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ExcelStyleFilteringSample3Component, IgxGridModule],
                ngDeclarations: [ExcelStyleFilteringSample3Component],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridExcelStyleFilteringLoadOnDemandComponent,
            additionalFiles: ["/src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service.ts",
                              "/src/app/grid/grid-excel-style-filtering-load-on-demand/employees.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridExcelStyleFilteringLoadOnDemandComponent, IgxGridModule, RemoteValuesService],
                ngDeclarations: [GridExcelStyleFilteringLoadOnDemandComponent],
                ngImports: [IgxGridModule],
                ngProviders: [RemoteValuesService]
            })
        }));

        configs.push(new Config({
            component: ExcelStyleFilteringStyleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ExcelStyleFilteringStyleComponent, IgxGridModule ],
                ngDeclarations: [ExcelStyleFilteringStyleComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiCellSelectionComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiCellSelectionComponent, IgxGridModule, IgxToastModule],
                ngDeclarations: [GridMultiCellSelectionComponent],
                ngImports: [IgxGridModule, IgxToastModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiCellSelectionStyleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiCellSelectionStyleComponent, IgxGridModule],
                ngDeclarations: [GridMultiCellSelectionStyleComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiRowLayoutComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiRowLayoutComponent, IgxGridModule],
                ngDeclarations: [GridMultiRowLayoutComponent],
                ngImports: [IgxGridModule]
            })
        }));

        const gridSaveStateSampleConfig = new Config({
            component: GridSaveStateComponent,
            additionalFiles: [
                "/src/app/grid/grid-save-state/localData.ts",
                "/src/app/grid/grid-save-state/state.directive.ts",
                "/src/app/grid/grid-save-state/about.component.ts",
                "/src/app/grid/grid-save-state/about.component.html"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [GridSaveStateComponent, IgxGridModule, IgxTooltipModule,
                    IgxToastModule, IgxSwitchModule, AboutComponent, Router, RouterModule, IgxGridStateDirective],
                ngDeclarations: [GridSaveStateComponent, AboutComponent, IgxGridStateDirective],
                ngImports: [IgxGridModule.forRoot(), IgxTooltipModule,
                    // tslint:disable-next-line:max-line-length
                    "RouterModule.forRoot([\{component: AboutComponent, path: 'grid-about'},\{component: GridSaveStateComponent, path: 'grid-state'},\{ path: '', redirectTo: '/grid-state', pathMatch: 'full' }])",
                    IgxToastModule, IgxSwitchModule]
            })
        });
        gridSaveStateSampleConfig.usesRouting = true;
        configs.push(gridSaveStateSampleConfig);

        configs.push(new Config({
            component: GridMultiRowLayoutConfigurationComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiRowLayoutConfigurationComponent, IgxGridModule],
                ngDeclarations: [GridMultiRowLayoutConfigurationComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridDragToGridSampleComponent, IgxDragDropModule,
                    IgxIconModule, IgxButtonModule],
                ngDeclarations: [GridDragToGridSampleComponent],
                ngImports: [IgxGridModule, IgxDragDropModule, IgxIconModule, IgxButtonModule]
            }),
            component: GridDragToGridSampleComponent
        }));

        configs.push(new Config({
            component: GridNestedDataBindComponent,
            additionalFiles: ["/src/app/grid/grid-nested-data-binding/nestedData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridNestedDataBindComponent, IgxGridModule, IgxInputGroupModule, IgxExpansionPanelModule],
                ngDeclarations: [GridNestedDataBindComponent],
                ngImports: [IgxGridModule, IgxInputGroupModule, IgxExpansionPanelModule]
            })
        }));

        configs.push(new Config({
            component: GridCompositeDataComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridCompositeDataComponent, IgxGridModule, IgxInputGroupModule],
                ngDeclarations: [GridCompositeDataComponent],
                ngImports: [IgxGridModule, IgxInputGroupModule]
            })
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridDragBaseSampleComponent, IgxDragDropModule, IgxButtonModule],
                ngDeclarations: [GridDragBaseSampleComponent],
                ngImports: [IgxGridModule, IgxDragDropModule, IgxButtonModule]
            }),
            component: GridDragBaseSampleComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/nwindData.ts",
                "src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.ts",
                "src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.html",
                "src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridContextmenuSampleComponent, ContextmenuComponent],
                ngDeclarations: [GridContextmenuSampleComponent, ContextmenuComponent],
                ngImports: [IgxGridModule]
            }),
            component: GridContextmenuSampleComponent
        }));

        configs.push(new Config({
            component: GridCustomKBNavigationComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridCustomKBNavigationComponent, IgxGridModule],
                ngDeclarations: [GridCustomKBNavigationComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            additionalFiles: [
                "/src/app/grid/grid-row-drag/data.ts",
                "/src/app/grid/grid-row-drag/planet/planet.component.html",
                "/src/app/grid/grid-row-drag/planet/planet.component.scss",
                "/src/app/grid/grid-row-drag/planet/planet.component.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridDragSampleComponent, PlanetComponent, IgxDragDropModule, IgxDialogModule],
                ngDeclarations: [GridDragSampleComponent, PlanetComponent],
                ngImports: [IgxGridModule, IgxDragDropModule, IgxDialogModule]
            }),
            component: GridDragSampleComponent
        }));

        configs.push(new Config({
            component: GridMRLCustomNavigationComponent,
            additionalFiles: ["/src/app/data/company-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMRLCustomNavigationComponent, IgxGridModule],
                ngDeclarations: [GridMRLCustomNavigationComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: CustomGridPagingStyleSample,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [CustomGridPagingStyleSample, IgxGridModule],
                ngDeclarations: [CustomGridPagingStyleSample],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridRowReorderComponent,
            additionalFiles: [
                "/src/app/data/customers.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridRowReorderComponent, IgxDragDropModule],
                ngDeclarations: [GridRowReorderComponent],
                ngImports: [IgxGridModule, IgxDragDropModule]
            })
        }));
        configs.push(new Config({
            component: GridGroupByPagingSampleComponent,
            additionalFiles: [
                "/src/app/data/invoiceData.ts"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxIconModule, GridGroupByPagingSampleComponent],
                ngDeclarations: [GridGroupByPagingSampleComponent],
                ngImports: [IgxGridModule, IgxIconModule]
            })
        }));
        configs.push(new Config({
            component: GridMultiColumnHeaderTemplateComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiColumnHeaderTemplateComponent, IgxGridModule],
                ngDeclarations: [GridMultiColumnHeaderTemplateComponent],
                ngImports: [IgxGridModule]
            })
        }));
        configs.push(new Config({
            component: GridClipboardSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridClipboardSampleComponent, IgxGridModule, IgxSwitchModule],
                ngDeclarations: [GridClipboardSampleComponent],
                ngImports: [IgxGridModule, IgxSwitchModule]
            })
        }));
        configs.push(new Config({
            component: PinningStylingComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [PinningStylingComponent, IgxGridModule, IgxIconModule],
                ngDeclarations: [PinningStylingComponent],
                ngImports: [IgxGridModule, IgxIconModule]
            })
        }));
        configs.push(new Config({
            component: GridGroupByStyling,
            additionalFiles: ["/src/app/data/invoiceData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridGroupByStyling, IgxGridModule],
                ngDeclarations: [GridGroupByStyling],
                ngImports: [IgxGridModule]
            })
        }));
        configs.push(new Config({
            component: GridCellSelectionComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridCellSelectionComponent, IgxGridModule, IgxSwitchModule,
                    IgxIconModule, IgxButtonGroupModule, IgxAvatarModule],
                ngDeclarations: [GridCellSelectionComponent, IgxGridModule, IgxIconModule, IgxSwitchModule,
                    IgxButtonGroupModule, IgxAvatarModule],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiRowLayoutStylingComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiRowLayoutStylingComponent, IgxGridModule],
                ngDeclarations: [GridMultiRowLayoutStylingComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridAdvancedFilteringSampleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridAdvancedFilteringSampleComponent, IgxGridModule],
                ngDeclarations: [GridAdvancedFilteringSampleComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridAdvancedFilteringStyleComponent,
            additionalFiles: ["/src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridAdvancedFilteringStyleComponent, IgxGridModule ],
                ngDeclarations: [GridAdvancedFilteringStyleComponent],
                ngImports: [IgxGridModule]
            })
        }));

        configs.push(new Config({
            component: GridConditionalRowSelectorsComponent,
            additionalFiles: ["/src/app/data/customers.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxGridModule, GridConditionalRowSelectorsComponent, IgxCheckboxModule],
                ngDeclarations: [GridConditionalRowSelectorsComponent],
                ngImports: [IgxGridModule, IgxCheckboxModule],
                ngProviders: []
            })
        }));
        return configs;
    }
}
