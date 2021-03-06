import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent } from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
  selector: "banner-sample-4",
  templateUrl: "./banner-sample-4.component.html",
  styleUrls: ["./banner-sample-4.component.scss"]
})
export class BannerSample4Component implements OnInit {
  public automaticReplies = true;
  public automaticReplyText = `Dear Sender,

I am currently OOO with limited access to e-mails.

I will respond to your as soon as I can.
For urgent matters, please contact qually-t@example.com;

Regards,
Gort`;

  @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
  public contentWidth = "384px";
  public ngOnInit() {
    this.banner.open();
  }

  public toggleBanner(event) {
    if (!event) {
      if (!this.banner.collapsed) {
        this.banner.close();
      }
    } else {
      this.banner.open();
    }
  }

  public automaticRepliesSwitch(state: boolean) {
    this.automaticReplies = state;
    this.banner.close();
  }
}
