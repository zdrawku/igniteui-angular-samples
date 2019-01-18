import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DarkThemeSampleComponent } from "./dark-theme-sample/dark-theme-sample.component";
import { DefaultThemeSampleComponent } from "./default-theme-sample/default-theme-sample.component";
import { DisplayDensityComponent } from "./display-density/display-density.component";
import { ShadowsSampleComponent } from "./shadows/shadows-sample-1/shadows-sample.component";
import { ShadowsSample2Component } from "./shadows/shadows-sample-2/shadows-sample-2.component";
import { ThemeChooserSampleComponent } from "./theme-chooser/theme-chooser-sample.component";
import { themingRoutesGenerator } from "./theming-routes";

export const themingRoutes: Routes = [
    themingRoutesGenerator("theme-chooser", ThemeChooserSampleComponent),
    themingRoutesGenerator("default-theme-sample", DefaultThemeSampleComponent),
    themingRoutesGenerator("dark-theme-sample", DarkThemeSampleComponent),
    themingRoutesGenerator("shadows-sample", ShadowsSampleComponent),
    themingRoutesGenerator("shadows-sample-2", ShadowsSample2Component),
    themingRoutesGenerator("density", DisplayDensityComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(themingRoutes)
    ]
})
export class ThemingRoutingModule { }
