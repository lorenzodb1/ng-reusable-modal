import {Component, ViewChild} from '@angular/core';
import {ModalComponent} from "./components/modal/modal.component";
import {ModalConfig} from "./components/modal/modal.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('modal') private modal: ModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Title",
    onDismiss: () => {
      return true
    },
    dismissButtonLabel: "Dismiss",
    onClose: () => {
      return true
    },
    closeButtonLabel: "Close"
  }

  constructor() {}

  async openModal() {
    return await this.modal.open()
  }
}
