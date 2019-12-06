import { GridSelectionRange } from 'igniteui-angular/lib/grids/selection/selection.service';
export interface IStylesData {
    value: any;
    style?: any;
}
export class RangeCache {

    public repository = new  Map<string, IStylesData>();
    constructor() {
    }

    public add(range: GridSelectionRange, max: number, style?: any) {
        const rangeString = JSON.stringify(range);
        if (this.repository.has(rangeString) && this.repository.get(rangeString).value < max) {
            return;
        }
        this.repository.set(rangeString, {value: max, style});
    }

    public getMaxValue(range): IStylesData {
        return this.repository.get(range).value;
    }

    public getStyle(range): any {
        return this.repository.get(range).style;
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

    public isRowIndexWithinRange(rowIndex, colIndex, r) {
        const iterator = this.repository.keys();
        for (let head = iterator.next().value; head !== undefined; head = iterator.next().value) {
            if (r === head) {
                return;
            }
            const range = JSON.parse(head);
            if (rowIndex >= range.rowStart &&
                rowIndex <= range.rowEnd &&
                colIndex <= range.columnStart &&
                colIndex >= range.columnEnd) {
                    return this.repository.get(head).value;
                }
        }
        return undefined;
    }

    public getRangeByRowIndex(rowIndex) {
                const iterator = this.repository.keys();

        // for (let head = iterator.next().value; head !== undefined; head = iterator.next().value) {
        //     const range = JSON.parse(head);
        //     if (rowIndex >= range.rowStart &&
        //         rowIndex <= range.rowEnd) {
        //             return this.repository.get(head).value;
        //         }
        // }
    }
}
