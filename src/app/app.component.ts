import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from "@angular/core";
import {
  SCREEN_LG,
  SCREEN_MD,
  SCREEN_SMALL,
  SCREEN_XL,
  SCREEN_XXL,
} from "./config/screen-config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("history") historySection: ElementRef;
  @ViewChild("jumbotron") jumbotronSection: ElementRef;
  @ViewChild("structure") structureSection: ElementRef;
  @ViewChild("location") locationSection: ElementRef;
  @ViewChild("scrollButton") scrollButton: ElementRef;
  @ViewChild("contacts") contactsSection: ElementRef;

  screenSizes = {
    screenSizeSmall: SCREEN_SMALL,
    screenSizeMd: SCREEN_MD,
    screenSizeLg: SCREEN_LG,
    screenSizeXl: SCREEN_XL,
    screenSizeXxl: SCREEN_XXL,
  };

  constructor() {
    this.isScrolledIntoView();
    this.getScreenSize();
  }

  private _screenWidth: number;

  get screenWidth(): number {
    return this._screenWidth;
  }

  set screenWidth(value: number) {
    console.log("screenWidth", value);
    this._screenWidth = value;
  }

  private _isJumbotronScrolledIntoView: boolean = false;

  get isJumbotronScrolledIntoView(): boolean {
    return this._isJumbotronScrolledIntoView;
  }

  set isJumbotronScrolledIntoView(value: boolean) {
    this._isJumbotronScrolledIntoView = value;
  }

  private _isViewportAtTop: boolean = true;

  get isViewportAtTop(): boolean {
    return this._isViewportAtTop;
  }

  set isViewportAtTop(value: boolean) {
    this._isViewportAtTop = value;
  }

  scrollToSection(sectionName: string): void {
    switch (sectionName) {
      case "jumbotron": {
        this.jumbotronSection.nativeElement.scrollIntoView();
        break;
      }
      case "history": {
        this.historySection.nativeElement.scrollIntoView();
        break;
      }
      case "structure": {
        this.structureSection.nativeElement.scrollIntoView();
        break;
      }
      case "location": {
        this.locationSection.nativeElement.scrollIntoView();
        break;
      }
      case "contacts": {
        this.contactsSection.nativeElement.scrollIntoView();

        break;
      }
    }
  }

  ngAfterViewInit() {
    this.scrollButton.nativeElement.classList.add("scroll-to-top-button-invisible");
  }

  @HostListener("window:scroll", ["$event"])
  isScrolledIntoView() {
    if (this.jumbotronSection) {
      const rect = this.jumbotronSection.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isJumbotronScrolledIntoView = topShown && bottomShown;
    }
    this.isViewportAtTop = window.scrollY <= 0;
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }
}
