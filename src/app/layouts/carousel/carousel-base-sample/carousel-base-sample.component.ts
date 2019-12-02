import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IgxCarouselComponent } from "igniteui-angular";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel-base-sample.component.scss"],
  templateUrl: "./carousel-base-sample.component.html"
})
export class CarouselBaseSampleComponent implements OnInit {
  @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;

  public slides = [
      {
        src: "assets/images/svg/carousel/Onboarding1.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding2.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding3.svg"
      }
  ];

  public loop = false;
  public current: number;

  constructor(private router: Router) { }

  public ngOnInit() {
      this.current = this.carousel.current;
      this.carousel.onSlideChanged.subscribe((evt) => {
        this.current = evt.carousel.current + 1;
      });
  }

  public goTo() {
    this.router.navigate(["layouts/details"]);
  }
}
