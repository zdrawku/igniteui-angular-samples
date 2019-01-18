import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const listsBaseRoutes: Routes = [
    {
        path: "combo"
    },
    {
        data: { displayName: "Combos Features", parentName: "Combo" },
        path: "combo-features"
    },
    {
        data: { displayName: "Remote Combo", parentName: "Combo" },
        path: "combo-remote"
    },
    {
        data: { displayName: "Templating Combo", parentName: "Combo" },
        path: "combo-template"
    },
    {
        data: { displayName: "Cascading Combos", parentName: "Combo" },
        path: "cascading-combos"
    },
    {
        data: { displayName: "List Overview", parentName: "List" },
        path: "list"
    },
    {
        path: "list-sample-1"
    },
    {
        data: { displayName: "List Item Header", parentName: "List" },
        path: "list-sample-2"
    },
    {
        data: { displayName: "List Item Template", parentName: "List" },
        path: "list-sample-3"
    },
    {
        data: { displayName: "List Search", parentName: "List" },
        path: "list-sample-4"
    },
    {
        data: { displayName: "Empty List Template", parentName: "List" },
        path: "list-sample-5"
    },
    {
        data: { displayName: "List Loading", parentName: "List" },
        path: "list-sample-6"
    },
    {
        data: { displayName: "List Item Panning", parentName: "List" },
        path: "list-sample-7"
    },
    {
        data: { displayName: "Chat Component", parentName: "List" },
        path: "list-chat-sample"
    }
];

const routeMap: Map<string, Route> = createRouteMap(listsBaseRoutes);
export function listsRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
