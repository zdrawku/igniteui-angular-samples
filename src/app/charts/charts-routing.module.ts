import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    CategoryChartAnnotationsComponent
} from "./category-chart/annotations/category-chart-annotations.component";
import {
    CategoryChartAxisOptionsComponent
} from "./category-chart/axis-options/category-chart-axis-options-sample.component";
import { CategoryChartPerformanceSamplesModule } from "./category-chart/category-chart-performance-samples.module";
import { CategoryChartSamplesModule } from "./category-chart/category-chart-samples.module";
import {
    CategoryChartConfigOptionsComponent
} from "./category-chart/config-options/category-chart-config-options-sample.component";
import {
    CategoryChartHighFrequencyComponent
} from "./category-chart/high-frequency/category-chart-high-frequency-sample.component";
import {
    CategoryChartHighVolumeComponent
} from "./category-chart/high-volume/category-chart-high-volume-sample.component";
import {
    CategoryChartHighlightingComponent
} from "./category-chart/highlighting/category-chart-highlighting.component";
import {
    CategoryChartOverlapColumnsComponent
} from "./category-chart/overlap-columns/category-chart-overlap-columns.component";
import {
    CategoryChartOverviewComponent
} from "./category-chart/overview/category-chart-overview-sample.component";
import {
    CategoryChartTooltipTemplateComponent
} from "./category-chart/tooltip-template/category-chart-tooltip-template.component";
import {
    CategoryChartTooltipTypesComponent
} from "./category-chart/tooltip-types/category-chart-tooltip-types.component";
import {
    CategoryChartTrendlinesComponent
} from "./category-chart/trendline/category-chart-trendlines.component";
import { chartsRoutesGenerator } from "./charts-routes";
import {
    DoughnutChartExplosionSampleComponent
} from "./doughnut-chart/doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import {
    DoughnutChartOverviewSampleComponent
} from "./doughnut-chart/doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
import { DoughnutChartSamplesModule } from "./doughnut-chart/doughnut-chart-samples.module";
import {
    DoughnutChartSelectionSampleComponent
} from "./doughnut-chart/doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";
import {
    FinancialChartAnnotationsComponent
} from "./financial-chart/annotations/financial-chart-annotations.component";
import {
    FinancialChartAxisTypesComponent
} from "./financial-chart/axis-types/financial-chart-axis-types.component";
import {
    FinancialChartCustomIndicatorsComponent
} from "./financial-chart/custom-indicators/financial-chart-custom-indicators.component";
import { FinancialChartSamplesModule } from "./financial-chart/financial-chart-samples.module";
import {
    FinancialChartHighFrequencyComponent
} from "./financial-chart/high-frequency/financial-chart-high-frequency.component";
import {
    FinancialChartHighVolumeComponent
} from "./financial-chart/high-volume/financial-chart-high-volume.component";
import {
    FinancialChartIndicatorTypesComponent
} from "./financial-chart/indicator-types/financial-chart-indicator-types.component";
import {
    FinancialChartMultipleDataComponent
} from "./financial-chart/multiple-data/financial-chart-multiple-data.component";
import {
    FinancialChartMultipleFeedsComponent
} from "./financial-chart/multiple-feeds/financial-chart-multiple-feeds.component";
import {
    FinancialChartOverviewComponent
} from "./financial-chart/overview/financial-chart-overview-sample.component";
import {
    FinancialChartPanesComponent
} from "./financial-chart/panes/financial-chart-panes.component";
import {
    FinancialChartPerformanceComponent
} from "./financial-chart/performance/financial-chart-performance.component";
import {
    FinancialChartTimeBasedDataComponent
} from "./financial-chart/time-based-data/financial-chart-time-based-data.component";
import {
    FinancialChartTitlesComponent
} from "./financial-chart/titles/financial-chart-titles.component";
import {
    FinancialChartTooltipTemplateComponent
} from "./financial-chart/tooltip-template/financial-chart-tooltip-template.component";
import {
    FinancialChartTooltipTypesComponent
} from "./financial-chart/tooltip-types/financial-chart-tooltip-types.component";
import {
    FinancialChartTrendlinesComponent
} from "./financial-chart/trendlines/financial-chart-trendlines.component";
import {
    FinancialChartVolumeTypeComponent
} from "./financial-chart/volume-type/financial-chart-volume-type.component";
import { PieChartDataSampleComponent } from "./pie-chart/pie-chart-data-sample/pie-chart-data-sample.component";
import { PieChartExplosionComponent } from "./pie-chart/pie-chart-explosion/pie-chart-explosion.component";
import { PieChartLegendComponent } from "./pie-chart/pie-chart-legend/pie-chart-legend.component";
import { PieChartOthersComponent } from "./pie-chart/pie-chart-others/pie-chart-others.component";
import { PieChartSamplesModule } from "./pie-chart/pie-chart-samples.module";
import { PieChartSelectionComponent } from "./pie-chart/pie-chart-selection/pie-chart-selection.component";

