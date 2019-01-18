import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const chartsBaseRoutes: Routes = [
    {
        data: { displayName: "Doughnut Chart Explosion", parentName: "Doughnut Chart" },
        path: "doughnut-chart-explosion"
    },
    {
        data: { displayName: "Doughnut Chart Overview", parentName: "Doughnut Chart" },
        path: "doughnut-chart-overview"
    },
    {
        data: { displayName: "Doughnut Chart Selection", parentName: "Doughnut Chart" },
        path: "doughnut-chart-selection"
    },
    {
        data: { displayName: "Pie Chart Data Sample", parentName: "Pie Chart" },
        path: "pie-chart-data-sample"
    },
    {
        data: { displayName: "Pie Chart Explosion", parentName: "Pie Chart" },
        path: "pie-chart-explosion"
    },
    {
        data: { displayName: "Pie Chart Legend", parentName: "Pie Chart" },
        path: "pie-chart-legend"
    },
    {
        data: { displayName: "Pie Chart Others Slice", parentName: "Pie Chart" },
        path: "pie-chart-others"
    },
    {
        data: { displayName: "Pie Chart Selection", parentName: "Pie Chart" },
        path: "pie-chart-selection"
    },
    {
        data: { displayName: "Category Chart Overview", parentName: "Category Chart" },
        path: "category-chart-overview-sample"
    },
    {
        data: { displayName: "Category Chart Annotations", parentName: "Category Chart" },
        path: "category-chart-annotations"
    },
    {
        data: { displayName: "Category Chart Overlap Columns", parentName: "Category Chart" },
        path: "category-chart-overlap-columns"
    },
    {
        data: { displayName: "Category Chart Highlighting", parentName: "Category Chart" },
        path: "category-chart-highlighting-sample"
    },
    {
        data: { displayName: "Category Chart High Volume", parentName: "Category Chart" },
        path: "category-chart-high-volume-sample"
    },
    {
        data: { displayName: "Financial Chart Overview", parentName: "Financial Chart" },
        path: "financial-chart-overview-sample"
    },
    {
        data: { displayName: "Category Chart High Frequency", parentName: "Category Chart" },
        path: "category-chart-high-frequency-sample"
    },
    {
        data: { displayName: "Category Chart Axis Options", parentName: "Category Chart" },
        path: "category-chart-axis-options-sample"
    },
    {
        data: { displayName: "Category Chart Configuring Options", parentName: "Category Chart" },
        path: "category-chart-config-options-sample"
    },
    {
        data: { displayName: "Category Chart Tooltips Template", parentName: "Category Chart" },
        path: "category-chart-tooltip-template"
    },
    {
        data: { displayName: "Category Chart Tooltip Types", parentName: "Category Chart" },
        path: "category-chart-tooltip-types"
    },
    {
        data: { displayName: "Category Chart Trendline", parentName: "Category Chart" },
        path: "category-chart-trendline"
    },
    {
        data: { displayName: "Financial Chart Performance", parentName: "Financial Chart" },
        path: "financial-chart-performance"
    },
    {
        data: { displayName: "Financial Chart Annotations", parentName: "Financial Chart" },
        path: "financial-chart-annotations"
    },
    {
        data: { displayName: "Financial Chart Titles", parentName: "Financial Chart" },
        path: "financial-chart-titles"
    },
    {
        data: { displayName: "Financial Chart Panes", parentName: "Financial Chart" },
        path: "financial-chart-panes"
    },
    {
        data: { displayName: "Financial Chart Multiple Sources", parentName: "Financial Chart" },
        path: "financial-chart-multiple-data"
    },
    {
        data: { displayName: "Financial Chart Multiple Feeds", parentName: "Financial Chart" },
        path: "financial-chart-multiple-feeds"
    },
    {
        data: { displayName: "Financial Chart Indicator Types", parentName: "Financial Chart" },
        path: "financial-chart-indicator-types"
    },
    {
        data: { displayName: "Financial Chart Volume Types", parentName: "Financial Chart" },
        path: "financial-chart-volume-type"
    },
    {
        data: { displayName: "Financial Chart Custom Indicators", parentName: "Financial Chart" },
        path: "financial-chart-custom-indicators"
    },
    {
        data: { displayName: "Financial Chart High Volume", parentName: "Financial Chart" },
        path: "financial-chart-high-volume"
    },
    {
        data: { displayName: "Financial Chart High Frequency", parentName: "Financial Chart" },
        path: "financial-chart-high-frequency"
    },
    {
        data: { displayName: "Financial Chart Axis Types", parentName: "Financial Chart" },
        path: "financial-chart-axis-types"
    },
    {
        data: { displayName: "Financial Chart Tooltips Template", parentName: "Financial Chart" },
        path: "financial-chart-tooltip-template"
    },
    {
        data: { displayName: "Financial Chart Tooltip Types", parentName: "Financial Chart" },
        path: "financial-chart-tooltip-types"
    },
    {
        data: { displayName: "Financial Chart Time Based Data", parentName: "Financial Chart" },
        path: "financial-chart-time-based-data"
    },
    {
        data: { displayName: "Financial Chart Trendlines", parentName: "Financial Chart" },
        path: "financial-chart-trendlines"
    }
];

const routeMap: Map<string, Route> = createRouteMap(chartsBaseRoutes);
export function chartsRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
