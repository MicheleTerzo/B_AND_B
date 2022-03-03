import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit {
  imagesArray: string[] = [
    'assets/images/image01.jpg',
    'assets/images/image02.jpg',
    'assets/images/image03.jpg',
    'assets/images/image04.jpg',
  ];
  selectedIndex: number = 0;
  carouselInterval;

  constructor(private cdRef: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.startCarousel();
  }



  startCarousel(): void {
    this.carouselInterval = setInterval(() => {
      if (this.selectedIndex < this.imagesArray.length - 1) this.selectedIndex++;
      else this.selectedIndex = 0;
      this.cdRef.detectChanges();
    }, 5000);
  }
}
