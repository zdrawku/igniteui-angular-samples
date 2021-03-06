import { AfterViewInit, Directive, EventEmitter, Inject, Input, NgZone, Output } from "@angular/core";
import { IgxColumnComponent, IgxGridCellComponent, IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";

export enum CellFormatType {
    NUMERIC = "number",
    TEXT = "string",
    COMPOSITE = "composite"
}

@Directive({
    selector: "[conditionalFormatting]"
})
export class ConditionalFormattingDirective {

    public set range(range: GridSelectionRange) {
        if (range) {
            this._range = range;
            this.ensureValues();
        }
    }

    public get range() {
        return this._range;
    }

    @Output()
    public onFormattersReady = new EventEmitter<string[]>();

    public colorScale = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
            }
            if (this.isWithingRange(rowIndex)) {
                return this._errorValue >= cellValue ? this._errorColor :
                    this._warnValue >= cellValue ? this._warningColor : this._successColor;
            }
        }
    };

    public dataBars = {
        backgroundImage: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
            }
            if (this.isWithingRange(rowIndex)) {
                const treshold = this.setTreshold(this._minValue);
                let gradientPercents;
                if (cellValue < 0) {
                    const negativeStartingPoint = 100 - treshold;
                    gradientPercents = this.getNegativePercentage(cellValue);
                    // tslint:disable: max-line-length
                    return `linear-gradient(to left, transparent 0% ${negativeStartingPoint}%, ${this._errorColor} ${negativeStartingPoint}% ${negativeStartingPoint + gradientPercents}%, transparent ${gradientPercents}% 100%)`;
                } else {
                    gradientPercents = this.getPositivePercentage(cellValue);
                    return `linear-gradient(to right, transparent 0% ${treshold}%, ${this._successColor} ${treshold}% ${treshold + gradientPercents}%, transparent ${treshold + gradientPercents}% 100%)`;
                }
            }
        },
        backgroundSize: "100% 80%",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center"
    };

    public top10Percent = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
            }
            if (this.isWithingRange(rowIndex) && cellValue > this._top10Value) {
                return this._infoColor;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
            }
            if (this.isWithingRange(rowIndex) && cellValue > this._top10Value) {
                return "#FFF";
            }
        }
    };

    public greaterThan = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
            }
            if (this.isWithingRange(rowIndex) && cellValue > this._averageValue) {
                return this._infoColor;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
            }
            if (this.isWithingRange(rowIndex) && cellValue > this._averageValue) {
                return "#FFF";
            }
        }
    };

    public empty = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue === undefined) {
                return this._infoColor;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue === undefined) {
                return "#FFF";
            }
        }
    };

    public duplicates = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ? this._infoColor : "";
                });
                return color;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ? "#FFF" : "";
                });
                return color;
            }
        }
    };

    public textContains = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "string") {
                return;
            }
            if (this.isWithingRange(rowIndex) && cellValue.toLowerCase().indexOf(this._valueForComparison.toLowerCase()) !== -1) {
                return this._infoColor;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "string") {
                return;
            }
            if (this.isWithingRange(rowIndex) && cellValue.toLowerCase().indexOf(this._valueForComparison.toLowerCase()) !== -1) {
                return "#FFF";
            }
        }
    };

    public uniques = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) === arr.lastIndexOf(cellValue) ? this._infoColor : "";
                });
                return color;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) === arr.lastIndexOf(cellValue) ? "#FFF" : "";
                });
                return color;
            }
        }
    };

    private formatType;
    private _successColor = "#4EB862";
    private _warningColor = "#FBB13C";
    private _errorColor = "#FF134A";
    private _infoColor = "#1377D5";
    private _numericFormatters = ["Data Bars", "Color Scale", "Top 10", "Greater Than"];
    private _textFormatters = ["Text Contains"];

    private _minValue;
    private _top10Value;
    private _errorValue;
    private _warnValue;
    private _averageValue;
    private _range: GridSelectionRange;
    private _maxValue;
    private _selectedData;
    private _numericData;
    private _textData;
    private _valueForComparison;
    private _formattersData = new Map<string, any>();

    constructor(@Inject(IgxGridComponent) public grid: IgxGridComponent, private zone: NgZone) {
        this._formattersData.set("Data Bars", this.dataBars);
        this._formattersData.set("Color Scale", this.colorScale);
        this._formattersData.set("Greater Than", this.greaterThan);
        this._formattersData.set("Top 10", this.top10Percent);
        this._formattersData.set("Text Contains", this.textContains);
        this._formattersData.set("Duplicate Values", this.duplicates);
        this._formattersData.set("Unique Values", this.uniques);
        this._formattersData.set("Empty", this.empty);
    }

    public formatCells(formatterName) {
        this.clearFormatting();
        const formatter = this._formattersData.get(formatterName);
        const formatType = this._numericFormatters.indexOf(formatterName) !== -1 ? CellFormatType.NUMERIC :
            this._textFormatters.indexOf(formatterName) !== - 1 ? CellFormatType.TEXT : CellFormatType.COMPOSITE;
        this.grid.visibleColumns.forEach(c => {
            if (c.visibleIndex >= this.range.columnStart && c.visibleIndex <= this.range.columnEnd) {
                this.applyFormatting(c, formatType, formatter);
            }
        });
    }

    public clearFormatting() {
        this.grid.visibleColumns.forEach(c => {
            c.cellStyles = undefined;
            this.grid.cdr.detectChanges();
        });
    }

    public ensureValues() {
        this._valueForComparison = undefined;
        this._maxValue = undefined;
        this._minValue = undefined;
        this.formatType = undefined;
        this._warnValue = undefined;
        this._errorValue = undefined;
        this._top10Value = undefined;
        this._averageValue = undefined;
        this._textData = [];
        this._numericData = [];
        let maxValue;
        let minValue;
        const gridSelectedData = this.grid.getSelectedData();
        let selectedData;

        if (gridSelectedData.length < 2) {
            selectedData = Object.values(gridSelectedData[0]);
        } else {
            selectedData = gridSelectedData.reduce((accumulator, currentValue) => {
                return Object.values(accumulator).concat(Object.values(currentValue));
            });
        }

        this.zone.runOutsideAngular(() => {

            // tslint:disable: max-line-length
            this._numericData = selectedData.filter(value => typeof value === "number");
            this._textData = selectedData.filter(value => typeof value === "string");
            if (this._numericData.length === 0) {
                this.formatType = CellFormatType.TEXT;
                this._valueForComparison = this._textData[0];
            } else if (this._textData.length === 0) {
                this.formatType = CellFormatType.NUMERIC;
                maxValue = Math.max(...this._numericData);
                minValue = Math.min(...this._numericData.filter(value => value < 0)) | 0;
                this._maxValue = maxValue;
                this._minValue = minValue;
                this._warnValue = this.middleTresholdValue();
                this._errorValue = this.lowTresholdValue();
                this._top10Value = this.top10PercentTreshold();
                this._averageValue = this.getAvgValue(this._numericData);
            } else {
                this._valueForComparison = this._textData[0];
                maxValue = Math.max(...this._numericData);
                minValue = Math.min(...this._numericData.filter(value => value < 0)) | 0;
                this._maxValue = maxValue;
                this._minValue = minValue;
                this.formatType = CellFormatType.COMPOSITE;
                this._warnValue = this.middleTresholdValue();
                this._errorValue = this.lowTresholdValue();
                this._top10Value = this.top10PercentTreshold();
                this._averageValue = this.getAvgValue(this._numericData);
            }
        });
    }

    public determineFormatters() {
        const gridSelectedData = this.grid.getSelectedData();
        let selectedData;

        if (gridSelectedData.length < 2) {
            selectedData = Object.values(gridSelectedData[0]);
        } else {
            selectedData = gridSelectedData.reduce((accumulator, currentValue) => {
                return Object.values(accumulator).concat(Object.values(currentValue));
            });
        }
        const commonFormattersName = ["Duplicate Values", "Unique Values", "Empty"];
        const numericValues = selectedData.filter(value => typeof value === "number");
        const textData = selectedData.filter(value => typeof value === "string");

        if (numericValues.length === 0 && textData.length > 0) {

            commonFormattersName.splice(0, 0, ...this._textFormatters);
        } else if (numericValues.length > 0 && textData.length === 0) {
            commonFormattersName.splice(0, 0, ...this._numericFormatters);
        } else {
            commonFormattersName.splice(0, 0, "Data Bars", "Color Scale", "Text Contains");
        }
        this.onFormattersReady.emit(commonFormattersName);
    }

    private applyFormatting(column: IgxColumnComponent, type: CellFormatType, formatter: any) {
        if ((column.dataType as string) === (type as string) || type === CellFormatType.COMPOSITE) {
            column.cellStyles = formatter;
            this.grid.notifyChanges();
        }
    }

    private isWithingRange(rowId) {
        return rowId >= this.range.rowStart &&
            rowId <= this.range.rowEnd;
    }

    private middleTresholdValue() {
        return (66 * Math.ceil(this._maxValue)) / 100;
    }

    private lowTresholdValue() {
        return (33 * Math.ceil(this._maxValue)) / 100;
    }

    private top10PercentTreshold() {
        return (90 * Math.ceil(this._maxValue)) / 100;
    }

    private getAvgValue(data: number[]) {
        return Math.ceil((data.reduce((a, b) => a + b, 0)) / data.length);
    }

    private getPercentage(val) {

    }

    private getPositivePercentage(val) {
        const result = (Math.ceil(val) / (this._maxValue + Math.abs(this._minValue))) * 100;
        // return Math.max(result, 1);
        return Math.ceil(result);
    }

    private getNegativePercentage(val) {
        const result = (Math.abs(val) / (this._maxValue + Math.abs(this._minValue))) * 100;
        // return Math.max(result, 1);
        return Math.ceil(result);
    }

    private setTreshold(value) {
        return Math.ceil((Math.abs(value) / (this._maxValue + Math.abs(this._minValue))) * 100);
    }
}
