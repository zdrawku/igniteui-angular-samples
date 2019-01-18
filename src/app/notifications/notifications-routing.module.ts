import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BannerSample1Component } from "./banner/banner-sample-1/banner-sample-1.component";
import { BannerSample2Component } from "./banner/banner-sample-2/banner-sample-2.component";
import { BannerSample3Component } from "./banner/banner-sample-3/banner-sample-3.component";
import { BannerSample4Component } from "./banner/banner-sample-4/banner-sample-4.component";
import { notificationsRoutesGenerator } from "./notifications-routes";
import { SnackbarSample1Component } from "./snackbar/snackbar-sample-1/snackbar-sample-1.component";
import { SnackbarSample2Component } from "./snackbar/snackbar-sample-2/snackbar-sample-2.component";
import { SnackbarSample3Component } from "./snackbar/snackbar-sample-3/snackbar-sample-3.component";
import { SnackbarSample4Component } from "./snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { SnackbarSample5Component } from "./snackbar/snackbar-sample-5/snackbar-sample-5.component";
import { ToastSample1Component } from "./toast/toast-sample-1/toast-sample-1.component";
import { ToastSample2Component } from "./toast/toast-sample-2/toast-sample-2.component";
import { ToastSample3Component } from "./toast/toast-sample-3/toast-sample-3.component";
import { ToastSample4Component } from "./toast/toast-sample-4/toast-sample-4.component";
import { ToastSample5Component } from "./toast/toast-sample-5/toast-sample-5.component";

export const notificationsRoutes: Routes = [
    notificationsRoutesGenerator("banner-sample-1", BannerSample1Component),
    notificationsRoutesGenerator("banner-sample-2", BannerSample2Component),
    notificationsRoutesGenerator("banner-sample-3", BannerSample3Component),
    notificationsRoutesGenerator("banner-sample-4", BannerSample4Component),
    notificationsRoutesGenerator("snackbar-sample-1", SnackbarSample1Component),
    notificationsRoutesGenerator("snackbar-sample-2", SnackbarSample2Component),
    notificationsRoutesGenerator("snackbar-sample-3", SnackbarSample3Component),
    notificationsRoutesGenerator("snackbar-sample-4", SnackbarSample4Component),
    notificationsRoutesGenerator("snackbar-sample-5", SnackbarSample5Component),
    notificationsRoutesGenerator("toast-sample-1", ToastSample1Component),
    notificationsRoutesGenerator("toast-sample-2", ToastSample2Component),
    notificationsRoutesGenerator("toast-sample-3", ToastSample3Component),
    notificationsRoutesGenerator("toast-sample-4", ToastSample4Component),
    notificationsRoutesGenerator("toast-sample-5", ToastSample5Component)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(notificationsRoutes)
    ]
})
export class NotificationsRoutingModule { }
