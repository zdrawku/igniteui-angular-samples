import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const notificationsBaseRoutes: Routes = [
    {
        data: { displayName: "Basic Banner", parentName: "Banner" },
        path: "banner-sample-1"
    },
    {
        data: { displayName: "Custom Actions Banner", parentName: "Banner" },
        path: "banner-sample-2"
    },
    {
        data: { displayName: "Animations Banner", parentName: "Banner" },
        path: "banner-sample-3"
    },
    {
        data: { displayName: "Settings Banner", parentName: "Banner" },
        path: "banner-sample-4"
    },
    {
        data: { displayName: "Show Snackbar", parentName: "Snackbar" },
        path: "snackbar-sample-1"
    },
    {
        data: { displayName: "Hide/Auto Hide Snackbar", parentName: "Snackbar" },
        path: "snackbar-sample-2"
    },
    {
        data: { displayName: "Snackbar Display Time", parentName: "Snackbar" },
        path: "snackbar-sample-3"
    },
    {
        data: { displayName: "Snackbar in List", parentName: "Snackbar" },
        path: "snackbar-sample-4"
    },
    {
        data: { displayName: "Display custom content", parentName: "Snackbar" },
        path: "snackbar-sample-5"
    },
    {
        data: { displayName: "Toast Overview", parentName: "Toast" },
        path: "toast-sample-1"
    },
    {
        data: { displayName: "Show Toast", parentName: "Toast" },
        path: "toast-sample-2"
    },
    {
        data: { displayName: "Hide/Auto Hide Toast", parentName: "Toast" },
        path: "toast-sample-3"
    },
    {
        data: { displayName: "Toast Display Time", parentName: "Toast" },
        path: "toast-sample-4"
    },
    {
        data: { displayName: "Toast Positioning", parentName: "Toast" },
        path: "toast-sample-5"
    }
];

const routeMap: Map<string, Route> = createRouteMap(notificationsBaseRoutes);
export function notificationsRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
