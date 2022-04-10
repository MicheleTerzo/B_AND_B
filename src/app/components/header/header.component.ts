import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IHeaderItems } from "../../interfaces/iheader-items";
import { IScreenSizes } from '../../interfaces/iScreen-sizes';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() screenWidth: number;
  @Input() screenSizes : IScreenSizes;
  @Output() itemEmitter: EventEmitter<string> = new EventEmitter<string>();
  headerItems: IHeaderItems[] = [
    {
      text: "Storia",
      id: "history",
    },
    {
      text: "Struttura",
      id: "structure",
    },
    {
      text: "Dove trovarci",
      id: "location",
    },
    {
      text: "Contatti",
      id: "contacts",
    },
  ];

  private _isViewportAtTop: boolean = true;

  get isViewportAtTop(): boolean {
    return this._isViewportAtTop;
  }

  @Input() set isViewportAtTop(value: boolean) {
    this._isViewportAtTop = value;
  }

  emitClickedItem(itemIndex: number): void {
    this.itemEmitter.emit(this.headerItems[itemIndex].id);
  }
}
