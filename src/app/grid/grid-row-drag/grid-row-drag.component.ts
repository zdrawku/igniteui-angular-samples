import { Component, ViewChildren } from "@angular/core";
import { IGridDataBindable, IgxGridBaseComponent, IgxRowComponent } from "igniteui-angular";
import { moonData, planetData } from "./data";
import { PlanetComponent as PlanetComponent } from "./planet/planet.component";

enum HoverClassList {
    ALLOW = "allow-drop",
    DENY = "deny-drop"
}

@Component({
    selector: "grid-row-drag-sample",
    styleUrls: ["./grid-row-drag.component.scss"],
    templateUrl: "grid-row-drag.component.html"
})

export class GridDragSampleComponent {
    public moonData: any[];
    public planetData: any[];
    @ViewChildren(PlanetComponent) public planets: PlanetComponent[];

    constructor() {
        this.moonData = moonData;
        this.planetData = planetData;
    }

    public onRowDragStart(args) {
        if (args.dragData.isSelected) {
            args.cancel = true;
        }
    }

    public onEnter(args, planet: PlanetComponent) {
        args.drag.dragGhost.classList.add(
            this.isDropAllowed(args.dragData.rowData.name, planet.name) ? HoverClassList.ALLOW : HoverClassList.DENY);
    }

    public onLeave(args) {
        const dragGhost: HTMLElement =  args.drag.dragGhost;

        if (dragGhost) {
            dragGhost.classList.remove(HoverClassList.ALLOW);
            dragGhost.classList.remove(HoverClassList.DENY);
        }
    }

    public onDrop(args, planet: PlanetComponent) {
        args.cancel = true;

        const row: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable> = args.dragData;
        if (this.isDropAllowed(row.rowData.name, planet.name)) {
            row.rowData.planet = planet.name;
            row.grid.selectRows([row.rowID]);

            planet.moonsCount++;
        }
    }

    private isDropAllowed(dragMoonName: string, dropPlanetName: string): boolean {
        return this.planetData.filter((p) => p.name === dropPlanetName)[0].moons.includes(dragMoonName);
    }
}