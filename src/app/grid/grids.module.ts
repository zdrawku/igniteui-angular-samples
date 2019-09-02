// tslint:disable:max-line-length
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule,
    IgxColumnHidingModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule,
    IgxExcelExporterService, IgxExpansionPanelModule, IgxFocusModule, IgxGridModule, IgxIconModule, IgxInputGroupModule,
    IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule, IgxSwitchModule, IgxToastModule, 
    IgxToggleModule, IgxTooltipModule
} from "igniteui-angular";
import { GridBatchEditingSampleComponent } from "./grid-batch-editing/grid-batch-editing-sample.component";
import { GridWithTransactionsComponent } from "./grid-batch-editing/grid-transaction.component";
import { GridComponent } from "./grid-boston-marathon/grid.component";
import { GridClipboardSampleComponent } from "./grid-clipboard-operations-sample/grid-clipboard-operations-sample.component";
import { GridColumnHidingSampleComponent } from "./grid-column-hiding-sample/grid-column-hiding-sample.component";
import { GridColumnHidingToolbarSampleComponent } from "./grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridColumnHidingToolbarStyleComponent } from "./grid-column-hiding-toolbar-style/grid-column-hiding-toolbar-style.component";
import { GridCompositeDataComponent } from "./grid-composite-data-binding/grid-composite-data.component";
import { GridConditionalCellStyleComponent } from "./grid-conditional-cell-style/grid-conditional-cell-style.component";
import { ContextmenuComponent } from "./grid-contextmenu-sample/contextmenu/contextmenu.component";
import { GridContextmenuSampleComponent } from "./grid-contextmenu-sample/grid-contextmenu-sample.component";
import { GridCustomFilteringComponent } from "./grid-custom-filtering/grid-custom-filtering.component";
import { GridCustomKBNavigationComponent } from "./grid-custom-kb-navigation/grid-custom-kb-navigation-sample.component";
import { GridCustomSummariesSelection } from "./grid-custom-summaries-selection/grid-custom-summaries-selection.component";
import { SummariesData } from "./grid-custom-summaries-selection/summaries-data/summaries-data.component";
import { GridDisplayDensitySampleComponent } from "./grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "./grid-editing-sample/grid-editing-sample.component";
import { GridExcelStyleFilteringLoadOnDemandComponent } from "./grid-excel-style-filtering-load-on-demand/grid-excel-style-filtering-load-on-demand.component";
import { ExcelStyleFilteringSample1Component } from "./grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component";
import { ExcelStyleFilteringSample2Component } from "./grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component";
import { ExcelStyleFilteringSample3Component } from "./grid-excel-style-filtering-sample-3/grid-excel-style-filtering-sample-3.component";
import { ExcelStyleFilteringStyleComponent } from "./grid-excel-style-filtering-style/grid-excel-style-filtering-style.component";
import { FilteringSampleComponent } from "./grid-filtering-sample/grid-filtering-sample.component";
import { GridFilteringStyleComponent } from "./grid-filtering-style/grid-filtering-style.component";
import { FilteringTemplateSampleComponent } from "./grid-filtering-template-sample/grid-filtering-template-sample.component";
import { GridGroupByPagingSampleComponent } from "./grid-group-by-paging-sample/grid-group-by-paging-sample.component";
import { GridGroupBySampleComponent } from "./grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupByStyling } from "./grid-groupby-styling/grid-groupby-styling.component";
import { GridGroupBySummarySampleComponent } from "./grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridGroupBySummaryStylingSampleComponent } from "./grid-groupby-summary-styling-sample/grid-groupby-summary-styling-sample.component";
import { GridMovingSampleComponent } from "./grid-moving-sample/grid-moving-sample.component";
import { GridMovingStyledSampleComponent } from "./grid-moving-styled-sample/grid-moving-styled-sample.component";
import { GridMultiCellSelectionStyleComponent } from "./grid-multi-cell-selection-style/grid-multi-cell-selection-style.component";
import { GridMultiCellSelectionComponent } from "./grid-multi-cell-selection/grid-multi-cell-selection.component";
import { GridMultiRowLayoutConfigurationComponent } from "./grid-multi-row-layout-configuration/grid-multi-row-layout-configuration.component";
import { GridMultiRowLayoutStylingComponent } from "./grid-multi-row-layout-styling/grid-multi-row-layout-styling.component";
import { GridMultiRowLayoutComponent } from "./grid-multi-row-layout/grid-multi-row-layout.component";
import { GridNestedDataBindComponent } from "./grid-nested-data-binding/grid-nested-data-bind";
import { PagingSampleComponent } from "./grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid-paste/grid-paste-sample.component";
import { PasteHandler } from "./grid-paste/paste-handler.directive";
import { RemoteFilteringSampleComponent } from "./grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "./grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "./grid-resizing-sample/grid-resizing-sample.component";
import { GridDragBaseSampleComponent } from "./grid-row-drag-base/grid-row-drag-base.component";
import { GridDragToGridSampleComponent } from "./grid-row-drag-to-grid/grid-row-drag-to-grid.component";
import { GridDragSampleComponent } from "./grid-row-drag/grid-row-drag.component";
import { PlanetComponent } from "./grid-row-drag/planet/planet.component";
import { GridRowEditSampleComponent } from "./grid-row-editing-sample/grid-row-editing-sample.component";
import { GridRowEditStyleComponent } from "./grid-row-editing-style/grid-row-editing-style.component";
import { GridRowReorderComponent } from "./grid-row-reorder-sample/grid-row-reorder";
import { FinancialSampleComponent } from "./grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid-sample-pinning/grid-pinning.component";
import { PinningToolbarSampleComponent } from "./grid-sample-pinning/grid-toolbar-pinning.component";
import { GridSelectionSampleComponent } from "./grid-sample-selection/grid-selection.component";
import { AboutComponent } from "./grid-save-state/about.component";
import { GridSaveStateComponent } from "./grid-save-state/grid-state.component";
import { IgxGridStateDirective } from "./grid-save-state/state.directive";
import { GridSearchSampleComponent } from "./grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "./grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "./grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "./grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridToolbarStyleComponent } from "./grid-toolbar-style/grid-toolbar-style.component";
import { GridsRoutingModule } from "./grids-routing.module";
import { GridMultiColumnHeaderTemplateComponent } from "./multi-column-header-template/multi-column-header-template";
import { GridMultiColumnHeadersComponent } from "./multi-column-headers/multi-column-headers";
import { DataService } from "./services/data.service";

