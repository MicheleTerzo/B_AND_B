import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent {
  @Output() discoverEmitter: EventEmitter<void> = new EventEmitter<void>();
}
