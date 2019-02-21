/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import { FinancialChartAnnotationsComponent } from "../../src/app/charts/financial-chart/annotations/financial-chart-annotations.component";
import { FinancialChartAxisTypesComponent } from "../../src/app/charts/financial-chart/axis-types/financial-chart-axis-types.component";
import { FinancialChartCustomIndicatorsComponent } from "../../src/app/charts/financial-chart/custom-indicators/financial-chart-custom-indicators.component";
import { FinancialChartHighFrequencyComponent} from "../../src/app/charts/financial-chart/high-frequency/financial-chart-high-frequency.component";
import { FinancialChartHighVolumeComponent} from "../../src/app/charts/financial-chart/high-volume/financial-chart-high-volume.component";
import { FinancialChartIndicatorTypesComponent} from "../../src/app/charts/financial-chart/indicator-types/financial-chart-indicator-types.component";
import { FinancialChartMultipleDataComponent} from "../../src/app/charts/financial-chart/multiple-data/financial-chart-multiple-data.component";
import { FinancialChartOverviewComponent} from "../../src/app/charts/financial-chart/overview/financial-chart-overview-sample.component";
import { FinancialChartPanesComponent } from "../../src/app/charts/financial-chart/panes/financial-chart-panes.component";
import { FinancialChartPerformanceComponent } from "../../src/app/charts/financial-chart/performance/financial-chart-performance.component";
import { FinancialDataService } from "../../src/app/charts/financial-chart/services/financial-data.service";
import { GenerateHourlyPricesService } from "../../src/app/charts/financial-chart/services/generate-hourly-prices.service";
import { GenerateOhlcPricesService } from "../../src/app/charts/financial-chart/services/generate-ohlc-prices.service";
import { StockDataService } from "../../src/app/charts/financial-chart/services/stock-data.service";
import { FinancialChartTitlesComponent } from "../../src/app/charts/financial-chart/titles/financial-chart-titles.component";
import { FinancialChartTooltipTemplateComponent} from "../../src/app/charts/financial-chart/tooltip-template/financial-chart-tooltip-template.component";
import { FinancialChartTooltipTypesComponent} from "../../src/app/charts/financial-chart/tooltip-types/financial-chart-tooltip-types.component";
import { FinancialChartTrendlinesComponent} from "../../src/app/charts/financial-chart/trendlines/financial-chart-trendlines.component";
import { FinancialChartVolumeTypeComponent} from "../../src/app/charts/financial-chart/volume-type/financial-chart-volume-type.component";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
// tslint:enable:max-line-length

export class FinancialChartConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: FinancialChartTooltipTemplateComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartTooltipTemplateComponent, FinancialDataService],
                ngDeclarations: [FinancialChartTooltipTemplateComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartTooltipTypesComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartTooltipTypesComponent, FinancialDataService],
                ngDeclarations: [FinancialChartTooltipTypesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartAnnotationsComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartAnnotationsComponent, FinancialDataService],
                ngDeclarations: [FinancialChartAnnotationsComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartMultipleDataComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartMultipleDataComponent, FinancialDataService],
                ngDeclarations: [FinancialChartMultipleDataComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartOverviewComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/generate-ohlc-prices.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartOverviewComponent, GenerateOhlcPricesService],
                ngDeclarations: [FinancialChartOverviewComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartPanesComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/stock-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartPanesComponent, StockDataService],
                ngDeclarations: [FinancialChartPanesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartPerformanceComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/generate-ohlc-prices.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartPerformanceComponent, GenerateOhlcPricesService],
                ngDeclarations: [FinancialChartPerformanceComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartTitlesComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/stock-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartTitlesComponent, StockDataService],
                ngDeclarations: [FinancialChartTitlesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        ///////////////////////////////////////////////////////////////////////////////////////

        configs.push(new Config({
            component: FinancialChartAxisTypesComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartAxisTypesComponent, FinancialDataService],
                ngDeclarations: [FinancialChartAxisTypesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartCustomIndicatorsComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartCustomIndicatorsComponent, FinancialDataService],
                ngDeclarations: [FinancialChartCustomIndicatorsComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartHighFrequencyComponent,
            additionalFiles: [],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartHighFrequencyComponent],
                ngDeclarations: [FinancialChartHighFrequencyComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartHighVolumeComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/generate-hourly-prices.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartHighVolumeComponent, GenerateHourlyPricesService],
                ngDeclarations: [FinancialChartHighVolumeComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartIndicatorTypesComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartIndicatorTypesComponent, FinancialDataService],
                ngDeclarations: [FinancialChartIndicatorTypesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartTrendlinesComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartTrendlinesComponent, FinancialDataService],
                ngDeclarations: [FinancialChartTrendlinesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: FinancialChartVolumeTypeComponent,
            additionalFiles: ["/src/app/charts/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartVolumeTypeComponent, FinancialDataService],
                ngDeclarations: [FinancialChartVolumeTypeComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        return configs;
    }
}
