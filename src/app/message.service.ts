import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class MessageService {

  @Output() activeMessage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  setActiveMessage(message: string) {
    this.activeMessage.emit(message);
  }

  removeActiveMessage() {
    this.activeMessage = null;
  }

  getActiveMessage() {
    return this.activeMessage;
  }

}
