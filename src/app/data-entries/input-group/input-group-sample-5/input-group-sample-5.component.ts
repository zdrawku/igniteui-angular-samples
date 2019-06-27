import { Component, ViewChild } from "@angular/core";

@Component({
    selector: "app-input-group-sample-5",
    styleUrls: ["./input-group-sample-5.component.scss"],
    templateUrl: "./input-group-sample-5.component.html"
})
export class InputGroupSample5Component {
    @ViewChild("input1", { static: true }) public searchInput;

    public clearSearchInput() {
        this.searchInput.value = "";
    }
}
