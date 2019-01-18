import { Type } from "@angular/core";
import { Route, Routes } from "@angular/router";

export function createRouteMap(routes: Routes): Map<string, Route> {
    const m: Map<string, Route> = new Map<string, Route>();
    routes.forEach((r) => {
        m.set(r.path, r);
    });

    return m;
}

export function assignRouteComponent(routeByPath: Map<string, Route>,
                                     path: string, component: Type<any>): Route {
    const route = routeByPath.get(path);
    route.component = component;
    return route;
}
