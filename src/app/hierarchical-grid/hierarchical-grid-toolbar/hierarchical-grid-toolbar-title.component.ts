import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-toolbar-title",
    styleUrls: ["./hierarchical-grid-toolbar-title.component.scss"],
    templateUrl: "hierarchical-grid-toolbar-title.component.html"
})

export class HGridToolbarTitleSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

}