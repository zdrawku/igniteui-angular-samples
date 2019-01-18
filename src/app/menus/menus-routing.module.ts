import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { menusRoutesGenerator } from "./menus-routes";
import { NavbarSample1Component } from "./navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarSample2Component } from "./navbar/navbar-sample-2/navbar-sample-2.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDrawerMiniComponent } from "./navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "./navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "./navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavdrawerComponent } from "./navdrawer/navdrawer.component";

export const menusRoutes: Routes = [
    menusRoutesGenerator("navigation-drawer", NavdrawerComponent),
    menusRoutesGenerator("navigation-drawer-simple", NavDrawerSimpleComponent),
    menusRoutesGenerator("navigation-drawer-pin", NavDrawerPinComponent),
    menusRoutesGenerator("navigation-drawer-mini", NavDrawerMiniComponent),
    menusRoutesGenerator("navbar", NavbarComponent),
    menusRoutesGenerator("navbar-sample-1", NavbarSample1Component),
    menusRoutesGenerator("navbar-sample-2", NavbarSample2Component)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(menusRoutes)
    ]
})
export class MenusRoutingModule { }
