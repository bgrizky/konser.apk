import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  navigateToTab1() {
    this.router.navigate(['/tabs/tab1']);
  }

  navigateToTab3() {
    this.router.navigate(['/tabs/tab3']);
  }

  navigateToTab4() {
    this.router.navigate(['/tabs/tab4']);
  }

  async showContact() {
    const toast = await this.toastController.create({
      message: 'Hubungi kami di: support@konser.com atau (021) 123-4567',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