import { CustomGridPagingStyleSample } from "./custom-grid-paging-style/custom-grid-paging-style.component";
import { GridCellSelectionComponent } from "./grid-cellSelection-sample/grid-cellSelection.component";
import { GridEditingEventsComponent } from "./grid-editing-events/grid-editing-events.component";
import { GridEditingStyleSample } from "./grid-editing-style-sample/grid-editing-style-sample.component";
import { GridMRLCustomNavigationComponent } from "./grid-mrl-custom-navigation/grid-mrl-custom-navigation.component";
import { GridPagerSampleComponent } from "./grid-pager-sample/grid-pager-sample.component";
import { GridResizeLineStylingSampleComponent } from "./grid-resize-line-styling-sample/grid-resize-line-styling-sample";
import { PinningStylingComponent } from "./grid-sample-pinning-styling/grid-pinning-styling.component";
import { SortingStylingComponent } from "./grid-sorting-styling/grid-sorting-styling.component";
import { GridMultiColumnHeadersStylingComponent } from "./multi-column-headers-styling/multi-column-headers-styling.component";
// tslint:enable:max-line-length

@NgModule({
    declarations: [
        SummariesData,
        GridWithTransactionsComponent,
        GridBatchEditingSampleComponent,
        GridColumnHidingSampleComponent,
        GridColumnHidingToolbarSampleComponent,
        GridConditionalCellStyleComponent,
        GridCustomFilteringComponent,
        GridDisplayDensitySampleComponent,
        GridEditingSampleComponent,
        ExcelStyleFilteringSample1Component,
        ExcelStyleFilteringSample2Component,
        ExcelStyleFilteringSample3Component,
        ExcelStyleFilteringStyleComponent,
        FilteringSampleComponent,
        FilteringTemplateSampleComponent,
        GridGroupBySampleComponent,
        GridGroupBySummarySampleComponent,
        GridGroupBySummaryStylingSampleComponent,
        GridMovingSampleComponent,
        GridMovingStyledSampleComponent,
        PagingSampleComponent,
        GridPasteSampleComponent,
        RemoteFilteringSampleComponent,
        RemotePagingGridSample,
        ResizingSampleComponent,
        GridResizeLineStylingSampleComponent,
        GridRowEditSampleComponent,
        GridRowEditStyleComponent,
        GridEditingStyleSample,
        GridEditingEventsComponent,
        FinancialSampleComponent,
        GridSample3Component,
        GridRemoteVirtualizationSampleComponent,
        PinningSampleComponent,
        PinningToolbarSampleComponent,
        GridSelectionSampleComponent,
        GridSearchSampleComponent,
        SortingSampleComponent,
        SortingStylingComponent,
        GridToolbarSample1Component,
        GridToolbarSample2Component,
        GridToolbarSample3Component,
        GridToolbarSample4Component,
        GridMultiColumnHeadersComponent,
        GridMultiColumnHeadersStylingComponent,
        GridComponent,
        PasteHandler,
        GridCustomKBNavigationComponent,
        GridSaveStateComponent,
        AboutComponent,
        IgxGridStateDirective,
        GridMultiCellSelectionComponent,
        GridMultiCellSelectionStyleComponent,
        GridNestedDataBindComponent,
        GridCompositeDataComponent,
        GridMultiRowLayoutComponent,
        GridMultiRowLayoutConfigurationComponent,
        GridDragSampleComponent,
        PlanetComponent,
        GridDragBaseSampleComponent,
        GridDragToGridSampleComponent,
        GridContextmenuSampleComponent,
        GridMRLCustomNavigationComponent,
        ContextmenuComponent,
        CustomGridPagingStyleSample,
        GridRowReorderComponent,
        GridColumnHidingToolbarStyleComponent,
        GridMultiColumnHeaderTemplateComponent,
        GridClipboardSampleComponent,
        GridToolbarStyleComponent,
        GridGroupByPagingSampleComponent,
        GridPagerSampleComponent,
        GridFilteringStyleComponent,
        GridExcelStyleFilteringLoadOnDemandComponent,
        GridCustomSummariesSelection,
        GridMultiRowLayoutStylingComponent,
        PinningStylingComponent,
        GridGroupByStyling,
        GridCellSelectionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        GridsRoutingModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxBannerModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxColumnHidingModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxFocusModule,
        IgxGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule,
        IgxTooltipModule,
        IgxExpansionPanelModule,
        IgxSelectModule,
        IgxSnackbarModule
    ],
    providers: [
        DataService,
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class GridsModule { }
