import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const layoutsBaseRoutes: Routes = [
    {
        data: { displayName: "Avatar with Initials", parentName: "Avatar" },
        path: "avatar-sample-1"
    },
    {
        data: { displayName: "Avatar with Image", parentName: "Avatar" },
        path: "avatar-sample-2"
    },
    {
        data: { displayName: "Multiple avatars", parentName: "Avatar" },
        path: "avatar-sample-3"
    },
    {
        data: { displayName: "Card Overview", parentName: "Card" },
        path: "card"
    },
    {
        data: { displayName: "Carousel items with text", parentName: "Carousel" },
        path: "carousel-sample-1"
    },
    {
        data: { displayName: "Slides with ngFor directive", parentName: "Carousel" },
        path: "carousel-sample-2"
    },
    {
        data: { displayName: "Carousel Navigation", parentName: "Carousel" },
        path: "carousel-sample-3"
    },
    {
        data: { displayName: "Carousel Router Navigation", parentName: "Carousel" },
        path: "carousel-sample-4"
    },
    {
        data: { displayName: "Carousel Image Viewer", parentName: "Carousel" },
        path: "carousel"
    },
    {
        path: "details/:index"
    },
    {
        data: { displayName: "Expansion Panel 1", parentName: "Expansion Panel" },
        path: "expansion-sample-1"
    },
    {
        data: { displayName: "Expansion Panel 2", parentName: "Expansion Panel" },
        path: "expansion-sample-2"
    },
    {
        data: { displayName: "Expansion Panel 3", parentName: "Expansion Panel" },
        path: "expansion-sample-3"
    },
    {
        data: { displayName: "Expansion Panel 4", parentName: "Expansion Panel" },
        path: "expansion-sample-4"
    },
    {
        data: { displayName: "Expansion Panel 5", parentName: "Expansion Panel" },
        path: "expansion-sample-5"
    },
    {
        data: { displayName: "Expansion Panel 6", parentName: "Expansion Panel" },
        path: "expansion-sample-6"
    },
    {
        data: { displayName: "Expansion Panel 7", parentName: "Expansion Panel" },
        path: "expansion-sample-7"
    },
    {
        data: { displayName: "Layout Overview", parentName: "Layout" },
        path: "layout"
    },
    {
        data: { displayName: "Bottom Navigation Overview", parentName: "Bottom Navigation" },
        path: "tabbar"
    },
    {
        data: { displayName: "Bottom Navigation Simple Panels", parentName: "Bottom Navigation" },
        path: "tabbar-sample-1"
    },
    {
        data: { displayName: "Bottom Navigation Customizing Panels", parentName: "Bottom Navigation" },
        path: "tabbar-sample-2"
    },
    {
        data: { displayName: "Tabs Overview", parentName: "Tabs" },
        path: "tabs-sample-1"
    },
    {
        data: { displayName: "Tabs Types", parentName: "Tabs" },
        path: "tabs-sample-2"
    },
    {
        data: { displayName: "Tabs Customizing", parentName: "Tabs" },
        path: "tabs-sample-3"
    },
    {
        path: "tabs-sample-4"
    },
    {
        path: "tabs-sample-5"
    },
    {
        data: { displayName: "Card with Avatar and Image", parentName: "Card" },
        path: "card-sample-2"
    },
    {
        data: { displayName: "Card Actions", parentName: "Card" },
        path: "card-sample-3"
    }
];

const routeMap: Map<string, Route> = createRouteMap(layoutsBaseRoutes);
export function layoutsRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
