import { NgModule } from "@angular/core";
import { RouterModule, Routes  } from "@angular/router";
import { AvatarSample1Component} from "./avatar/avatar-sample-1/avatar-sample-1.component";
import { AvatarSample2Component} from "./avatar/avatar-sample-2/avatar-sample-2.component";
import { AvatarSample3Component} from "./avatar/avatar-sample-3/avatar-sample-3.component";
import { BadgeSample1Component } from "./badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "./badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "./badge/badge-sample-3/badge-sample-3.component";
import { ButtonsSample1Component } from "./buttons/buttons-sample-1/buttons-sample-1.component";
import { ButtonsSample2Component } from "./buttons/buttons-sample-2/buttons-sample-2.component";
import { ButtonsSample3Component } from "./buttons/buttons-sample-3/buttons-sample-3.component";
import { ButtonsSample4Component } from "./buttons/buttons-sample-4/buttons-sample-4.component";
import { ButtonsSample5Component } from "./buttons/buttons-sample-5/buttons-sample-5.component";
import { ButtonsSample6Component } from "./buttons/buttons-sample-6/buttons-sample-6.component";
import { ButtonsSample7Component } from "./buttons/buttons-sample-7/buttons-sample-7.component";
import { CalendarSample1Component } from "./calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "./calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "./calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "./calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "./calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CardSample1Component } from "./card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardComponent } from "./card/card.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselSample1Component } from "./carousel/carousel-sample-1/carousel-sample-1.component";
import { CarouselSample2Component } from "./carousel/carousel-sample-2/carousel-sample-2.component";
import { CarouselSample3Component } from "./carousel/carousel-sample-3/carousel-sample-3.component";
import { CarouselSample4Component } from "./carousel/carousel-sample-4/carousel-sample-4.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DialogSample1Component } from "./dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "./dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "./dialog/dialog-sample-3/dialog-sample-3.component";
import { DialogComponent } from "./dialog/dialog.component";
import { CheckboxSample1Component } from "./form-elements/checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { RadioSample1Component } from "./form-elements/radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./form-elements/radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./form-elements/switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./form-elements/switch/switch-sample-2/switch-sample-2.component";
import { FinancialSampleComponent } from "./grid/grid-sample-2/grid-sample-2.component";
import { GridComponent } from "./grid/grid.component";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IgxForComponent } from "./igxFor/igxFor.component";
import { LabelInputComponent } from "./label-input/label-input.component";
import { LayoutComponent } from "./layout/layout.component";
import { ListSample1Component } from "./list/list-sample-1/list-sample-1.component";
import { ListSample2Component } from "./list/list-sample-2/list-sample-2.component";
import { ListSample3Component } from "./list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "./list/list-sample-4/list-sample-4.component";
import { ListSample5Component } from "./list/list-sample-5/list-sample-5.component";
import { ListComponent } from "./list/list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDrawerMiniComponent } from "./navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "./navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "./navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavdrawerComponent } from "./navdrawer/navdrawer.component";
import { ProgressbarComponent } from "./progressbar/progressbar.component";
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
import { SnackbarSample1Component } from "./snackbar/snackbar-sample-1/snackbar-sample-1.component";
import { SnackbarSample2Component } from "./snackbar/snackbar-sample-2/snackbar-sample-2.component";
import { SnackbarSample3Component } from "./snackbar/snackbar-sample-3/snackbar-sample-3.component";
import { SnackbarSample4Component } from "./snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { ToastSample1Component } from "./toast/toast-sample-1/toast-sample-1.component";
import { ToastSample2Component } from "./toast/toast-sample-2/toast-sample-2.component";
import { ToastSample3Component } from "./toast/toast-sample-3/toast-sample-3.component";
import { ToastSample4Component } from "./toast/toast-sample-4/toast-sample-4.component";
import { ToastSample5Component } from "./toast/toast-sample-5/toast-sample-5.component";
import { ToggleSample1Component } from "./toggle/toggle-sample-1/toggle-sample-1.component";
import { ToggleSample2Component } from "./toggle/toggle-sample-2/toggle-sample-2.component";
import { ToggleSample3Component } from "./toggle/toggle-sample-3/toggle-sample-3.component";
import { ToggleComponent } from "./toggle/toggle.component";

