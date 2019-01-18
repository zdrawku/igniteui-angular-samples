import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { gridCRMRoutesGenerator } from "./grid-crm-routes";
import { GridCRMComponent } from "./grid-crm/grid-crm.component";

export const gridcrmRoutes: Routes = [
    gridCRMRoutesGenerator("grid-crm", GridCRMComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gridcrmRoutes)
    ]
})
export class GridCRMRoutingModule { }
