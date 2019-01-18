import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const gridCRMBaseRoutes: Routes = [
    {
        data: { displayName: "Grid CRM", parentName: "Grid" },
        path: "grid-crm"
    }
];

const routeMap: Map<string, Route> = createRouteMap(gridCRMBaseRoutes);
export function gridCRMRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