const appRoutes: Routes = [
  {
    component: AvatarSample1Component,
    path: "avatar-sample-1"
  },
  {
    component: AvatarSample2Component,
    path: "avatar-sample-2"
  },
  {
    component: AvatarSample3Component,
    path: "avatar-sample-3"
  },
  {
    component: BadgeSample1Component,
    path: "badge-sample-1"
  },
  {
    component: BadgeSample2Component,
    path: "badge-sample-2"
  },
  {
    component: BadgeSample3Component,
    path: "badge-sample-3"
  },
  {
    component: CardComponent,
    path: "card"
  },
  {
    component: CalendarSample1Component,
    path: "calendar-sample-1"
  },
  {
    component: CalendarSample2Component,
    path: "calendar-sample-2"
  },
  {
    component: CalendarSample3Component,
    path: "calendar-sample-3"
  },
  {
    component: CalendarSample4Component,
    path: "calendar-sample-4"
  },
  {
    component: CalendarSample5Component,
    path: "calendar-sample-5"
  },
  {
    component: CalendarComponent,
    path: "calendar"
  },
  {
    component: CarouselComponent,
    path: "carousel"
  },
  {
    component: CarouselDetailsViewComponent,
    path: "details/:index"
  },
  {
    component: CarouselSample1Component,
    path: "carousel-sample-1"
  },
  {
    component: CarouselSample2Component,
    path: "carousel-sample-2"
  },
  {
    component: CarouselSample3Component,
    path: "carousel-sample-3"
  },
  {
    component: CarouselSample4Component,
    path: "carousel-sample-4"
  },
  {
    component: CheckboxSample1Component,
    path: "checkbox-sample-1"
  },
  {
    component: CheckboxSample2Component,
    path: "checkbox-sample-2"
  },
  {
    component: DatepickerComponent,
    path: "datepicker"
  },
  {
    component: DialogComponent,
    path: "dialog"
  },
  {
    component: DialogSample1Component,
    path: "dialog-sample-1"
  },
  {
    component: DialogSample2Component,
    path: "dialog-sample-2"
  },
  {
    component: DialogSample3Component,
    path: "dialog-sample-3"
  },
  {
    component: LayoutComponent,
    path: "layout"
  },
  {
    component: ListComponent,
    path: "list"
  },
  {
    component: ListSample1Component,
    path: "list-sample-1"
  },
  {
    component: ListSample2Component,
    path: "list-sample-2"
  },
  {
    component: ListSample3Component,
    path: "list-sample-3"
  },
  {
    component: ListSample4Component,
    path: "list-sample-4"
  },
  {
    component: ListSample5Component,
    path: "list-sample-5"
  },
  {
    component: NavdrawerComponent,
    path: "navigation-drawer"
  },
  {
    component: NavDrawerSimpleComponent,
    path: "navigation-drawer-simple"
  },
  {
    component: NavDrawerPinComponent,
    path: "navigation-drawer-pin"
  },
  {
    component: NavDrawerMiniComponent,
    path: "navigation-drawer-mini"
  },
  {
    component: GridComponent,
    path: "grid"
  },
  {
    component: SnackbarSample1Component,
    path: "snackbar-sample-1"
  },
  {
    component: SnackbarSample2Component,
    path: "snackbar-sample-2"
  },
  {
    component: SnackbarSample3Component,
    path: "snackbar-sample-3"
  },
  {
    component: SnackbarSample4Component,
    path: "snackbar-sample-4"
  },
  {
    component: SwitchSample1Component,
    path: "switch-sample-1"
  },
  {
    component: SwitchSample2Component,
    path: "switch-sample-2"
  },
  {
    component: RadioSample1Component,
    path: "radio-sample-1"
  },
  {
    component: RadioSample2Component,
    path: "radio-sample-2"
  },
  {
    component: ToastSample1Component,
    path: "toast-sample-1"
  },
  {
    component: ToastSample2Component,
    path: "toast-sample-2"
  },
  {
    component: ToastSample3Component,
    path: "toast-sample-3"
  },
  {
    component: ToastSample4Component,
    path: "toast-sample-4"
  },
  {
    component: ToastSample5Component,
    path: "toast-sample-5"
  },
  {
    component: SliderSample1Component,
    path: "slider-sample-1"
  },
  {
    component: SliderSample2Component,
    path: "slider-sample-2"
  },
  {
    component: SliderSample3Component,
    path: "slider-sample-3"
  },
  {
    component: SliderSample4Component,
    path: "slider-sample-4"
  },
  {
    component: SliderSample5Component,
    path: "slider-sample-5"
  },
  {
    component: ProgressbarComponent,
    path: "progressbar"
  },
  {
    component: TabbarComponent,
    path: "tabbar"
  },
  {
    component: NavbarComponent,
    path: "navbar"
  },
  {
    component: CardSample1Component,
    path: "card-sample-1"
  },
  {
    component: CardSample2Component,
    path: "card-sample-2"
  },
  {
    component: CardSample3Component,
    path: "card-sample-3"
  },
  {
    component: IconSample1Component,
    path: "icon-sample-1"
  },
  {
    component: LabelInputComponent,
    path: "label-input"
  },
  {
    component: ButtonsSample1Component,
    path: "buttons-sample-1"
  },
  {
    component: ButtonsSample2Component,
    path: "buttons-sample-2"
  },
  {
    component: ButtonsSample3Component,
    path: "buttons-sample-3"
  },
  {
    component: ButtonsSample4Component,
    path: "buttons-sample-4"
  },
  {
    component: ButtonsSample5Component,
    path: "buttons-sample-5"
  },
  {
    component: ButtonsSample6Component,
    path: "buttons-sample-6"
  },
  {
    component: ButtonsSample7Component,
    path: "buttons-sample-7"
  },
  {
    component: ToggleComponent,
    path: "toggle"
  },
  {
    component: ToggleSample1Component,
    path: "toggle-sample-1"
  },
  {
    component: ToggleSample2Component,
    path: "toggle-sample-2"
  },
  {
    component: RippleSample1Component,
    path: "ripple-sample-1"
  },
  {
    component: RippleSample2Component,
    path: "ripple-sample-2"
  },
  {
    component: RippleSample3Component,
    path: "ripple-sample-3"
  },
  {
    component: RippleSample4Component,
    path: "ripple-sample-4"
  },
  {
    component: RippleSample5Component,
    path: "ripple-sample-5"
  },
  {
    component: RippleSample6Component,
    path: "ripple-sample-6"
  },
  {
    component: IgxForComponent,
    path: "igx-for-sample-1"
  },
  {
    component: FinancialSampleComponent,
    path: "grid-sample-2"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {}
