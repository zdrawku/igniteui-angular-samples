import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "./data";

enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "add"
}

@Component({
    selector: "grid-row-drag-to-grid-sample",
    styleUrls: ["./grid-row-drag-to-grid.component.scss"],
    templateUrl: "grid-row-drag-to-grid.component.html"
})

export class GridDragToGridSampleComponent {
    public data1: any[];
    public data2: any[];
    @ViewChild("grid1", { read: IgxGridComponent }) public grid1: IgxGridComponent;
    @ViewChild("grid2", { read: IgxGridComponent }) public grid2: IgxGridComponent;

    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public onDropAllowed(args) {
        args.cancel = true;
        this.grid2.addRow(args.dragData.rowData);
        this.grid1.deleteRow(args.dragData.rowID);
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            ghost.querySelector("igx-icon").innerHTML = icon;
        }
    }
}
