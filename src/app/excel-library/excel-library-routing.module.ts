import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { excelLibraryRoutesGenerator } from "./excel-routes";
import { ExcelLibraryOperationsOnWorkbooksComponent } from "./operations-on/workbooks.component";
import { ExcelLibraryOperationsOnWorksheetsComponent } from "./operations-on/worksheets.component";
import { ExcelLibraryWorkingWithCellsComponent } from "./working-with/cells.component";
import { ExcelLibraryWorkingWithChartsComponent } from "./working-with/charts.component";
import { ExcelLibraryWorkingWithGridsComponent } from "./working-with/grids.component";
import { ExcelLibraryWorkingWithObjectsComponent } from "./working-with/objects.component";
import { ExcelLibraryWorkingWithSparklinesComponent } from "./working-with/sparklines.component";
import { ExcelLibraryWorkingWithTablesComponent } from "./working-with/tables.component";

export const excelLibraryRoutes: Routes = [
    excelLibraryRoutesGenerator("operations-on-workbooks", ExcelLibraryOperationsOnWorkbooksComponent),
    excelLibraryRoutesGenerator("operations-on-worksheets", ExcelLibraryOperationsOnWorksheetsComponent),
    excelLibraryRoutesGenerator("working-with-cells", ExcelLibraryWorkingWithCellsComponent),
    excelLibraryRoutesGenerator("working-with-charts", ExcelLibraryWorkingWithChartsComponent),
    excelLibraryRoutesGenerator("working-with-grids", ExcelLibraryWorkingWithGridsComponent),
    excelLibraryRoutesGenerator("working-with-objects", ExcelLibraryWorkingWithObjectsComponent),
    excelLibraryRoutesGenerator("working-with-sparklines", ExcelLibraryWorkingWithSparklinesComponent),
    excelLibraryRoutesGenerator("excel-library-working-with-tables", ExcelLibraryWorkingWithTablesComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(excelLibraryRoutes)
    ]
})
export class ExcelLibraryRoutingModule { }
