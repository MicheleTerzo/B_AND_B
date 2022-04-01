import { Component, EventEmitter, Output } from '@angular/core';
import { IHeaderItems } from '../../interfaces/iheader-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() itemEmitter: EventEmitter<string> = new EventEmitter<string>();

  headerItems: IHeaderItems[] = [
    {
      text: 'La Storia',
      id: 'history',
    },
    {
      text: 'Dove trovarci',
      id: 'findUs',
    },
    {
      text: 'Contatti',
      id: 'contacts',
    },
    {
      text: 'Prenota',
      id: 'book',
    },
  ];

  emitClickedItem(itemIndex: number): void {
    this.itemEmitter.emit(this.headerItems[itemIndex].id);
  }
}
