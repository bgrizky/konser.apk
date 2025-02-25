import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../provider/post-provider';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  nama: string = '';
  nohp: string = '';
  email: string = '';
  tiket: string = '';
  isLoading: boolean = false;
  selectedConcert: string = '';

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider
  ) {}

  ngOnInit() {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async addRegister() {
    if (this.isLoading) return;

    if (!this.nama || !this.nohp || !this.email || !this.tiket) {
      return this.presentToast('Harap lengkapi semua field');
    }

    this.isLoading = true;

    const body = {
      nama: this.nama,
      nohp: this.nohp,
      email: this.email,
      tiket: this.tiket,
      aksi: 'add_register',
    };

    this.postPvdr.postData(body, 'action.php').subscribe(
      async (data) => {
        this.isLoading = false;
        const alertpesan = data.msg;
        if (data.success) {
          await this.presentToast('Selamat! Registrasi tiket sukses.');
          this.router.navigate(['tabs/tab4']);
        } else {
          await this.presentToast(alertpesan);
        }
      },
      async (error) => {
        this.isLoading = false;
        await this.presentToast('Koneksi error, silakan coba lagi');
      }
    );
  }

  selectConcert(concert: string) {
    this.selectedConcert = concert;
    // Optional: You can add this to your form data if needed
    // this.concertName = concert;
  }
}