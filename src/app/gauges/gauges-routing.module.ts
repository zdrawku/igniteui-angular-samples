import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BulletGraphAnimationComponent } from "./bullet-graph-animation/bullet-graph-animation.component";
import { BulletGraphBackgroundComponent } from "./bullet-graph-background/bullet-graph-background.component";
import { BulletGraphLabelsComponent } from "./bullet-graph-labels/bullet-graph-labels.component";
import { BulletGraphMeasuresComponent } from "./bullet-graph-measures/bullet-graph-measures.component";
import { BulletGraphRangesComponent } from "./bullet-graph-ranges/bullet-graph-ranges.component";
import { BulletGraphScaleComponent } from "./bullet-graph-scale/bullet-graph-scale.component";
import { BulletGraphTickmarksComponent } from "./bullet-graph-tickmarks/bullet-graph-tickmarks.component";
import { gaugesRoutesGenerator } from "./gauges-routes";
import { LinearGaugeAnimationComponent } from "./linear-gauge-animation/linear-gauge-animation.component";
import { LinearGaugeBackingComponent } from "./linear-gauge-backing/linear-gauge-backing.component";
import { LinearGaugeLabelsComponent } from "./linear-gauge-labels/linear-gauge-labels.component";
import { LinearGaugeNeedleComponent } from "./linear-gauge-needle/linear-gauge-needle.component";
import { LinearGaugeRangesComponent } from "./linear-gauge-ranges/linear-gauge-ranges.component";
import { LinearGaugeScaleComponent } from "./linear-gauge-scale/linear-gauge-scale.component";
import { LinearGaugeTickmarksComponent } from "./linear-gauge-tickmarks/linear-gauge-tickmarks.component";
import { RadialGaugeAnimationComponent } from "./radial-gauge-animation/radial-gauge-animation.component";
import { RadialGaugeBackingComponent } from "./radial-gauge-backing/radial-gauge-backing.component";
import { RadialGaugeLabelsComponent } from "./radial-gauge-labels/radial-gauge-labels.component";
import { RadialGaugeNeedleComponent } from "./radial-gauge-needle/radial-gauge-needle.component";
import { RadialGaugeRangesComponent } from "./radial-gauge-ranges/radial-gauge-ranges.component";
import { RadialGaugeScaleComponent } from "./radial-gauge-scale/radial-gauge-scale.component";
import { RadialGaugeTickmarksComponent } from "./radial-gauge-tickmarks/radial-gauge-tickmarks.component";

export const gaugesRoutes: Routes = [
    gaugesRoutesGenerator("bullet-graph-animation", BulletGraphAnimationComponent),
    gaugesRoutesGenerator("bullet-graph-labels", BulletGraphLabelsComponent),
    gaugesRoutesGenerator("bullet-graph-background", BulletGraphBackgroundComponent),
    gaugesRoutesGenerator("bullet-graph-ranges", BulletGraphRangesComponent),
    gaugesRoutesGenerator("bullet-graph-scale", BulletGraphScaleComponent),
    gaugesRoutesGenerator("bullet-graph-tickmarks", BulletGraphTickmarksComponent),
    gaugesRoutesGenerator("bullet-graph-measures", BulletGraphMeasuresComponent),
    gaugesRoutesGenerator("radial-gauge-animation", RadialGaugeAnimationComponent),
    gaugesRoutesGenerator("radial-gauge-labels", RadialGaugeLabelsComponent),
    gaugesRoutesGenerator("radial-gauge-needle", RadialGaugeNeedleComponent),
    gaugesRoutesGenerator("radial-gauge-scale", RadialGaugeScaleComponent),
    gaugesRoutesGenerator("radial-gauge-tickmarks", RadialGaugeTickmarksComponent),
    gaugesRoutesGenerator("radial-gauge-ranges", RadialGaugeRangesComponent),
    gaugesRoutesGenerator("radial-gauge-backing", RadialGaugeBackingComponent),
    gaugesRoutesGenerator("linear-gauge-animation", LinearGaugeAnimationComponent),
    gaugesRoutesGenerator("linear-gauge-needle", LinearGaugeNeedleComponent),
    gaugesRoutesGenerator("linear-gauge-backing", LinearGaugeBackingComponent),
    gaugesRoutesGenerator("linear-gauge-labels", LinearGaugeLabelsComponent),
    gaugesRoutesGenerator("linear-gauge-scale", LinearGaugeScaleComponent),
    gaugesRoutesGenerator("linear-gauge-tickmarks", LinearGaugeTickmarksComponent),
    gaugesRoutesGenerator("linear-gauge-ranges", LinearGaugeRangesComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(gaugesRoutes)
    ]
})
export class GaugesRoutingModule {}
