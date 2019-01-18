import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const themingBaseRoutes: Routes = [
    {
        data: { displayName: "Style components with custom themes", parentName: "Themes" },
        path: "theme-chooser"
    },
    {
        data: { displayName: "Default theme sample", parentName: "Themes" },
        path: "default-theme-sample"
    },
    {
        data: { displayName: "Dark theme sample", parentName: "Themes" },
        path: "dark-theme-sample"
    },
    {
        data: { displayName: "Shadows sample", parentName: "Shadows" },
        path: "shadows-sample"
    },
    {
        data: { displayName: "Shadows sample 2", parentName: "Shadows" },
        path: "shadows-sample-2"
    },
    {
        data: { displayName: "Display density sample", parentName: "Themes" },
        path: "density"
    }
];

const routeMap: Map<string, Route> = createRouteMap(themingBaseRoutes);
export function themingRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
