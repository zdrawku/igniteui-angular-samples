import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const menusBaseRoutes: Routes = [
    {
        path: "navigation-drawer"
    },
    {
        path: "navigation-drawer-simple"
    },
    {
        path: "navigation-drawer-pin"
    },
    {
        path: "navigation-drawer-mini"
    },
    {
        data: { displayName: "Navbar Overview", parentName: "Navbar" },
        path: "navbar"
    },
    {
        data: { displayName: "Navbar Action Button Icon", parentName: "Navbar" },
        path: "navbar-sample-1"
    },
    {
        data: { displayName: "Navbar Custom Action Icon", parentName: "Navbar" },
        path: "navbar-sample-2"
    }
];

const routeMap: Map<string, Route> = createRouteMap(menusBaseRoutes);
export function menusRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
