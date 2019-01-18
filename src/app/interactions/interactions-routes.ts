import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const interactionsBaseRoutes: Routes = [
    {
        data: { displayName: "Various Dialogs", parentName: "Dialog" },
        path: "dialog"
    },
    {
        data: { displayName: "Completed Action Dialog", parentName: "Dialog" },
        path: "dialog-sample-1"
    },
    {
        data: { displayName: "Confirmation Dialog", parentName: "Dialog" },
        path: "dialog-sample-2"
    },
    {
        data: { displayName: "Sign-in form Dialog", parentName: "Dialog" },
        path: "dialog-sample-3"
    },
    {
        data: { displayName: "Slider Lower and Upper range values", parentName: "Slider" },
        path: "slider-sample-1"
    },
    {
        data: { displayName: "Continuous Slider", parentName: "Slider" },
        path: "slider-sample-2"
    },
    {
        data: { displayName: "Discrete Slider", parentName: "Slider" },
        path: "slider-sample-3"
    },
    {
        data: { displayName: "Range Slider", parentName: "Slider" },
        path: "slider-sample-4"
    },
    {
        data: { displayName: "Slider Lower and Upper bounds", parentName: "Slider" },
        path: "slider-sample-5"
    },
    {
        data: { displayName: "Ripple Overview", parentName: "Ripple" },
        path: "ripple-sample-1"
    },
    {
        data: { displayName: "Ripple Target", parentName: "Ripple" },
        path: "ripple-sample-2"
    },
    {
        data: { displayName: "Ripple Centered Effect", parentName: "Ripple" },
        path: "ripple-sample-3"
    },
    {
        data: { displayName: "Ripple Duration", parentName: "Ripple" },
        path: "ripple-sample-4"
    },
    {
        data: { displayName: "Ripple Effect", parentName: "Ripple" },
        path: "ripple-sample-5"
    },
    {
        data: { displayName: "Ripple Color", parentName: "Ripple" },
        path: "ripple-sample-6"
    },
    {
        data: { displayName: "Toggle Overview", parentName: "Toggle" },
        path: "toggle"
    },
    {
        data: { displayName: "Toggle Content", parentName: "Toggle" },
        path: "toggle-sample-1"
    },
    {
        data: { displayName: "Automatic Toggle Actions", parentName: "Toggle" },
        path: "toggle-sample-2"
    },
    {
        data: { displayName: "Toggle Service Provider", parentName: "Toggle" },
        path: "toggle-sample-3"
    },
    {
        data: { displayName: "Simple Tooltip", parentName: "Tooltip" },
        path: "tooltip-simple"
    },
    {
        data: { displayName: "Rich Tooltip", parentName: "Tooltip" },
        path: "tooltip-rich"
    },
    {
        data: { displayName: "Overlay Main Sample 1", parentName: "Overlay" },
        path: "overlay-sample-main-1"
    },
    {
        data: { displayName: "Overlay Main Sample 2", parentName: "Overlay" },
        path: "overlay-sample-main-2"
    },
    {
        data: { displayName: "Overlay Main Sample 3", parentName: "Overlay" },
        path: "overlay-sample-main-3"
    },
    {
        data: { displayName: "Overlay Position Sample 1", parentName: "Overlay" },
        path: "overlay-position-sample-1"
    },
    {
        data: { displayName: "Overlay Position Sample 2", parentName: "Overlay" },
        path: "overlay-position-sample-2"
    },
    {
        data: { displayName: "Overlay Scroll Sample 1", parentName: "Overlay" },
        path: "overlay-scroll-sample-1"
    },
    {
        data: { displayName: "Overlay Scroll Sample 2", parentName: "Overlay" },
        path: "overlay-scroll-sample-2"
    },
    {
        data: { displayName: "Drag and drop sample", parentName: "Drag and Drop" },
        path: "drag-drop-sample"
    }
];

const routeMap: Map<string, Route> = createRouteMap(interactionsBaseRoutes);
export function interactionsRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
