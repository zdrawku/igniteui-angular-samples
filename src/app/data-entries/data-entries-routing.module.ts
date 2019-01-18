import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonGroupSample1Component } from "./buttonGroup/button-group-sample-1/button-group-sample-1.component";
import { ButtonGroupSample2Component } from "./buttonGroup/button-group-sample-2/button-group-sample-2.component";
import { ButtonGroupSample3Component } from "./buttonGroup/button-group-sample-3/button-group-sample-3.component";
import { ButtonsSample1Component } from "./buttons/buttons-sample-1/buttons-sample-1.component";
import { ButtonsSample2Component } from "./buttons/buttons-sample-2/buttons-sample-2.component";
import { ButtonsSample3Component } from "./buttons/buttons-sample-3/buttons-sample-3.component";
import { ButtonsSample4Component } from "./buttons/buttons-sample-4/buttons-sample-4.component";
import { ButtonsSample5Component } from "./buttons/buttons-sample-5/buttons-sample-5.component";
import { ButtonsSample6Component } from "./buttons/buttons-sample-6/buttons-sample-6.component";
import { ButtonsSample7Component } from "./buttons/buttons-sample-7/buttons-sample-7.component";
import { CheckboxSample1Component } from "./checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { dataEntriesRoutesGenerator } from "./data-entries-routes";
import { DropdownMenuComponent } from "./dropdown/dropdown-menu/dropdown-menu.component";
import { DropDownSample1Component } from "./dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "./dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "./dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { DropDownSample4Component } from "./dropdown/dropdown-sample-4/dropdown-sample-4.component";
import { InputGroupSample1Component } from "./input-group/input-group-sample-1/input-group-sample-1.component";
import { InputGroupSample2Component } from "./input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample3Component } from "./input-group/input-group-sample-3/input-group-sample-3.component";
import { InputGroupSample4Component } from "./input-group/input-group-sample-4/input-group-sample-4.component";
import { InputGroupSample5Component } from "./input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupSample6Component } from "./input-group/input-group-sample-6/input-group-sample-6.component";
import { ReactiveFormsSampleComponent } from "./input-group/reactive-forms/reactive-forms.component";
import { RadioGroupSampleComponent } from "./radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./switch/switch-sample-2/switch-sample-2.component";

export const dataEntriesRoutes: Routes = [
    dataEntriesRoutesGenerator("button-group-sample-1", ButtonGroupSample1Component),
    dataEntriesRoutesGenerator("button-group-sample-2", ButtonGroupSample2Component),
    dataEntriesRoutesGenerator("button-group-sample-3", ButtonGroupSample3Component),
    dataEntriesRoutesGenerator("buttons-sample-1", ButtonsSample1Component),
    dataEntriesRoutesGenerator("buttons-sample-2", ButtonsSample2Component),
    dataEntriesRoutesGenerator("buttons-sample-3", ButtonsSample3Component),
    dataEntriesRoutesGenerator("buttons-sample-4", ButtonsSample4Component),
    dataEntriesRoutesGenerator("buttons-sample-5", ButtonsSample5Component),
    dataEntriesRoutesGenerator("buttons-sample-6", ButtonsSample6Component),
    dataEntriesRoutesGenerator("buttons-sample-7", ButtonsSample7Component),
    dataEntriesRoutesGenerator("checkbox-sample-1", CheckboxSample1Component),
    dataEntriesRoutesGenerator("checkbox-sample-2", CheckboxSample2Component),
    dataEntriesRoutesGenerator("dropdown-menu", DropdownMenuComponent),
    dataEntriesRoutesGenerator("dropdown-sample-1", DropDownSample1Component),
    dataEntriesRoutesGenerator("dropdown-sample-2", DropDownSample2Component),
    dataEntriesRoutesGenerator("dropdown-sample-3", DropDownSample3Component),
    dataEntriesRoutesGenerator("dropdown-sample-4", DropDownSample4Component),
    dataEntriesRoutesGenerator("input-group-sample-1", InputGroupSample1Component),
    dataEntriesRoutesGenerator("input-group-sample-2", InputGroupSample2Component),
    dataEntriesRoutesGenerator("input-group-sample-3", InputGroupSample3Component),
    dataEntriesRoutesGenerator("input-group-sample-4", InputGroupSample4Component),
    dataEntriesRoutesGenerator("input-group-sample-5", InputGroupSample5Component),
    dataEntriesRoutesGenerator("input-group-sample-6", InputGroupSample6Component),
    dataEntriesRoutesGenerator("reactive-forms", ReactiveFormsSampleComponent),
    dataEntriesRoutesGenerator("radio-sample-1", RadioSample1Component),
    dataEntriesRoutesGenerator("radio-sample-2", RadioSample2Component),
    dataEntriesRoutesGenerator("radio-group-sample", RadioGroupSampleComponent),
    dataEntriesRoutesGenerator("switch-sample-1", SwitchSample1Component),
    dataEntriesRoutesGenerator("switch-sample-2", SwitchSample2Component)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(dataEntriesRoutes)
    ]
})
export class DataEntriesRoutingModule { }
