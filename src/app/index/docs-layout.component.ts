import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject, OnInit } from "@angular/core";

@Component({
    selector: "app-docs-layout",
    styleUrls: ["./docs-layout.component.scss"],
    template: `<router-outlet></router-outlet>`
})

export class DocsLayoutComponent implements OnInit {
    private isIE = !((window as any).ActiveXObject) && "ActiveXObject" in window;
    private theme = "default-theme";
    private styleElem: HTMLStyleElement;
    private typefacesLoaded = ["Titillium Web", "Roboto"];
    private typefaceUrl = "https://fonts.googleapis.com/css?family=";

    constructor(@Inject(DOCUMENT) private document: Document) {}

    public ngOnInit() {
        this.createThemeStyle();
    }

    @HostListener("window:message", ["$event"])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin && typeof e.data.themeStyle === "string") {
            this.styleElem.textContent = e.data.themeStyle;
            this.removeDefaultStyleLink();

            const typeface = window.getComputedStyle(this.document.body).fontFamily.replace(/\"/g, "");
            if (!this.typefacesLoaded.includes(typeface)) {
                this.typefacesLoaded.push(typeface);
                this.createTypefaceLink(typeface);
            }
        } else if (e.origin === e.data.origin && typeof e.data.theme === "string") {
            this.document.body.classList.remove(this.theme);
            this.document.body.classList.add(e.data.theme);
            this.theme = e.data.theme;
        }
    }

    private removeDefaultStyleLink() {
        const htmlCollection = this.document.getElementsByTagName('link');
        const arr = Array.from(htmlCollection);
        const style = arr.find(x => (x as any).href === window.location.origin + '/styles.css');
        if (style) {
            document.head.removeChild(style);
        }
    }

    private createThemeStyle() {
        if (this.isIE) {
            this.document.body.classList.add(this.theme);
        } else {
            this.styleElem = document.createElement("style");
            this.styleElem.id = "igniteui-theme";
            document.head.insertBefore(this.styleElem, this.document.head.lastElementChild);
            this.document.body.classList.add("custom-body");
        }
    }

    private createTypefaceLink(typeface: string) {
        const typefaceElem = this.document.createElement("link");
        typefaceElem.rel = "stylesheet";
        typefaceElem.id = "ignteui-theme-typeface";
        typefaceElem.href = this.typefaceUrl + typeface.split(" ").join("+");
        document.head.insertBefore(typefaceElem, this.document.head.lastElementChild);
    }
}
