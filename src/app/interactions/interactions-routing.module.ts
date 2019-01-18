import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DialogSample1Component } from "./dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "./dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "./dialog/dialog-sample-3/dialog-sample-3.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DragAndDropSampleComponent } from "./drag-drop/drag-drop.component";
import { interactionsRoutesGenerator } from "./interactions-routes";
import { OverlaySampleMain1Component } from "./overlay/overlay-main-1/overlay-main-sample-1.component";
import { OverlaySampleMain2Component } from "./overlay/overlay-main-2/overlay-main-sample-2.component";
import { OverlaySampleMain3Component } from "./overlay/overlay-main-3/overlay-main-sample-3.component";
import { OverlayPositionSample1Component } from "./overlay/overlay-positioning-1/overlay-position-sample-1.component";
import { OverlayPositionSample2Component } from "./overlay/overlay-positioning-2/overlay-position-sample-2.component";
import { OverlayScrollSample1Component } from "./overlay/overlay-scroll-1/overlay-scroll-sample-1.component";
import { OverlayScrollSample2Component } from "./overlay/overlay-scroll-2/overlay-scroll-sample-2.component";
import { RippleSample1Component } from "./ripple/ripple-sample-1/ripple-sample-1.component";
import { RippleSample2Component } from "./ripple/ripple-sample-2/ripple-sample-2.component";
import { RippleSample3Component } from "./ripple/ripple-sample-3/ripple-sample-3.component";
import { RippleSample4Component } from "./ripple/ripple-sample-4/ripple-sample-4.component";
import { RippleSample5Component } from "./ripple/ripple-sample-5/ripple-sample-5.component";
import { RippleSample6Component } from "./ripple/ripple-sample-6/ripple-sample-6.component";
import { SliderSample1Component } from "./slider/slider-sample-1/slider-sample-1.component";
import { SliderSample2Component } from "./slider/slider-sample-2/slider-sample-2.component";
import { SliderSample3Component } from "./slider/slider-sample-3/slider-sample-3.component";
import { SliderSample4Component } from "./slider/slider-sample-4/slider-sample-4.component";
import { SliderSample5Component } from "./slider/slider-sample-5/slider-sample-5.component";
import { ToggleSample1Component } from "./toggle/toggle-sample-1/toggle-sample-1.component";
import { ToggleSample2Component } from "./toggle/toggle-sample-2/toggle-sample-2.component";
import { ToggleSample3Component } from "./toggle/toggle-sample-3/toggle-sample-3.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { TooltipRichComponent } from "./tooltip/tooltip-rich/tooltip-rich.component";
import { TooltipSimpleComponent } from "./tooltip/tooltip-simple/tooltip-simple.component";

export const interactionsRoutes: Routes = [
    interactionsRoutesGenerator("dialog", DialogComponent),
    interactionsRoutesGenerator("dialog-sample-1", DialogSample1Component),
    interactionsRoutesGenerator("dialog-sample-2", DialogSample2Component),
    interactionsRoutesGenerator("dialog-sample-3", DialogSample3Component),
    interactionsRoutesGenerator("slider-sample-1", SliderSample1Component),
    interactionsRoutesGenerator("slider-sample-2", SliderSample2Component),
    interactionsRoutesGenerator("slider-sample-3", SliderSample3Component),
    interactionsRoutesGenerator("slider-sample-4", SliderSample4Component),
    interactionsRoutesGenerator("slider-sample-5", SliderSample5Component),
    interactionsRoutesGenerator("ripple-sample-1", RippleSample1Component),
    interactionsRoutesGenerator("ripple-sample-2", RippleSample2Component),
    interactionsRoutesGenerator("ripple-sample-3", RippleSample3Component),
    interactionsRoutesGenerator("ripple-sample-4", RippleSample4Component),
    interactionsRoutesGenerator("ripple-sample-5", RippleSample5Component),
    interactionsRoutesGenerator("ripple-sample-6", RippleSample6Component),
    interactionsRoutesGenerator("toggle", ToggleComponent),
    interactionsRoutesGenerator("toggle-sample-1", ToggleSample1Component),
    interactionsRoutesGenerator("toggle-sample-2", ToggleSample2Component),
    interactionsRoutesGenerator("toggle-sample-3", ToggleSample3Component),
    interactionsRoutesGenerator("tooltip-simple", TooltipSimpleComponent),
    interactionsRoutesGenerator("tooltip-rich", TooltipRichComponent),
    interactionsRoutesGenerator("overlay-sample-main-1", OverlaySampleMain1Component),
    interactionsRoutesGenerator("overlay-sample-main-2", OverlaySampleMain2Component),
    interactionsRoutesGenerator("overlay-sample-main-3", OverlaySampleMain3Component),
    interactionsRoutesGenerator("overlay-position-sample-1", OverlayPositionSample1Component),
    interactionsRoutesGenerator("overlay-position-sample-2", OverlayPositionSample2Component),
    interactionsRoutesGenerator("overlay-scroll-sample-1", OverlayScrollSample1Component),
    interactionsRoutesGenerator("overlay-scroll-sample-2", OverlayScrollSample2Component),
    interactionsRoutesGenerator("drag-drop-sample", DragAndDropSampleComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(interactionsRoutes)
    ]
})
export class InteractionsRoutingModule {}
