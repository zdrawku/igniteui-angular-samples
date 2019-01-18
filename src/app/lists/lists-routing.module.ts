import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CascadingCombos } from "./combo/cascading-combos/cascading-combos.component";
import { ComboFeatures } from "./combo/combo-features/combo-features.component";
import { ComboMainComponent } from "./combo/combo-main/combo-main.component";
import { ComboRemoteComponent } from "./combo/combo-remote/combo-remote.component";
import { ComboTemplateComponent } from "./combo/combo-template/combo-template.component";
import { ListChatSampleComponent } from "./list/list-chat-sample/list-chat-sample.component";
import { ListSample1Component } from "./list/list-sample-1/list-sample-1.component";
import { ListSample2Component } from "./list/list-sample-2/list-sample-2.component";
import { ListSample3Component } from "./list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "./list/list-sample-4/list-sample-4.component";
import { ListSample5Component } from "./list/list-sample-5/list-sample-5.component";
import { ListSample6Component } from "./list/list-sample-6/list-sample-6.component";
import { ListSample7Component } from "./list/list-sample-7/list-sample-7.component";
import { ListComponent } from "./list/list.component";
import { listsRoutesGenerator } from "./lists-routes";

export const listsRoutes: Routes = [
    listsRoutesGenerator("combo", ComboMainComponent),
    listsRoutesGenerator("combo-features", ComboFeatures),
    listsRoutesGenerator("combo-remote", ComboRemoteComponent),
    listsRoutesGenerator("combo-template", ComboTemplateComponent),
    listsRoutesGenerator("cascading-combos", CascadingCombos),
    listsRoutesGenerator("list", ListComponent),
    listsRoutesGenerator("list-sample-1", ListSample1Component),
    listsRoutesGenerator("list-sample-2", ListSample2Component),
    listsRoutesGenerator("list-sample-3", ListSample3Component),
    listsRoutesGenerator("list-sample-4", ListSample4Component),
    listsRoutesGenerator("list-sample-5", ListSample5Component),
    listsRoutesGenerator("list-sample-6", ListSample6Component),
    listsRoutesGenerator("list-sample-5", ListSample5Component),
    listsRoutesGenerator("list-sample-6", ListSample6Component),
    listsRoutesGenerator("list-sample-7", ListSample7Component),
    listsRoutesGenerator("list-chat-sample", ListChatSampleComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(listsRoutes)
    ]
})
export class ListsRoutingModule { }
