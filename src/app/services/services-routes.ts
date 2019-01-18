import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const servicesBaseRoutes: Routes = [
    {
        data: { displayName: "CSV Export Raw Data", parentName: "CSV Export" },
        path: "export-csv"
    },
    {
        data: { displayName: "CSV Export Grid", parentName: "CSV Export" },
        path: "export-csv-sample-1"
    },
    {
        data: { displayName: "Excel Export Raw Data", parentName: "Excel Export" },
        path: "export-excel"
    },
    {
        data: { displayName: "Excel Export Grid", parentName: "Excel Export" },
        path: "export-excel-sample-1"
    },
    {
        data: { displayName: "Localize one component", parentName: "Localization" },
        path: "localization-sample-1"
    },
    {
        data: { displayName: "Localize All", parentName: "Localization" },
        path: "localization-sample-2"
    },
    {
        data: { displayName: "Localize partially", parentName: "Localization" },
        path: "localization-sample-3"
    }
];

const routeMap: Map<string, Route> = createRouteMap(servicesBaseRoutes);
export function servicesRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
