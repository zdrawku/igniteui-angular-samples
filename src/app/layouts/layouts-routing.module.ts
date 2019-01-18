import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvatarSample1Component } from "./avatar/avatar-sample-1/avatar-sample-1.component";
import { AvatarSample2Component } from "./avatar/avatar-sample-2/avatar-sample-2.component";
import { AvatarSample3Component } from "./avatar/avatar-sample-3/avatar-sample-3.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ExpansionPanelSample1Component } from "./expansion-panel/expansion-sample-1/expansion-sample-1.component";
import { ExpansionPanelSample2Component } from "./expansion-panel/expansion-sample-2/expansion-sample-2.component";
import { ExpansionPanelSample3Component } from "./expansion-panel/expansion-sample-3/expansion-sample-3.component";
import { ExpansionPanelSample4Component } from "./expansion-panel/expansion-sample-4/expansion-sample-4.component";
import { ExpansionPanelSample5Component } from "./expansion-panel/expansion-sample-5/expansion-sample-5.component";
import { ExpansionPanelSample6Component } from "./expansion-panel/expansion-sample-6/expansion-sample-6.component";
import { ExpansionPanelSample7Component } from "./expansion-panel/expansion-sample-7/expansion-sample-7.component";
import { LayoutComponent } from "./layout/layout.component";
import { layoutsRoutesGenerator } from "./layouts-routes";
import { TabbarSample1Component } from "./tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "./tabbar/tabbar-sample-2/tabbar-sample-2.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { TabsSample1Component } from "./tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "./tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "./tabs/tabs-sample-3/tabs-sample-3.component";
import { TabsSample4Component } from "./tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample5Component } from "./tabs/tabs-sample-5/components/tabs-sample-5.component";

export const layoutsRoutes: Routes = [
    layoutsRoutesGenerator("avatar-sample-1", AvatarSample1Component),
    layoutsRoutesGenerator("avatar-sample-2", AvatarSample2Component),
    layoutsRoutesGenerator("avatar-sample-3", AvatarSample3Component),
    layoutsRoutesGenerator("card", CardComponent),
    layoutsRoutesGenerator("carousel-sample-1", CarouselSample1Component),
    layoutsRoutesGenerator("carousel-sample-2", CarouselSample2Component),
    layoutsRoutesGenerator("carousel-sample-3", CarouselSample3Component),
    layoutsRoutesGenerator("carousel-sample-4", CarouselSample4Component),
    layoutsRoutesGenerator("carousel", CarouselComponent),
    layoutsRoutesGenerator("details/:index", CarouselDetailsViewComponent),
    layoutsRoutesGenerator("expansion-sample-1", ExpansionPanelSample1Component),
    layoutsRoutesGenerator("expansion-sample-2", ExpansionPanelSample2Component),
    layoutsRoutesGenerator("expansion-sample-3", ExpansionPanelSample3Component),
    layoutsRoutesGenerator("expansion-sample-4", ExpansionPanelSample4Component),
    layoutsRoutesGenerator("expansion-sample-5", ExpansionPanelSample5Component),
    layoutsRoutesGenerator("expansion-sample-6", ExpansionPanelSample6Component),
    layoutsRoutesGenerator("expansion-sample-7", ExpansionPanelSample7Component),
    layoutsRoutesGenerator("layout", LayoutComponent),
    layoutsRoutesGenerator("tabbar", TabbarComponent),
    layoutsRoutesGenerator("tabbar-sample-1", TabbarSample1Component),
    layoutsRoutesGenerator("tabbar-sample-2", TabbarSample2Component),
    layoutsRoutesGenerator("tabs-sample-1", TabsSample1Component),
    layoutsRoutesGenerator("tabs-sample-2", TabsSample2Component),
    layoutsRoutesGenerator("tabs-sample-3", TabsSample3Component),
    layoutsRoutesGenerator("tabs-sample-4", TabsSample4Component),
    layoutsRoutesGenerator("tabs-sample-5", TabsSample5Component),
    layoutsRoutesGenerator("card-sample-2", CardSample2Component),
    layoutsRoutesGenerator("card-sample-3", CardSample3Component)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(layoutsRoutes)
    ]
})
export class LayoutsRoutingModule { }
