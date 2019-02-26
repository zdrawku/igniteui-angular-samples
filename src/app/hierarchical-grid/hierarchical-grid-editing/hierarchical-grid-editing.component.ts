import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDialogComponent, IgxHierarchicalGridComponent, IgxSummaryResult, IgxNumberSummaryOperand } from "igniteui-angular";
import { SINGERS } from "./data";
import { Singer } from "./singer";

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
      super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: "min",
            label: "Min",
            summaryResult: IgxNumberSummaryOperand.min(data)
        },
        {
            key: "max",
            label: "Max",
            summaryResult: IgxNumberSummaryOperand.max(data)
        },
        {
          key: "avg",
          label: "Avg",
          summaryResult: IgxNumberSummaryOperand.average(data)
        });
        return result;
    }
  }
@Component({
    selector: "hierarchical-grid-editing",
    styleUrls: ["./hierarchical-grid-editing.component.scss"],
    templateUrl: "hierarchical-grid-editing.component.html"
})

export class HGridEditingSampleComponent implements OnInit {
    public localdata;
    public singer;
    public mySummary = MySummary;

    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild("dialogAdd", { read: IgxDialogComponent })
    private dialog: IgxDialogComponent;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.singer = new Singer();
    }

    public addRow() {
        this.hierarchicalGrid.addRow(this.singer);
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.singer = new Singer();
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
     }

}