export const chartsRoutes: Routes = [
    chartsRoutesGenerator("doughnut-chart-explosion", DoughnutChartExplosionSampleComponent),
    chartsRoutesGenerator("doughnut-chart-overview", DoughnutChartOverviewSampleComponent),
    chartsRoutesGenerator("doughnut-chart-selection", DoughnutChartSelectionSampleComponent),
    chartsRoutesGenerator("pie-chart-data-sample", PieChartDataSampleComponent),
    chartsRoutesGenerator("pie-chart-explosion", PieChartExplosionComponent),
    chartsRoutesGenerator("pie-chart-legend", PieChartLegendComponent),
    chartsRoutesGenerator("pie-chart-others", PieChartOthersComponent),
    chartsRoutesGenerator("pie-chart-selection", PieChartSelectionComponent),
    chartsRoutesGenerator("category-chart-overview-sample", CategoryChartOverviewComponent),
    chartsRoutesGenerator("category-chart-annotations", CategoryChartAnnotationsComponent),
    chartsRoutesGenerator("category-chart-overlap-columns", CategoryChartOverlapColumnsComponent),
    chartsRoutesGenerator("category-chart-highlighting-sample", CategoryChartHighlightingComponent),
    chartsRoutesGenerator("category-chart-high-volume-sample", CategoryChartHighVolumeComponent),
    chartsRoutesGenerator("category-chart-high-frequency-sample", CategoryChartHighFrequencyComponent),
    chartsRoutesGenerator("category-chart-axis-options-sample", CategoryChartAxisOptionsComponent),
    chartsRoutesGenerator("category-chart-config-options-sample", CategoryChartConfigOptionsComponent),
    chartsRoutesGenerator("category-chart-tooltip-template", CategoryChartTooltipTemplateComponent),
    chartsRoutesGenerator("category-chart-tooltip-types", CategoryChartTooltipTypesComponent),
    chartsRoutesGenerator("category-chart-trendline", CategoryChartTrendlinesComponent),
    chartsRoutesGenerator("financial-chart-overview-sample", FinancialChartOverviewComponent),
    chartsRoutesGenerator("financial-chart-performance", FinancialChartPerformanceComponent),
    chartsRoutesGenerator("financial-chart-annotations", FinancialChartAnnotationsComponent),
    chartsRoutesGenerator("financial-chart-titles", FinancialChartTitlesComponent),
    chartsRoutesGenerator("financial-chart-panes", FinancialChartPanesComponent),
    chartsRoutesGenerator("financial-chart-multiple-data", FinancialChartMultipleDataComponent),
    chartsRoutesGenerator("financial-chart-multiple-feeds", FinancialChartMultipleFeedsComponent),
    chartsRoutesGenerator("financial-chart-indicator-types", FinancialChartIndicatorTypesComponent),
    chartsRoutesGenerator("financial-chart-volume-type", FinancialChartVolumeTypeComponent),
    chartsRoutesGenerator("financial-chart-custom-indicators", FinancialChartCustomIndicatorsComponent),
    chartsRoutesGenerator("financial-chart-high-volume", FinancialChartHighVolumeComponent),
    chartsRoutesGenerator("financial-chart-high-frequency", FinancialChartHighFrequencyComponent),
    chartsRoutesGenerator("financial-chart-axis-types", FinancialChartAxisTypesComponent),
    chartsRoutesGenerator("financial-chart-tooltip-template", FinancialChartTooltipTemplateComponent),
    chartsRoutesGenerator("financial-chart-tooltip-types", FinancialChartTooltipTypesComponent),
    chartsRoutesGenerator("financial-chart-time-based-data", FinancialChartTimeBasedDataComponent),
    chartsRoutesGenerator("financial-chart-trendlines", FinancialChartTrendlinesComponent)
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        CategoryChartSamplesModule.forRoot(),
        CategoryChartPerformanceSamplesModule.forRoot(),
        FinancialChartSamplesModule.forRoot(),
        PieChartSamplesModule.forRoot(),
        DoughnutChartSamplesModule.forRoot(),
        RouterModule.forChild(chartsRoutes)
    ]
})
export class ChartsRoutingModule { }
