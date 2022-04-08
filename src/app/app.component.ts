import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('history') historySection: ElementRef;
  @ViewChild('jumbotron') jumbotronSection: ElementRef;
  @ViewChild('structure') structureSection: ElementRef;
  @ViewChild('location') locationSection: ElementRef;
  @ViewChild('scrollButton') scrollButton: ElementRef;
  @ViewChild('contacts') contactsSection: ElementRef;

  constructor() {}

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
      case 'jumbotron': {
        this.jumbotronSection.nativeElement.scrollIntoView();
        break;
      }
      case 'history': {
        this.historySection.nativeElement.scrollIntoView();
        break;
      }
      case 'structure': {
        this.structureSection.nativeElement.scrollIntoView();
        break;
      }
      case 'location': {
        this.locationSection.nativeElement.scrollIntoView();
        break;
      }
      case 'contacts': {
        this.contactsSection.nativeElement.scrollIntoView();

        break;
      }
    }
  }

  ngAfterViewInit() {
    this.scrollButton.nativeElement.classList.add('scroll-to-top-button-invisible');
  }

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.jumbotronSection) {
      const rect = this.jumbotronSection.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -50;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isJumbotronScrolledIntoView = topShown && bottomShown;
    }
    this.isViewportAtTop = window.scrollY <= 0;
  }
}
