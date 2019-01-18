import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const dataDisplayBaseRoutes: Routes = [
    {
        data: { displayName: "Badge for List", parentName: "Badge" },
        path: "badge-sample-1"
    },
    {
        data: { displayName: "Badge for List with Avatars", parentName: "Badge" },
        path: "badge-sample-2"
    },
    {
        data: { displayName: "Badge for List Items", parentName: "Badge" },
        path: "badge-sample-3"
    },
    {
        data: { displayName: "Chip Overview", parentName: "Chip" },
        path: "chip-sample"
    },
    {
        data: { displayName: "Circular Progressbar Sample", parentName: "Circular Progressbar" },
        path: "circular-progressbar"
    },
    {
        data: { displayName: "Simple Icons", parentName: "Icon" },
        path: "icon-sample-1"
    },
    {
        path: "icon-sample2"
    },
    {
        data: { displayName: "SVG Icons", parentName: "Icon" },
        path: "svg-icon-sample"
    },
    {
        data: { displayName: "List with igxFor directive", parentName: "For" },
        path: "igx-for-sample-1"
    },
    {
        data: { displayName: "Simple Linear Progressbar", parentName: "Linear Progressbar" },
        path: "linear-progressbar"
    },
    {
        data: { displayName: "Linear Progressbar Types", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-1"
    },
    {
        data: { displayName: "Linear Progressbar Styling", parentName: "Linear Progressbar" },
        path: "linear-progressbar-sample-2"
    },
    {
        data: { displayName: "Mask Overview", parentName: "Mask" },
        path: "mask-sample-1"
    },
    {
        data: { displayName: "Mask on Input", parentName: "Mask" },
        path: "mask-sample-2"
    },
    {
        data: { displayName: "Mask binding to Formatted/Raw Value", parentName: "Mask" },
        path: "mask-sample-3"
    },
    {
        data: { displayName: "Additional custom formatting", parentName: "Mask" },
        path: "mask-sample-4"
    },
    {
        data: { displayName: "Placeholder", parentName: "Mask" },
        path: "mask-sample-5"
    },
    {
        data: { displayName: "Search within a single container", parentName: "Text Highlight" },
        path: "text-highlight-1"
    },
    {
        data: { displayName: "Search within multiple containers", parentName: "Text Highlight" },
        path: "text-highlight-2"
    }
];

const routeMap: Map<string, Route> = createRouteMap(dataDisplayBaseRoutes);
export function dataDisplayRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
