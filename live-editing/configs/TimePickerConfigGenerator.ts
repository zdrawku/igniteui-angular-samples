/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxIconModule, IgxInputGroupModule, IgxTimePickerModule, IgxToastModule } from "igniteui-angular";
import { TimepickerDropdownComponent } from "../../src/app/scheduling/timepicker/timepicker-dropdown/timepicker-dropdown.component";
import { TimePickerSample1Component } from "../../src/app/scheduling/timepicker/timepicker-sample-1/timepicker-sample-1.component";
import { TimePickerSample2Component } from "../../src/app/scheduling/timepicker/timepicker-sample-2/timepicker-sample-2.component";
import { TimePickerSample3Component } from "../../src/app/scheduling/timepicker/timepicker-sample-3/timepicker-sample-3.component";
import { TimePickerSample4Component } from "../../src/app/scheduling/timepicker/timepicker-sample-4/timepicker-sample-4.component";
import { TimePickerSample5Component } from "../../src/app/scheduling/timepicker/timepicker-sample-5/timepicker-sample-5.component";
import { TimePickerSample6Component } from "../../src/app/scheduling/timepicker/timepicker-sample-6/timepicker-sample-6.component";
import { TimePickerSample7Component } from "../../src/app/scheduling/timepicker/timepicker-sample-7/timepicker-sample-7.component";
import { TimePickerSample8Component } from "../../src/app/scheduling/timepicker/timepicker-sample-8/timepicker-sample-8.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

// tslint:enable:max-line-length

export class TimePickerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // time picker sample 1
        configs.push(new Config({
            component: TimePickerSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, TimePickerSample1Component],
                ngDeclarations: [TimePickerSample1Component],
                ngImports: [IgxTimePickerModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 2
        configs.push(new Config({
            component: TimePickerSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, TimePickerSample2Component],
                ngDeclarations: [TimePickerSample2Component],
                ngImports: [IgxTimePickerModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 3
        configs.push(new Config({
            component: TimePickerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, TimePickerSample3Component],
                ngDeclarations: [TimePickerSample3Component],
                ngImports: [IgxTimePickerModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 4
        configs.push(new Config({
            component: TimePickerSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, IgxToastModule, TimePickerSample4Component],
                ngDeclarations: [TimePickerSample4Component],
                ngImports: [IgxTimePickerModule, IgxToastModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 5
        configs.push(new Config({
            component: TimePickerSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule, TimePickerSample5Component],
                ngDeclarations: [TimePickerSample5Component],
                ngImports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 6
        configs.push(new Config({
            component: TimePickerSample6Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule, TimePickerSample6Component],
                ngDeclarations: [TimePickerSample6Component],
                ngImports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker dropdown sample
        configs.push(new Config({
            component: TimepickerDropdownComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule, TimepickerDropdownComponent],
                ngDeclarations: [TimepickerDropdownComponent],
                ngImports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        configs.push(new Config({
            component: TimePickerSample7Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule, TimePickerSample7Component],
                ngDeclarations: [TimePickerSample7Component],
                ngImports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        configs.push(new Config({
            component: TimePickerSample8Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule, TimePickerSample8Component],
                ngDeclarations: [TimePickerSample8Component],
                ngImports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        return configs;
    }
}
