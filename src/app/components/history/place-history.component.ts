import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-place-history',
  templateUrl: './place-history.component.html',
  styleUrls: ['./place-history.component.scss'],
})
export class PlaceHistoryComponent {
  @Output() discoverEmitter: EventEmitter<void> = new EventEmitter<void>();
}
