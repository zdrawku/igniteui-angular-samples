import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const excelLibraryBaseRoutes: Routes = [
    {
        data: { displayName: "Workbooks Operations", parentName: "Excel Library" },
        path: "operations-on-workbooks"
    },
    {
        data: { displayName: "Worksheets Operations", parentName: "Excel Library" },
        path: "operations-on-worksheets"
    },
    {
        data: { displayName: "Working With Cells", parentName: "Excel Library" },
        path: "working-with-cells"
    },
    {
        data: { displayName: "Working With Charts", parentName: "Excel Library" },
        path: "working-with-charts"
    },
    {
        data: { displayName: "Working With Grids", parentName: "Excel Library" },
        path: "working-with-grids"
    },
    {
        data: { displayName: "Working With Objects", parentName: "Excel Library" },
        path: "working-with-objects"
    },
    {
        data: { displayName: "Working With Sparklines", parentName: "Excel Library" },
        path: "working-with-sparklines"
    },
    {
        data: { displayName: "Working With Tables", parentName: "Excel Library" },
        path: "excel-library-working-with-tables"
    }
];

const routeMap: Map<string, Route> = createRouteMap(excelLibraryBaseRoutes);
export function excelLibraryRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
