import { Component, QueryList, ViewChildren } from "@angular/core";
@Component({
    selector: "app-input-group-sample-6",
    styleUrls: ["./input-group-sample-6.component.scss"],
    templateUrl: "./input-group-sample-6.component.html"
})
export class InputGroupSample6Component {
    public user = {
        dateTime: new Date(),
        email: undefined,
        fullName: undefined,
        genres: undefined,
        movie: undefined,
        phone: undefined
    };

    public genres = [
        { type: "Action" , movies: ["The Matrix", "Kill Bill: Vol.1", "The Dark Knight Rises"]},
        { type: "Adventure" , movies: ["Interstellar", "Inglourious Basterds", "Inception"]},
        // tslint:disable-next-line:object-literal-sort-keys
        { type: "Comedy" , movies: ["Wild Tales", "In Bruges", "Three Billboards Outside Ebbing, Missouri",
            "Untouchable", "3 idiots"]},
        { type: "Crime" , movies: ["Training Day", "Heat", "American Gangster"]},
        { type: "Drama" , movies: ["Fight Club", "A Beautiful Mind", "Good Will Hunting", "City of God"]},
        { type: "Biography" , movies: ["Amadeus", "Bohemian Rhapsody"]},
        { type: "Mystery" , movies: ["The Prestige", "Memento", "Cloud Atlas"]},
        { type: "Musical" , movies: ["All That Jazz"]},
        { type: "Romance" , movies: ["Love Actually", "In The Mood for Love"]},
        { type: "Sci-Fi" , movies: ["The Fifth Element"]},
        { type: "Thriller" , movies: ["The Usual Suspects"]},
        { type: "Western" , movies: ["Django Unchained"]}];

    public onDateSelection(value) {
        this.user.dateTime.setDate((value as Date).getDate());
    }

    public onTimeSelection(event) {
        this.user.dateTime.setTime((event.newValue as Date).getTime());
    }

    public onSubmit() {
        console.log("submit");
    }
}
