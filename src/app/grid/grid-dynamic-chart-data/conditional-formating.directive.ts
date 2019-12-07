import { AfterViewInit, Directive, EventEmitter, Inject, Input, NgZone, Output } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";
import { IRangeData, RangeCache, StyleFormatType } from "./range-cache";

@Directive({
    selector: "[conditionalFormating]"
})
export class ConditionalFormatingDirective {

    public set range(range: GridSelectionRange) {
        if (range) {
            this._currentRange = range;
            this._maxValue = undefined;
            this._valueForComparison = undefined;
            this._numericData = undefined;
            this._textData = undefined;
            this._formatType = undefined;

            const formattersName = ["Duplicate Values", "Unique Values", "Empty Values"];
            let selectedData;
            if (this.grid.getSelectedData().length > 1) {
                selectedData = this.grid.getSelectedData().reduce((accumulator, currentValue) => {
                    return Object.values(accumulator).concat(Object.values(currentValue));
                });
            } else {
                selectedData = Object.values(this.grid.getSelectedData()[0]);
            }

            this.zone.runOutsideAngular(() => {

                // tslint:disable: max-line-length
                this._numericData = selectedData.filter(value => typeof value === "number");
                this._textData = selectedData.filter(value => typeof value === "string");
                if (this._numericData.length === 0) {
                    this._formatType = StyleFormatType.TEXT;
                    this._valueForComparison = this._textData[0];
                    formattersName.splice(0, 0, ...this._textFormatters);
                } else if (this._textData.length === 0) {
                    this._formatType = StyleFormatType.NUMERIC;
                    this._maxValue = Math.max(...this._numericData);
                    formattersName.splice(0, 0, ...this._numericFormatters);
                } else {
                    this._formatType = StyleFormatType.COMPOSITE;
                    this._valueForComparison = this._textData[0];
                    this._maxValue = Math.max(...this._numericData);
                    formattersName.splice(0, 0, "Data Bars", "Color Scale", "Text Contains");
                }
            });

            this.onFormattersReady.emit(formattersName);
        }

    }
    public rangesCache = new RangeCache();

    @Output()
    public onFormattersReady = new EventEmitter<string[]>();

    public colorScale = {
        name: "colorScale",
        value: {
            backgroundColor: (rowData, colname, cellValue, rowIndex) => {
                const range = this.getRange(rowIndex, colname);
                if (range && this.checkIfRangeHasDataBars(range)) {
                    return "";
                }
                if (range && this.rangesCache.getStyle(range).name !== "colorScale") {
                    return this.returnCachedStyle(this.rangesCache.getStyle(range).value, rowData, colname, cellValue, rowIndex);
                }
                if (range) {
                    return this.rangeLowTresholdValue(range) >= cellValue ? this._errorColor :
                        this.rangeMiddleTresholdValue(range) >= cellValue ? this._warningColor : this._successColor;
                }
            }
        }
    };

    public dataBars = {
        name: "dataBars",
        value: {
            backgroundImage: (rowData, colname, cellValue, rowIndex) => {
                const range = this.getRange(rowIndex, colname);
                if (range && !this.checkIfRangeHasDataBars(range)) {
                    return "";
                }
                if (range) {
                    return `linear-gradient(90deg, rgb(0, 194, 255) ${this.getPercentage(cellValue, this.getRangeMaxValue(range))}%, transparent 0%)`;
                }
            },
            backgroundSize: "90% 70%",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
            backgroundColor: (rowData, colname, cellValue, rowIndex) => {
                const range = this.getRange(rowIndex, colname);
                if (range && !this.checkIfRangeHasDataBars(range)) {
                    return this.returnCachedStyle(this.rangesCache.getStyle(range).value, rowData, colname, cellValue, rowIndex);
                }
            }
        }
    };

    public top10Percent = {
        name: "top10Percent",
        value: {
            backgroundColor: (rowData, colname, cellValue, rowIndex) => {
                const range = this.getRange(rowIndex, colname);
                if (range && this.checkIfRangeHasDataBars(range)) {
                    return "";
                }
                if (range && this.rangesCache.getStyle(range).name !== "top10Percent") {
                    return this.returnCachedStyle(this.rangesCache.getStyle(range).value, rowData, colname, cellValue, rowIndex);
                }
                if (range) {
                    return cellValue > this.top10PercentTreshold(range) ? this._top10Color : "rgb(255, 0, 0)";
                }
            }
        }
    };

    // public greaterThanAverage = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         const range = this.getRange(rowIndex, colname);
    //         if (range && cellValue >= this.getAvgValue(range)) {
    //             return this._averageColor;
    //         }
    //     }
    // };

    // public empty = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isCellWithinARange(rowIndex, colname) && cellValue === undefined) {
    //             return this._errorColor;
    //         }
    //     }
    // };

    // public duplicates = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isCellWithinARange(rowIndex, colname)) {
    //             const color = this.zone.runOutsideAngular(() => {
    //                 const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
    //                 return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ? this._warningColor : "";
    //             });
    //             return color;
    //         }
    //     }
    // };

    // public textContains = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isWithingRange(rowIndex) && cellValue.toLowerCase().indexOf(this._valueForComparison.toLowerCase()) !== -1) {
    //             return this._warningColor;
    //         }
    //     }
    // };

    // public uniques = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isWithingRange(rowIndex)) {
    //             const color = this.zone.runOutsideAngular(() => {
    //                 const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
    //                 return arr.indexOf(cellValue) === arr.lastIndexOf(cellValue) ? this._warningColor : "";
    //             });
    //             return color;
    //         }
    //     }
    // };

