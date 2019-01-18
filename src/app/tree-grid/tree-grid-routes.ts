import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const treeGridBaseRoutes: Routes = [
    {
        data: { displayName: "TreeGrid ChildDataKey", parentName: "TreeGrid" },
        path: "treegrid-childdatakey"
    },
    {
        data: { displayName: "TreeGrid Primary/Foreign key", parentName: "TreeGrid" },
        path: "treegrid-primaryforeignkey"
    },
    {
        data: { displayName: "TreeGrid Row Editing", parentName: "TreeGrid" },
        path: "treegrid-row-edit"
    },
    {
        data: { displayName: "TreeGrid Finance demo sample", parentName: "TreeGrid" },
        path: "treegrid-finjs-sample"
    },
    {
        data: { displayName: "TreeGrid Batch Editing", parentName: "TreeGrid" },
        path: "treegrid-batchediting"
    }
];

const routeMap: Map<string, Route> = createRouteMap(treeGridBaseRoutes);
export function treeGridRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
