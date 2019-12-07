import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";

export enum StyleFormatType {
    NUMERIC = "number",
    TEXT = "string",
    COMPOSITE = "composite"
}
export interface IRangeData {
    formatType: StyleFormatType;
    maxValue?: number;
    valueForComparison?: string;
    numericData?: number[];
    textData?: string[];
    style?: any;
}
export class RangeCache {

    public repository = new  Map<string, IRangeData>();
    constructor() {
    }

    // tslint:disable-next-line: max-line-length
    public add(range: GridSelectionRange, formatType: StyleFormatType,  numericData: number[], textData: string[], maxValue?: number, valueForComparison?: string) {
        const rangeString = JSON.stringify(range);

        if (this.repository.has(rangeString)) {
            return;
        }

        const data: IRangeData = {
            formatType,
            numericData,
            textData,
            maxValue,
            valueForComparison
        };
        console.log(data);
        this.repository.set(rangeString, data);
    }

    public getRangeValueForComparison(range) {
        return this.repository.get(range).valueForComparison;
    }

    public getRangeMaxValue(range) {
        return this.repository.get(range).maxValue;
    }

    public getRangeFormatType(range) {
        return this.repository.get(range).formatType;
    }

    public getRangeAvgValue(range) {
        const rangeData = this.repository.get(range);
        return Math.floor((rangeData.numericData.reduce((a, b) => a + b, 0)) / rangeData.numericData.length);
    }

    public addStyleToRange(range, style) {
        this.repository.get(range).style = style;
    }

    public getStyle(range): any {
        return this.repository.get(range).style;
    }

    public hasRangeStyle(range): boolean {
        return this.getStyle(range) !== undefined;
    }

    public hasRange(range) {
        const iterator = this.repository.keys();
        let isRangeInCache = false;

        for (let head = iterator.next().value; head !== undefined; head = iterator.next().value) {
            if (head === range) {
                isRangeInCache =  true;
            }
        }
        return isRangeInCache;
    }

    public getCellRange(rowIndex, colIndex) {
        const iterator = this.repository.keys();
        for (let head = iterator.next().value; head !== undefined; head = iterator.next().value) {
            const range = JSON.parse(head);
            if (rowIndex >= range.rowStart &&
                rowIndex <= range.rowEnd &&
                colIndex >= range.columnStart &&
                colIndex <= range.columnEnd) {
                    return head;
                }
        }
        return undefined;
    }

}
