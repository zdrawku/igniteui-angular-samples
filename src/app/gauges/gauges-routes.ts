import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const gaugesBaseRoutes: Routes = [
    {
        data: { displayName: "Bullet Graph Animation", parentName: "Bullet Graph" },
        path: "bullet-graph-animation"
    },
    {
        data: { displayName: "Bullet Graph Labels", parentName: "Bullet Graph" },
        path: "bullet-graph-labels"
    },
    {
        data: { displayName: "Bullet Graph Background", parentName: "Bullet Graph" },
        path: "bullet-graph-background"
    },
    {
        data: { displayName: "Bullet Graph Ranges", parentName: "Bullet Graph" },
        path: "bullet-graph-ranges"
    },
    {
        data: { displayName: "Bullet Graph Scale", parentName: "Bullet Graph" },
        path: "bullet-graph-scale"
    },
    {
        data: { displayName: "Bullet Graph Tickmarks", parentName: "Bullet Graph" },
        path: "bullet-graph-tickmarks"
    },
    {
        data: { displayName: "Bullet Graph Measures", parentName: "Bullet Graph" },
        path: "bullet-graph-measures"
    },
    {
        data: { displayName: "Radial Gauge Animation", parentName: "Radial Gauge" },
        path: "radial-gauge-animation"
    },
    {
        data: { displayName: "Radial Gauge Labels", parentName: "Radial Gauge" },
        path: "radial-gauge-labels"
    },
    {
        data: { displayName: "Radial Gauge Needle", parentName: "Radial Gauge" },
        path: "radial-gauge-needle"
    },
    {
        data: { displayName: "Radial Gauge Scale", parentName: "Radial Gauge" },
        path: "radial-gauge-scale"
    },
    {
        data: { displayName: "Radial Gauge Tickmarks", parentName: "Radial Gauge" },
        path: "radial-gauge-tickmarks"
    },
    {
        data: { displayName: "Radial Gauge Ranges", parentName: "Radial Gauge" },
        path: "radial-gauge-ranges"
    },
    {
        data: { displayName: "Radial Gauge Backing", parentName: "Radial Gauge" },
        path: "radial-gauge-backing"
    },
    {
        data: { displayName: "Linear Gauge Animation", parentName: "Linear Gauge" },
        path: "linear-gauge-animation"
    },
    {
        data: { displayName: "Linear Gauge Needle", parentName: "Linear Gauge" },
        path: "linear-gauge-needle"
    },
    {
        data: { displayName: "Linear Gauge Backing", parentName: "Linear Gauge" },
        path: "linear-gauge-backing"
    },
    {
        data: { displayName: "Linear Gauge Labels", parentName: "Linear Gauge" },
        path: "linear-gauge-labels"
    },
    {
        data: { displayName: "Linear Gauge Scale", parentName: "Linear Gauge" },
        path: "linear-gauge-scale"
    },
    {
        data: { displayName: "Linear Gauge Tickmarks", parentName: "Linear Gauge" },
        path: "linear-gauge-tickmarks"
    },
    {
        data: { displayName: "Linear Gauge Ranges", parentName: "Linear Gauge" },
        path: "linear-gauge-ranges"
    }
];

const routeMap: Map<string, Route> = createRouteMap(gaugesBaseRoutes);
export function gaugesRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
