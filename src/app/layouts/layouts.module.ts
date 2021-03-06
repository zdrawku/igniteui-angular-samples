import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule,
    IgxBottomNavModule,
    IgxButtonModule,
    IgxCardModule,
    IgxCarouselModule,
    IgxCheckboxModule,
    IgxDividerModule,
    IgxExpansionPanelModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxLayoutModule,
    IgxListModule,
    IgxNavbarModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxTabsModule,
    IgxToastModule
} from "igniteui-angular";
import { AvatarSample1Component } from "./avatar/avatar-sample-1/avatar-sample-1.component";
import { AvatarSample2Component } from "./avatar/avatar-sample-2/avatar-sample-2.component";
import { AvatarSample3Component } from "./avatar/avatar-sample-3/avatar-sample-3.component";
import { CardSample1Component } from "./card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardSample4Component } from "./card/card-sample-4/card-sample-4.component";
import { CardStylingSampleComponent } from "./card/card-styling-sample/card-styling-sample.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DividerDashedComponent } from "./divider/dashed/divider-dashed.component";
import { DividerDefaultComponent } from "./divider/default/divider-default.component";
import { DividerInsetComponent } from "./divider/inset/divider-inset.component";
import { DividerVerticalComponent } from "./divider/vertical/divider-vertical.component";
import { ExpansionPanelSample1Component } from "./expansion-panel/expansion-sample-1/expansion-sample-1.component";
import { ExpansionPanelSample2Component } from "./expansion-panel/expansion-sample-2/expansion-sample-2.component";
import { ExpansionPanelSample3Component } from "./expansion-panel/expansion-sample-3/expansion-sample-3.component";
import { ExpansionPanelSample4Component } from "./expansion-panel/expansion-sample-4/expansion-sample-4.component";
import { ExpansionPanelSample5Component } from "./expansion-panel/expansion-sample-5/expansion-sample-5.component";
import { ExpansionPanelSample6Component } from "./expansion-panel/expansion-sample-6/expansion-sample-6.component";
import { ExpansionPanelSample7Component } from "./expansion-panel/expansion-sample-7/expansion-sample-7.component";
import { ExpansionPanelStylingComponent } from "./expansion-panel/expansion-styling/expansion-styling.component";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutsRoutingModule } from "./layouts-routing.module";
import { TabbarSample1Component } from "./tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "./tabbar/tabbar-sample-2/tabbar-sample-2.component";
import {
    BottomNavRoutingView1Component,
    BottomNavRoutingView2Component,
    BottomNavRoutingView3Component,
    TabbarSample3Component
} from "./tabbar/tabbar-sample-3/tabbar-sample-3.component";
import { TabbarStyleComponent } from "./tabbar/tabbar-style/tabbar-style.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { TabsSample1Component } from "./tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "./tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "./tabs/tabs-sample-3/tabs-sample-3.component";
import { TabsSample4Component } from "./tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample5Component } from "./tabs/tabs-sample-5/components/tabs-sample-5.component";
import {
    TabsRoutingView1Component,
    TabsRoutingView2Component,
    TabsRoutingView3Component,
    TabsSample6Component
} from "./tabs/tabs-sample-6/tabs-sample-6.component";
import { TabsStyleComponent } from "./tabs/tabs-style/tabs-style.component";

@NgModule({
    declarations: [
        AvatarSample1Component,
        AvatarSample2Component,
        AvatarSample3Component,
        BottomNavRoutingView1Component,
        BottomNavRoutingView2Component,
        BottomNavRoutingView3Component,
        CardSample1Component,
        CardSample2Component,
        CardSample3Component,
        CardSample4Component,
        CardComponent,
        CarouselDetailsViewComponent,
        CarouselSample1Component,
        CarouselSample2Component,
        CarouselSample3Component,
        CarouselSample4Component,
        CarouselComponent,
        DividerDefaultComponent,
        DividerVerticalComponent,
        DividerDashedComponent,
        DividerInsetComponent,
        ExpansionPanelSample1Component,
        ExpansionPanelSample2Component,
        ExpansionPanelSample3Component,
        ExpansionPanelSample4Component,
        ExpansionPanelSample5Component,
        ExpansionPanelSample6Component,
        ExpansionPanelSample7Component,
        ExpansionPanelStylingComponent,
        LayoutComponent,
        TabbarSample1Component,
        TabbarSample2Component,
        TabbarSample3Component,
        TabsRoutingView1Component,
        TabsRoutingView2Component,
        TabsRoutingView3Component,
        TabsSample6Component,
        TabbarComponent,
        TabsSample1Component,
        TabsSample2Component,
        TabsSample3Component,
        TabsSample4Component,
        TabsSample5Component,
        CardStylingSampleComponent,
        TabsStyleComponent,
        TabbarStyleComponent
    ],
    exports: [
        CardSample1Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        LayoutsRoutingModule,
        IgxAvatarModule,
        IgxBottomNavModule,
        IgxButtonModule,
        IgxCardModule,
        IgxCarouselModule,
        IgxCheckboxModule,
        IgxDividerModule,
        IgxExpansionPanelModule,
        IgxGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxLayoutModule,
        IgxListModule,
        IgxNavbarModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSelectModule,
        IgxSliderModule,
        IgxTabsModule,
        IgxToastModule
    ]
})
export class LayoutsModule { }
