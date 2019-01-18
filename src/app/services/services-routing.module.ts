// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CsvExportSample1Component } from "./export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { CsvExportComponent } from "./export-csv/csv-export.component";
import { ExcelExportSample1Component } from "./export-excel/excel-export-sample-1/excel-export-sample-1.component";
import { ExcelExportComponent } from "./export-excel/excel-export.component";
import { LocalizationSample1Component } from "./localization-samples/localization-sample-1/localization-sample-1.component";
import { LocalizationSample2Component } from "./localization-samples/localization-sample-2/localization-sample-2.component";
import { LocalizationSample3Component } from "./localization-samples/localization-sample-3/localization-sample-3.component";
import { servicesRoutesGenerator } from "./services-routes";
// tslint:enable:max-line-length

export const servicesRoutes: Routes = [
    servicesRoutesGenerator("export-csv", CsvExportComponent),
    servicesRoutesGenerator("export-csv-sample-1", CsvExportSample1Component),
    servicesRoutesGenerator("export-excel", ExcelExportComponent),
    servicesRoutesGenerator("export-excel-sample-1", ExcelExportSample1Component),
    servicesRoutesGenerator("localization-sample-1", LocalizationSample1Component),
    servicesRoutesGenerator("localization-sample-2", LocalizationSample2Component),
    servicesRoutesGenerator("localization-sample-3", LocalizationSample3Component)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(servicesRoutes)
    ]
})
export class ServicesRoutingModule { }
