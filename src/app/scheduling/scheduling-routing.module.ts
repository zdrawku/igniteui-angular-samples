import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarSample1Component } from "./calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "./calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "./calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "./calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "./calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarSample6Component } from "./calendar/calendar-sample-6/calendar-sample-6.component";
import { CalendarSample7Component } from "./calendar/calendar-sample-7/calendar-sample-7.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { DatepickerSample1Component } from "./datepicker/datepicker-sample-1/datepicker-sample-1.component";
import { DatepickerSample2Component } from "./datepicker/datepicker-sample-2/datepicker-sample-2.component";
import { DatepickerSample3Component } from "./datepicker/datepicker-sample-3/datepicker-sample-3.component";
import { DatepickerSample4Component } from "./datepicker/datepicker-sample-4/datepicker-sample-4.component";
import { DatepickerSample5Component } from "./datepicker/datepicker-sample-5/datepicker-sample-5.component";
import { DatepickerSample6Component } from "./datepicker/datepicker-sample-6/datepicker-sample-6.component";
import { schedulingRoutesGenerator } from "./scheduling-routes";
import { TimePickerSample1Component } from "./timepicker/timepicker-sample-1/timepicker-sample-1.component";
import { TimePickerSample2Component } from "./timepicker/timepicker-sample-2/timepicker-sample-2.component";
import { TimePickerSample3Component } from "./timepicker/timepicker-sample-3/timepicker-sample-3.component";
import { TimePickerSample4Component } from "./timepicker/timepicker-sample-4/timepicker-sample-4.component";
import { TimePickerSample5Component } from "./timepicker/timepicker-sample-5/timepicker-sample-5.component";

export const schedulingRoutes: Routes = [
    schedulingRoutesGenerator("calendar", CalendarComponent),
    schedulingRoutesGenerator("calendar-sample-1", CalendarSample1Component),
    schedulingRoutesGenerator("calendar-sample-2", CalendarSample2Component),
    schedulingRoutesGenerator("calendar-sample-3", CalendarSample3Component),
    schedulingRoutesGenerator("calendar-sample-4", CalendarSample4Component),
    schedulingRoutesGenerator("calendar-sample-5", CalendarSample5Component),
    schedulingRoutesGenerator("calendar-sample-6", CalendarSample6Component),
    schedulingRoutesGenerator("calendar-sample-7", CalendarSample7Component),
    schedulingRoutesGenerator("datepicker-sample-1", DatepickerSample1Component),
    schedulingRoutesGenerator("datepicker-sample-2", DatepickerSample2Component),
    schedulingRoutesGenerator("datepicker-sample-3", DatepickerSample3Component),
    schedulingRoutesGenerator("datepicker-sample-4", DatepickerSample4Component),
    schedulingRoutesGenerator("datepicker-sample-5", DatepickerSample5Component),
    schedulingRoutesGenerator("datepicker-sample-6", DatepickerSample6Component),
    schedulingRoutesGenerator("timepicker-sample-1", TimePickerSample1Component),
    schedulingRoutesGenerator("timepicker-sample-2", TimePickerSample2Component),
    schedulingRoutesGenerator("timepicker-sample-3", TimePickerSample3Component),
    schedulingRoutesGenerator("timepicker-sample-4", TimePickerSample4Component),
    schedulingRoutesGenerator("timepicker-sample-5", TimePickerSample5Component)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(schedulingRoutes)
    ]
})
export class SchedulingRoutingModule { }
