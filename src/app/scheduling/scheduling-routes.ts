import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { assignRouteComponent, createRouteMap } from "../utilities/routes-utility";

export const schedulingBaseRoutes: Routes = [
    {
        path: "calendar"
    },
    {
        data: { displayName: "Calendar Overview", parentName: "Calendar" },
        path: "calendar-sample-1"
    },
    {
        data: { displayName: "Customized Dates Display", parentName: "Calendar" },
        path: "calendar-sample-2"
    },
    {
        data: { displayName: "Calendar with Date Range", parentName: "Calendar" },
        path: "calendar-sample-3"
    },
    {
        data: { displayName: "Conditional Templating and Date Parsing ", parentName: "Calendar" },
        path: "calendar-sample-4"
    },
    {
        data: { displayName: "Calendar Selection", parentName: "Calendar" },
        path: "calendar-sample-5"
    },
    {
        data: { displayName: "Calendar disabled dates", parentName: "Calendar" },
        path: "calendar-sample-6"
    },
    {
        data: { displayName: "Calendar special dates", parentName: "Calendar" },
        path: "calendar-sample-7"
    },
    {
        data: { displayName: "Simple Datepicker", parentName: "Datepicker" },
        path: "datepicker-sample-1"
    },
    {
        data: { displayName: "One-way data bound Datepicker", parentName: "Datepicker" },
        path: "datepicker-sample-2"
    },
    {
        data: { displayName: "Datepicker Buttons", parentName: "Datepicker" },
        path: "datepicker-sample-3"
    },
    {
        data: { displayName: "Datepicker Formatter", parentName: "Datepicker" },
        path: "datepicker-sample-4"
    },
    {
        data: { displayName: "Datepicker Locales", parentName: "Datepicker" },
        path: "datepicker-sample-5"
    },
    {
        data: { displayName: "Datepicker Input Group Template", parentName: "Datepicker" },
        path: "datepicker-sample-6"
    },
    {
        data: { displayName: "Timepicker Overview", parentName: "Timepicker" },
        path: "timepicker-sample-1"
    },
    {
        data: { displayName: "One-way data bound Timepicker", parentName: "Timepicker" },
        path: "timepicker-sample-2"
    },
    {
        data: { displayName: "Timepicker Delta and Spin Mode", parentName: "Timepicker" },
        path: "timepicker-sample-3"
    },
    {
        data: { displayName: "Timepicker Validation", parentName: "Timepicker" },
        path: "timepicker-sample-4"
    },
    {
        data: { displayName: "Timepicker Input Group Template", parentName: "Timepicker" },
        path: "timepicker-sample-5"
    }
];

const routeMap: Map<string, Route> = createRouteMap(schedulingBaseRoutes);
export function schedulingRoutesGenerator(path: string, component: Type<any>): Route {
    return assignRouteComponent(routeMap, path, component);
}
