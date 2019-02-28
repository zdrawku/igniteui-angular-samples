/* tslint:disable:max-line-length */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule,
    IgxColumnHidingModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule,
    IgxExcelExporterService, IgxFocusModule, IgxGridModule, IgxHierarchicalGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
    IgxRadioModule, IgxRippleModule, IgxSliderModule, IgxSwitchModule, IgxToastModule, IgxToggleModule } from "igniteui-angular";
import { HGridBatchEditingSampleComponent } from "./hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component";
import { HierarchicalGridWithTransactionsComponent } from "./hierarchical-grid-batch-editing/hierarchical-grid-transactions.component";
import { HGridCostumHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component";
import { HGridColumnHidingSampleComponent } from "./hierarchical-grid-column-hiding/hierarchical-grid-hiding.component";
import { HGridColumnMovingSampleComponent } from "./hierarchical-grid-column-moving/hierarchical-grid-moving.component";
import { HGridPinningSampleComponent } from "./hierarchical-grid-column-pinning/hierarchical-grid-pinning.component";
import { HGridColumnResizingSampleComponent } from "./hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import { HGridDisplayDensitySampleComponent } from "./hierarchical-grid-display-density/hierarchical-grid-density.component";
import { HGridEditingSampleComponent } from "./hierarchical-grid-editing/hierarchical-grid-editing.component";
import { HGridCustomFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component";
import { HGridFilteringSampleComponent } from "./hierarchical-grid-filtering/hierarchical-grid-filtering.component";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid-lod/hierarchical-grid-lod.component";
import { HGridMultiHeadersSampleComponent } from "./hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component";
import { HGridPagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-paging.component";
import { HGridRemotePagingSampleComponent } from "./hierarchical-grid-paging/hierarchical-grid-remote-paging.component";
import { HierarchicalGridRoutingModule } from "./hierarchical-grid-routing.module";
import { HGridRowEditingSampleComponent } from "./hierarchical-grid-row-editing/hierarchical-grid-row-editing.component";
import { HGridSelectionSampleComponent } from "./hierarchical-grid-selection/hierarchical-grid-selection.component";
import { HGridContextmenuComponent } from "./hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component";
import { HGridSortingSampleComponent } from "./hierarchical-grid-sorting/hierarchical-grid-sorting.component";
import { HGridSummarySampleComponent } from "./hierarchical-grid-summary/hierarchical-grid-summary.component";
import { HGridToolbarCustomSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component";
import { HGridToolbarOptionsSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component";
import { HGridToolbarTitleSampleComponent } from "./hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component";
/* tslint:enable:max-line-length */

@NgModule({
    declarations: [
        HGridFilteringSampleComponent,
        HGridCustomFilteringSampleComponent,
        HGridSortingSampleComponent,
        HGridContextmenuComponent,
        HGridSelectionSampleComponent,
        HGridSummarySampleComponent,
        HGridPagingSampleComponent,
        HGridRemotePagingSampleComponent,
        HGridPinningSampleComponent,
        HGridColumnResizingSampleComponent,
        HGridColumnHidingSampleComponent,
        HGridCostumHidingSampleComponent,
        HGridDisplayDensitySampleComponent,
        HGridColumnMovingSampleComponent,
        HGridMultiHeadersSampleComponent,
        HGridToolbarTitleSampleComponent,
        HGridToolbarOptionsSampleComponent,
        HGridToolbarCustomSampleComponent,
        HGridRowEditingSampleComponent,
        HGridEditingSampleComponent,
        HGridBatchEditingSampleComponent,
        HierarchicalGridWithTransactionsComponent,
        HierarchicalGridLoDSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HierarchicalGridRoutingModule,
        IgxAvatarModule,
        IgxBadgeModule,
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
        IgxHierarchicalGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class HierarchicalGridModule {}