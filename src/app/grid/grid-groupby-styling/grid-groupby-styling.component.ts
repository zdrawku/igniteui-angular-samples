import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    DefaultSortingStrategy,
    IgxGridComponent,
    ISortingExpression,
    SortingDirection
} from "igniteui-angular";
import { LOCAL_DATA } from "../../data/grid-groupby-summary-data";

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: "app-grid-groupby-sample",
    styleUrls: ["./grid-groupby-styling.component.scss"],
    templateUrl: "./grid-groupby-styling.component.html"
})
export class GridGroupByStyling {
    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];

    constructor() {
        this.data = LOCAL_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: "ShipCountry", ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() },
            { dir: SortingDirection.Asc, fieldName: "ShipCity", ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}