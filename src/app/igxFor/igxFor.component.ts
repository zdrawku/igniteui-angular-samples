import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IgxFilterOptions } from "igniteui-angular/main";
import {femaleFNames, lastName, maleFNames, middleNames} from "./names";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "igxFor-list",
    styleUrls: ["./igxFor.component.scss"],
    templateUrl: "./igxFor.component.html"
})
export class IgxForComponent implements OnInit {
    public search: string;
    public data: object[] = [];
    get fo() {
        const _fo = new IgxFilterOptions();
        _fo.key = "name";
        _fo.inputValue = this.search;
        return _fo;
    }
    constructor() { }
    public ngOnInit() {
        const data = [];
        for (let i = 0; i < 100000; i++) {
            const item = this.generatePerson(i);
            data.push(item);
        }
        this.data = data;
    }
    private generatePerson(index): object {
        const item = new Person();
        item.key = index;
        const gender = index % 2 === 0 ? "M" : "F";
        item.name = this.generateName(gender);
        item.avatar = "https://randomuser.me/api/portraits/" +
        (gender === "M" ? "men" : "women") +
        "/" + Math.floor((Math.random() * 100)) + ".jpg";
        item.favorite = Math.floor((Math.random() * 3)) % 3 === 0;
        return item;
    }
    private generateName(gender): string {
        let name = "";
        const fNames = gender === "M" ? maleFNames : femaleFNames;
        name += fNames[Math.floor(Math.random() * fNames.length)] + " ";
        name += middleNames[Math.floor(Math.random() * middleNames.length)] + " ";
        name += lastName[Math.floor(Math.random() * lastName.length)];
        return name;
    }
}

export class Person {
  public key: number;
  public name: string;
  public favorite: boolean;
  public avatar: string;
}
