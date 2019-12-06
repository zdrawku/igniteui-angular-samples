import { AfterViewInit, Directive, EventEmitter, Inject, Input, NgZone, Output } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";
import { RangeCache } from "./range-cache";

export enum CellFormatType {
    NUMERIC = "number",
    TEXT = "string",
    COMPOSITE = "composite"
}

@Directive({
    selector: "[conditionalFormating]"
})
export class ConditionalFormatingDirective {

    public set range(range: GridSelectionRange) {
        if (range) {

            let val;
            const formattersName = ["Duplicate Values", "Unique Values", "Empty Values"];
            let selectedData;
            if (this.grid.getSelectedData().length > 1) {
                selectedData = this.grid.getSelectedData().reduce((accumulator, currentValue) => {
                    return Object.values(accumulator).concat(Object.values(currentValue));
                });
            } else {
                selectedData = Object.values(this.grid.getSelectedData()[0]);
            }

            this._selectedData = selectedData;
            this.zone.runOutsideAngular(() => {

                // tslint:disable: max-line-length
                this._numericData = selectedData.filter(value => typeof value === "number");
                this._textData = selectedData.filter(value => typeof value === "string");
                if (this._numericData.length === 0) {
                    this.formatType = CellFormatType.TEXT;
                    val = this._textData[0];
                    formattersName.splice(0, 0, ...this._textFormatters);
                } else if (this._textData.length === 0) {
                    this.formatType = CellFormatType.NUMERIC;
                    val = Math.max(...this._numericData);
                    this._averageValue = this.getAvgValue(this._numericData);
                    formattersName.splice(0, 0, ...this._numericFormatters);
                } else {
                    this._valueForComparison = this._textData[0];
                    val = Math.max(...this._numericData);
                    this.formatType = CellFormatType.COMPOSITE;
                    this._averageValue = this.getAvgValue(this._numericData);
                    formattersName.splice(0, 0, "Data Bars", "Color Scale", "Text Contains");
                }
            });
            this.rangesCache.add(range, val);

            this.onFormattersReady.emit(formattersName);
        }

    }

    public rangesCache = new RangeCache();

    @Output()
    public onFormattersReady = new EventEmitter<string[]>();

    // public dataBars = {
    //     backgroundImage: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isWithingRange(rowIndex)) {
    //             return `linear-gradient(90deg, rgb(0, 194, 255) ${this.getPercentage(cellValue)}%, transparent 0%)`;
    //         }
    //     },
    //     backgroundSize: "90% 70%",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPositionY: "center"
    // };

    // public top10Percent = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isWithingRange(rowIndex) && cellValue > this._top10Value) {
    //             return this._top10Color;
    //         }
    //     }
    // };

    // public greaterThan = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isWithingRange(rowIndex) && cellValue > this._averageValue) {
    //             return this._averageColor;
    //         }
    //     }
    // };

    // public empty = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isWithingRange(rowIndex) && cellValue === undefined) {
    //             return this._errorColor;
    //         }
    //     }
    // };

    // public duplicates = {
    //     backgroundColor: (rowData, colname, cellValue, rowIndex) => {
    //         if (this.isWithingRange(rowIndex)) {
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

    private formatType;
    private _successColor = "rgba(78, 184, 98, .7)";
    private _warningColor = "rgba(251,177,60, .7)";
    private _errorColor = "rgba(255,19,74, .7)";
    private _top10Color = "rgb(78, 150, 98)";
    private _averageColor = "rgba(78, 184, 98, .5)";

    private _numericFormatters = ["Data Bars", "Color Scale", "Top 10%", "Greater Than"];
    private _textFormatters = ["Text Contains"];

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
        // this._formattersData.set("Data Bars", this.dataBars);
        // this._formattersData.set("Greater Than", this.greaterThan);
        // this._formattersData.set("Top 10%", this.top10Percent);
        // this._formattersData.set("Text Contains", this.textContains);
        // this._formattersData.set("Duplicate Values", this.duplicates);
        // this._formattersData.set("Unique Values", this.uniques);
        // this._formattersData.set("Empty Values", this.empty);

        this._formattersData.set("Color Scale", this.colorScale);

    }

    public colorScale(range, t) {

        const f1 = t.isWithingRange;
        const val = t.rangesCache.getMaxValue(JSON.stringify(range));
        const lowTresholdValue = t.lowTresholdValue(val);
        const middleTresholdValue = t.middleTresholdValue(val);
        const _errorColor = t._errorColor;
        const _warningColor = t._warningColor;
        const _successColor = t._successColor;
        const cache = t.rangesCache;
        const recursive = t.colorScale;
        const _this = t;
        return {
            backgroundColor: (rowData, colname, cellValue, rowIndex) => {
                if (f1(rowIndex, range)) {
                    console.log(rowIndex);
                    return lowTresholdValue >= cellValue ?  _errorColor :
                        middleTresholdValue >= cellValue ? _warningColor : _successColor;
                }
                if (cache.hasOtherRanges(JSON.stringify(range))) {
                    return  recursive(range, _this);
                }
            }
        };
    }
    public formatCells(formatterName) {
        const formatter = this._formattersData.get(formatterName);
        const formatType = this._numericFormatters.indexOf(formatterName) !== -1 ? CellFormatType.NUMERIC :
            this._textFormatters.indexOf(formatterName) !== - 1 ? CellFormatType.TEXT : CellFormatType.COMPOSITE;
        const iterable =  this.rangesCache.repository.keys();
        for (let head = iterable.next().value; head !== undefined; head = iterable.next().value) {
                    const range = JSON.parse(head);
                    console.log(range);
                    this.grid.visibleColumns.forEach(c => {
                            if (c.visibleIndex >= range.columnStart && c.visibleIndex <= range.columnEnd) {
                                this.applyFormatting(c, formatType, formatter, range);
                            }
                    });
            }
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

    private exec = fn => {
        const _this = this;
        return range => fn(range, _this);
    }

    private applyFormatting(column: IgxColumnComponent, type: CellFormatType, formatter: any, range) {
        if ((column.dataType as string) === (type as string) || type === CellFormatType.COMPOSITE) {
            const func = this.exec(formatter);
            column.cellStyles = func(range);
            this.grid.notifyChanges();
        }
    }

    private isWithingRange(rowId, range) {
        return rowId >= range.rowStart &&
            rowId <= range.rowEnd;
    }

    private middleTresholdValue(value) {
        return (66 * Math.floor(value)) / 100;
    }

    private lowTresholdValue(value) {
        return (33 * Math.floor(value)) / 100;
    }

    private top10PercentTreshold(value) {
        return (90 * Math.floor(value)) / 100;
    }

    private getAvgValue(data: number[]) {
        return Math.floor((data.reduce((a, b) => a + b, 0)) / data.length);
    }

    private getPercentage(of, from) {
        return (Math.ceil(of) / Math.ceil(from)) * 100;
    }
}