    private _successColor = "rgba(78, 184, 98, .7)";
    private _warningColor = "rgba(251,177,60, .7)";
    private _errorColor = "rgba(255,19,74, .7)";
    private _top10Color = "rgb(78, 150, 98)";
    private _averageColor = "rgba(78, 184, 98, .5)";

    private _numericFormatters = ["Data Bars", "Color Scale", "Top 10%", "Greater Than Average"];
    private _textFormatters = ["Text Contains"];

    private _currentRange;

    private _formatType;
    private _maxValue;
    private _valueForComparison;
    private _numericData;
    private _textData;

    private _formattersData = new Map<string, any>();

    private propertiesForCellsWithDataBarsStyle = {
        backgroundImage: (rowData, colname, cellValue, rowIndex) => {
            const range = this.getRange(rowIndex, colname);
            if (range && this.checkIfRangeHasDataBars(range)) {
                return `linear-gradient(90deg, rgb(0, 194, 255) ${this.getPercentage(cellValue, this.getRangeMaxValue(range))}%, transparent 0%)`;
            }
        },
        backgroundSize: (rowData, colname, cellValue, rowIndex) => {
            const range = this.getRange(rowIndex, colname);
            if (range && this.checkIfRangeHasDataBars(range)) {
                return "90% 70%";
            }
        },
        backgroundRepeat: (rowData, colname, cellValue, rowIndex) => {
            const range = this.getRange(rowIndex, colname);
            if (range && this.checkIfRangeHasDataBars(range)) {
                return "no-repeat";
            }
        },
        backgroundPositionY: (rowData, colname, cellValue, rowIndex) => {
            const range = this.getRange(rowIndex, colname);
            if (range && this.checkIfRangeHasDataBars(range)) {
                return "center";
            }
        }
    };

    constructor(@Inject(IgxGridComponent) public grid: IgxGridComponent, private zone: NgZone) {
        this.colorScale.value = { ...this.colorScale.value, ...this.propertiesForCellsWithDataBarsStyle };
        this.top10Percent.value = { ...this.top10Percent.value, ...this.propertiesForCellsWithDataBarsStyle };
        this._formattersData.set("Data Bars", this.dataBars);
        // this._formattersData.set("Greater Than", this.greaterThanAverate);
        this._formattersData.set("Top 10%", this.top10Percent);
        // this._formattersData.set("Text Contains", this.textContains);
        // this._formattersData.set("Duplicate Values", this.duplicates);
        // this._formattersData.set("Unique Values", this.uniques);
        // this._formattersData.set("Empty Values", this.empty);
        this._formattersData.set("Color Scale", this.colorScale);

    }

    public formatCells(formatterName) {
        this.rangesCache.add(this._currentRange, this._formatType, this._numericData, this._textData, this._maxValue, this._valueForComparison);
        const formatter = this._formattersData.get(formatterName);
        const formatType = this._numericFormatters.indexOf(formatterName) !== -1 ? StyleFormatType.NUMERIC :
            this._textFormatters.indexOf(formatterName) !== - 1 ? StyleFormatType.TEXT : StyleFormatType.COMPOSITE;
        this.grid.visibleColumns.forEach(c => {
            if (c.visibleIndex >= this._currentRange.columnStart && c.visibleIndex <= this._currentRange.columnEnd) {
                this.applyFormatting(c, formatType, formatter);
            }
        });
    }

    public clearFormatting() {
        this.grid.visibleColumns.forEach(c => {
            c.cellStyles = null;
            this.grid.notifyChanges();
        });
    }

    public removeFormatting(column) {
        column.cellStyles = null;
        this.grid.notifyChanges();
    }

    private applyFormatting(column: IgxColumnComponent, type: StyleFormatType, formatter: any) {
        if ((column.dataType as string) === (type as string) || type === StyleFormatType.COMPOSITE) {
            if (!this.rangesCache.hasRangeStyle(JSON.stringify(this._currentRange))) {
                this.rangesCache.addStyleToRange(JSON.stringify(this._currentRange), formatter);
            }
            column.cellStyles = { ...formatter.value };
            this.grid.notifyChanges();
        }
    }

    private getValueForComparison(range) {
        return this.rangesCache.getRangeValueForComparison(range);
    }

    private getRangeMaxValue(range) {
        return this.rangesCache.getRangeMaxValue(range);
    }
    private getRange(rowIndex, columnName) {
        const colIndex = this.grid.visibleColumns.find(c => c.field === columnName).visibleIndex;
        return this.rangesCache.getCellRange(rowIndex, colIndex);
    }

    private rangeMiddleTresholdValue(range) {
        const maxValue = this.rangesCache.getRangeMaxValue(range);
        return (66 * Math.floor(maxValue)) / 100;
    }

    private rangeLowTresholdValue(range) {
        const maxValue = this.rangesCache.getRangeMaxValue(range);
        return (33 * Math.floor(maxValue)) / 100;
    }

    private top10PercentTreshold(range) {
        const maxValue = this.rangesCache.getRangeMaxValue(range);
        return (90 * Math.floor(maxValue)) / 100;
    }

    private getAvgValue(range) {
        return this.rangesCache.getRangeAvgValue(range);
    }

    private getPercentage(of, from) {
        const res = (Math.ceil(of) / Math.ceil(from)) * 100;
        return res < 1 ? 1 : res;
    }

    private returnCachedStyle(style, rowData, colname, cellValue, rowIndex) {
        return style["backgroundColor"](rowData, colname, cellValue, rowIndex);

    }

    private checkIfRangeHasDataBars(range): boolean {
        return this.rangesCache.getStyle(range).name === "dataBars";
    }
}
