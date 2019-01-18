import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BadgeSample1Component } from "./badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "./badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "./badge/badge-sample-3/badge-sample-3.component";
import { ChipSampleComponent } from "./chip/chip.component";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";
import { dataDisplayRoutesGenerator } from "./data-display-routes";
import { IconSample1Component } from "./icon/icon-sample-1/icon-sample-1.component";
import { IconSample2Component } from "./icon/icon-sample2/icon-sample2.component";
import { SvgIconSampleComponent } from "./icon/svg-icon-sample/svg-icon-sample.component";
import { IgxForComponent } from "./igxFor/igxFor.component";
import { LinearProgressbarSample1Component
} from "./linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component";
import { LinearProgressbarSample2Component
} from "./linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component";
import { LinearProgressbarComponent } from "./linear-progressbar/linear-progressbar.component";
import { MaskSample1Component } from "./mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "./mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "./mask/mask-sample-3/mask-sample-3.component";
import { MaskSample4Component } from "./mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "./mask/mask-sample-5/mask-sample-5.component";
import { TextHighlightSample1Component
} from "./text-highlight/text-highlight-sample-1/text-highlight-sample-1.component";
import { TextHighlightSample2Component
} from "./text-highlight/text-highlight-sample-2/text-highlight-sample-2.component";

export const dataDisplayRoutes: Routes = [
    dataDisplayRoutesGenerator("badge-sample-1", BadgeSample1Component),
    dataDisplayRoutesGenerator("badge-sample-2", BadgeSample2Component),
    dataDisplayRoutesGenerator("badge-sample-3", BadgeSample3Component),
    dataDisplayRoutesGenerator("chip-sample", ChipSampleComponent),
    dataDisplayRoutesGenerator("circular-progressbar", CircularProgressbarComponent),
    dataDisplayRoutesGenerator("icon-sample-1", IconSample1Component),
    dataDisplayRoutesGenerator("icon-sample2", IconSample2Component),
    dataDisplayRoutesGenerator("svg-icon-sample", SvgIconSampleComponent),
    dataDisplayRoutesGenerator("igx-for-sample-1", IgxForComponent),
    dataDisplayRoutesGenerator("linear-progressbar", LinearProgressbarComponent),
    dataDisplayRoutesGenerator("linear-progressbar-sample-1", LinearProgressbarSample1Component),
    dataDisplayRoutesGenerator("linear-progressbar-sample-2", LinearProgressbarSample2Component),
    dataDisplayRoutesGenerator("mask-sample-1", MaskSample1Component),
    dataDisplayRoutesGenerator("mask-sample-2", MaskSample2Component),
    dataDisplayRoutesGenerator("mask-sample-3", MaskSample3Component),
    dataDisplayRoutesGenerator("mask-sample-4", MaskSample4Component),
    dataDisplayRoutesGenerator("mask-sample-5", MaskSample5Component),
    dataDisplayRoutesGenerator("text-highlight-1", TextHighlightSample1Component),
    dataDisplayRoutesGenerator("text-highlight-2", TextHighlightSample2Component)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(dataDisplayRoutes)
    ]
})
export class DataDisplayRoutingModule { }
