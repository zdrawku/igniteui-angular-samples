
import { Component, ViewChild } from "@angular/core";
import { IgxSelectComponent, IgxSelectItemComponent } from "igniteui-angular";

@Component({
    selector: "select-sample-2",
    styleUrls: ["select-sample-2.component.scss"],
    templateUrl: "select-sample-2.component.html"
})
export class SelectSample2Component {
    @ViewChild(IgxSelectComponent, { static: true })
    public select: IgxSelectComponent;

    public greengrocery: Array<{
        label: string,
        items: Array<{ type: string, origin: string }>
    }> = [
            {
                label: "Fruits",
                items:
                    [
                        { type: "Apple", origin: "local" },
                        { type: "Orange", origin: "import" },
                        { type: "Banana", origin: "import"}
                    ]
            },
            {
                label: "Vegetables",
                items:
                    [
                        { type: "Cucumber", origin: "local" },
                        { type: "Potato", origin: "import" },
                        { type: "Pepper", origin: "local" }
                    ]
            }
        ];
}
