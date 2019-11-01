import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
    selector: "app-grid-conditional-cell-style-2",
    styleUrls: ["./grid-conditional-cell-style-2.component.scss"],
    templateUrl: "./grid-conditional-cell-style-2.component.html"
})
export class GridConditionalCellStyle2Component implements OnInit {
    public data: any[];
    public columns: any[];
    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public oddColStyles = {
        background: "linear-gradient(to right, #b993d6, #8ca6db)",
        color: "white",
        // "color": (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "red" : "green",
        animation: "0.75s popin"
    };

    public evenColStyles = {
        background: "linear-gradient(to right, #8ca6db, #b993d6)",
        color: "white",
        // "color": (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "red" : "green",
        animation: "0.75s popin"
    };

    public ngOnInit() {
        this.data = athletesData;
        this.columns = [
            { field: "Id" },
            { field: "Position" },
            { field: "Name" },
            { field: "AthleteNumber" },
            { field: "CountryName" }
        ];

        this.applyCSS();
    }
    public applyCSS() {
        this.columns.forEach((column, index) => {
            column.cellStyles = (index % 2 === 0 ? this.oddColStyles : this.evenColStyles);
        });
    }

    public updateCSS(css: string) {
        this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
        this.evenColStyles = {...this.oddColStyles, ...JSON.parse(css)};
        this.applyCSS();
    }
}
