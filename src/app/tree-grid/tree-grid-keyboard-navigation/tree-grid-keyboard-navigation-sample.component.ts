import { Component, OnInit, ViewChild } from "@angular/core";
import { IGridKeydownEventArgs, IgxGridCellComponent, IgxTreeGridComponent } from "igniteui-angular";
import { EMPLOYEE_DATA } from "../tree-grid-childdatakey-sample/data";

@Component({
    selector: "tree-grid-keyboard-navigation-sample",
    styleUrls: ["./tree-grid-keyboard-navigation-sample.component.scss"],
    templateUrl: "./tree-grid-keyboard-navigation-sample.component.html"
})
export class TreeGridKBNavigationComponent implements OnInit {
    public localData: any[];
    @ViewChild("grid1", { read: IgxTreeGridComponent, static: true })
    public grid1: IgxTreeGridComponent;

    constructor() { }

    public ngOnInit() {
        this.localData = EMPLOYEE_DATA;
    }

    public customKeydown(args: IGridKeydownEventArgs) {
        const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === "dataCell" && target.inEditMode && evt.key.toLowerCase() === "tab") {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === "number" && target.editValue < 18) {
                alert("The value should be bigger than 18");
                return;
            }
            const cell = evt.shiftKey ?
                this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
                this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

            this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.nativeElement.focus(); });
        } else if (type === "dataCell" && evt.key.toLowerCase() === "enter") {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            this.grid1.selectRange(null);
            this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
                (obj) => { obj.target.nativeElement.focus(); });
        }
    }
}
