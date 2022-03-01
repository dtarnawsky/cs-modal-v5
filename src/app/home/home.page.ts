import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderContainerComponent } from '../loader-container/loader-container.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public isModalOpen = false;

  public props: { stuff: 'things'};

  constructor(private modalController: ModalController) {}

  public async openModal() {
    const modal = await this.modalController.create({
      component: LoaderContainerComponent,
      cssClass: 'acc-attachment-container',
      backdropDismiss: false,
      componentProps: {
      data: this.props
      }
      });
      await modal.present();
  }

}
