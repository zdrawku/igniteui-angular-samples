import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const gridsBaseRoutes: Routes = [
    {
        data: { displayName: "Grid Basic Features", parentName: "Grid" },
        path: "grid"
    },
    {
        data: { displayName: "Grid Summary", parentName: "Grid" },
        path: "grid-summary"
    },
    {
        data: { displayName: "Grid GroupBy", parentName: "Grid" },
        path: "grid-groupby"
    },
    {
        data: { displayName: "Grid GroupBy Summary", parentName: "Grid" },
        path: "grid-groupby-summary"
    },
    {
        data: { displayName: "Grid Editing", parentName: "Grid" },
        path: "grid-editing"
    },
    {
        data: { displayName: "Grid Row Editing", parentName: "Grid" },
        path: "grid-row-editing"
    },
    {
        data: { displayName: "Grid Batch Editing", parentName: "Grid" },
        path: "grid-batch-editing"
    },
    {
        data: { displayName: "Grid Display Density", parentName: "Grid" },
        path: "grid-displayDensity"
    },
    {
        data: { displayName: "Grid Conditional Cell Styling", parentName: "Grid" },
        path: "grid-cell-styling"
    },
    {
        data: { displayName: "Grid Filtering", parentName: "Grid" },
        path: "grid-filtering-sample"
    },
    {
        data: { displayName: "Custom Filtering Conditions", parentName: "Grid" },
        path: "grid-filter-conditions"
    },
    {
        data: { displayName: "Grid Paging", parentName: "Grid" },
        path: "grid-paging-sample"
    },
    {
        data: { displayName: "Grid Resizing", parentName: "Grid" },
        path: "grid-resizing-sample"
    },
    {
        data: { displayName: "Grid Financial Sample", parentName: "Grid" },
        path: "grid-sample-2"
    },
    {
        data: { displayName: "Grid Pinning", parentName: "Grid" },
        path: "grid-sample-pinning"
    },
    {
        data: { displayName: "Grid Remote Virtualization", parentName: "Grid" },
        path: "grid-sample-4"
    },
    {
        data: { displayName: "Grid Remote Filtering", parentName: "Grid" },
        path: "grid-remote-filtering"
    },
    {
        data: { displayName: "Grid Selection", parentName: "Grid" },
        path: "grid-selection"
    },
    {
        data: { displayName: "Grid Search", parentName: "Grid" },
        path: "grid-search-sample"
    },
    {
        data: { displayName: "Grid Column Hiding", parentName: "Grid" },
        path: "grid-column-hiding-sample"
    },
    {
        data: { displayName: "Grid Column Hiding with Toolbar", parentName: "Grid" },
        path: "grid-column-hiding-toolbar-sample"
    },
    {
        data: { displayName: "Grid Sorting", parentName: "Grid" },
        path: "grid-sorting-sample"
    },
    {
        data: { displayName: "Grid Toolbar Title", parentName: "Grid" },
        path: "grid-toolbar-sample-1"
    },
    {
        data: { displayName: "Grid Toolbar Options", parentName: "Grid" },
        path: "grid-toolbar-sample-2"
    },
    {
        data: { displayName: "Grid Toolbar Export", parentName: "Grid" },
        path: "grid-toolbar-sample-3"
    },
    {
        data: { displayName: "Grid Toolbar Custom Content", parentName: "Grid" },
        path: "grid-toolbar-sample-4"
    },
    {
        data: { displayName: "Grid Column Moving", parentName: "Grid" },
        path: "grid-moving-sample"
    },
    {
        data: { displayName: "Grid Multi Column Headers", parentName: "Grid" },
        path: "multi-column-headers"
    },
    {
        data: { displayName: "Grid Remote Paging", parentName: "Grid" },
        path: "grid-remote-paging-sample"
    },
    {
        data: { displayName: "Grid Paste From Excel", parentName: "Grid" },
        path: "grid-paste"
    },
    {
        data: { displayName: "Grid Finance demo sample", parentName: "Grid" },
        path: "finjs-sample"
    }
];

const routeMap: Map<string, Route> = createRouteMap(gridsBaseRoutes);
export function gridRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
