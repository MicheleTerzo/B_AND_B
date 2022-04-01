import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  private _isViewportAtTop: boolean = true;

  get isViewportAtTop(): boolean {
    return this._isViewportAtTop;
  }

  @Input() set isViewportAtTop(value: boolean) {
    this._isViewportAtTop = value;
    console.log(value);
  }

  emitClickedItem(itemIndex: number): void {
    this.itemEmitter.emit(this.headerItems[itemIndex].id);
  }
}
