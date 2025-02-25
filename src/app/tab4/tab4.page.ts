import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../provider/post-provider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  alumnis: any[] = [];
  limit: number = 10;
  start: number = 0;
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController
  ) {}
  ngOnInit() {}
  ionViewWillEnter() {
    this.alumnis = [];
    this.start = 0;
    this.loadAlumni();
  }
  doRefresh(event: any) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }
  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
      this.loadAlumni().then(() => {
        event.target.complete();
      });
    }, 500);
  }
  loadAlumni() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'getdata',
        limit: this.limit,
        start: this.start,
      };
      this.postPvdr.postData(body, 'action.php').subscribe((data) => {
        // Reverse data terlebih dahulu agar data terbaru di awal
        const reversedData = data.result.reverse();
        // Beri nomor urut dari 1 ke atas
        this.alumnis = reversedData.map((item: any, index: number) => ({
          ...item,
          displayNumber: index + 1 // Mengubah dari total-index menjadi index+1
        }));
        resolve(true);
      });
    });
  }
  getTicketImage(ticketType: string): string {
    if (ticketType === 'VIP') {
      return 'https://assets.loket.com/neo/production/images/banner/20220606162535_629dc80f69e87.jpg';
    } else {
      return 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVsF4bZj7Cb9kmCXat6hc5cBHuGgSoWe4U0BHW3COMmA50BZ52qTV2nrHt4lFXYXt0mrwyzTY7JmH-Ku5L6TFzNDMa50gOb6q2z3oVihN40eNb-7i4ZCVWAxSteXZYvclHSn_d5dX10NwBlesCYBaZGbS-uuSPBRjHJdyzt9FCyDdNCHVaqpFrPvwpYXs/w1200-h630-p-k-no-nu/IMG_20231006_153913.jpg';
    }
  }
}
