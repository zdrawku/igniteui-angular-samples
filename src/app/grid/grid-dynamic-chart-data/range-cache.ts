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
        this.repository.set(rangeString, data);
    }

    public removeRange(range) {
        for (const r of this.getInnerRange(range)) {
            this.repository.delete(r);
        }

        if (this.hasRange(JSON.stringify(range))) {
            this.repository.delete(JSON.stringify(range));
        }
    }

    public getRangeValueForComparison(range) {
        return this.repository.get(range).valueForComparison;
    }

    public getRangeMaxValue(range) {
        return this.repository.get(range).maxValue;
    }

    public getNumericData(range) { 
        return this.repository.get(range).numericData;
    }

    public getTextData(range) {
        return this.repository.get(range).textData;
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

    public getFormatType(range): StyleFormatType {
        return this.repository.get(range).formatType;
     }

    public hasRangeStyle(range): boolean {
        return this.getStyle(range) !== undefined;
    }

    public hasRange(range): boolean {
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

    public isRangeSelected(range) {
        const innerRange = this.getInnerRange(range);
        if (this.hasRange(JSON.stringify(range))) {
            this.removeRange(range);
        } else if (innerRange) {
            this.removeRange(innerRange);
        }
    }

    public * getInnerRange(range) {
        const iterator = this.repository.keys();
        for (let head = iterator.next().value; head !== undefined; head = iterator.next().value) {
            const cachedRange = JSON.parse(head);
            if (range.rowStart <= cachedRange.rowStart &&
                range.rowEnd >= cachedRange.rowEnd &&
                range.columnStart <= cachedRange.columnStart &&
                range.columnEnd >= cachedRange.columnEnd) {
                    yield head;
                }
        }
    }

}
