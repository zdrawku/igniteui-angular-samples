// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GridBatchEditingSampleComponent } from "./grid-batch-editing/grid-batch-editing-sample.component";
import { GridComponent } from "./grid-boston-marathon/grid.component";
import { GridColumnHidingSampleComponent } from "./grid-column-hiding-sample/grid-column-hiding-sample.component";
import { GridColumnHidingToolbarSampleComponent } from "./grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridConditionalCellStyleComponent } from "./grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridCustomFilteringComponent } from "./grid-custom-filtering/grid-custom-filtering.component";
import { GridDisplayDensitySampleComponent } from "./grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "./grid-editing-sample/grid-editing-sample.component";
import { FilteringSampleComponent } from "./grid-filtering-sample/grid-filtering-sample.component";
import { FinJSDemoComponent } from "./grid-finjs-demo/grid-finjs-demo.component";
import { GridGroupBySampleComponent } from "./grid-groupby-sample/grid-groupby-sample.component";
import { GridGroupBySummarySampleComponent } from "./grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { GridMovingSampleComponent } from "./grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "./grid-paging-sample/grid-paging-sample.component";
import { GridPasteSampleComponent } from "./grid-paste/grid-paste-sample.component";
import { RemoteFilteringSampleComponent } from "./grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "./grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "./grid-resizing-sample/grid-resizing-sample.component";
import { gridRoutesGenerator } from "./grid-routes";
import { GridRowEditSampleComponent } from "./grid-row-editing-sample/grid-row-editing-sample.component";
import { FinancialSampleComponent } from "./grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "./grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "./grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "./grid-sample-selection/grid-selection.component";
import { GridSearchSampleComponent } from "./grid-search-sample/grid-search-sample.component";
import { SortingSampleComponent } from "./grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "./grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "./grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "./grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridToolbarSample4Component } from "./grid-toolbar-sample/grid-toolbar-sample-4.component";
import { GridMultiColumnHeadersComponent } from "./multi-column-headers/multi-column-headers";
// tslint:enable:max-line-length

export const gridsRoutes: Routes = [
    gridRoutesGenerator("grid", GridComponent),
    gridRoutesGenerator("grid-summary", GridSample3Component),
    gridRoutesGenerator("grid-groupby", GridGroupBySampleComponent),
    gridRoutesGenerator("grid-groupby-summary", GridGroupBySummarySampleComponent),
    gridRoutesGenerator("grid-editing", GridEditingSampleComponent),
    gridRoutesGenerator("grid-row-editing", GridRowEditSampleComponent),
    gridRoutesGenerator("grid-batch-editing", GridBatchEditingSampleComponent),
    gridRoutesGenerator("grid-displayDensity", GridDisplayDensitySampleComponent),
    gridRoutesGenerator("grid-cell-styling", GridConditionalCellStyleComponent),
    gridRoutesGenerator("grid-filtering-sample", FilteringSampleComponent),
    gridRoutesGenerator("grid-filter-conditions", GridCustomFilteringComponent),
    gridRoutesGenerator("grid-paging-sample", PagingSampleComponent),
    gridRoutesGenerator("grid-resizing-sample", ResizingSampleComponent),
    gridRoutesGenerator("grid-sample-2", FinancialSampleComponent),
    gridRoutesGenerator("grid-sample-pinning", PinningSampleComponent),
    gridRoutesGenerator("grid-sample-4", GridRemoteVirtualizationSampleComponent),
    gridRoutesGenerator("grid-remote-filtering", RemoteFilteringSampleComponent),
    gridRoutesGenerator("grid-selection", GridSelectionSampleComponent),
    gridRoutesGenerator("grid-search-sample", GridSearchSampleComponent),
    gridRoutesGenerator("grid-column-hiding-sample", GridColumnHidingSampleComponent),
    gridRoutesGenerator("grid-column-hiding-toolbar-sample", GridColumnHidingToolbarSampleComponent),
    gridRoutesGenerator("grid-sorting-sample", SortingSampleComponent),
    gridRoutesGenerator("grid-toolbar-sample-1", GridToolbarSample1Component),
    gridRoutesGenerator("grid-toolbar-sample-2", GridToolbarSample2Component),
    gridRoutesGenerator("grid-toolbar-sample-3", GridToolbarSample3Component),
    gridRoutesGenerator("grid-toolbar-sample-4", GridToolbarSample4Component),
    gridRoutesGenerator("grid-moving-sample", GridMovingSampleComponent),
    gridRoutesGenerator("multi-column-headers", GridMultiColumnHeadersComponent),
    gridRoutesGenerator("grid-remote-paging-sample", RemotePagingGridSample),
    gridRoutesGenerator("grid-paste", GridPasteSampleComponent),
    gridRoutesGenerator("finjs-sample", FinJSDemoComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridsRoutes)
    ]
})
export class GridsRoutingModule { }
