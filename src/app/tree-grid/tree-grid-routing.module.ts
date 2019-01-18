import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import { TreeGridFinJSComponent } from "./tree-grid-finjs/tree-grid-finjs-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { treeGridRoutesGenerator } from "./tree-grid-routes";
import { TreeGridRowEditSampleComponent } from "./tree-grid-row-edit/tree-grid-row-editing-sample.component";

export const treeGridRoutes: Routes = [
    treeGridRoutesGenerator("treegrid-childdatakey", TreeGridChilddatakeySampleComponent),
    treeGridRoutesGenerator("treegrid-primaryforeignkey", TreeGridPrimaryforeignkeySampleComponent),
    treeGridRoutesGenerator("treegrid-row-edit", TreeGridRowEditSampleComponent),
    treeGridRoutesGenerator("treegrid-finjs-sample", TreeGridFinJSComponent),
    treeGridRoutesGenerator("treegrid-batchediting", TreeGridBatchEditingSampleComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(treeGridRoutes)
    ]
})
export class TreeGridRoutingModule { }
