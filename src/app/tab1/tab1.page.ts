import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  concerts = [
    {
      title: 'KONSER JUDIKA',
      price: '500.000',
      image: 'https://assets.loket.com/neo/production/images/banner/20220606162535_629dc80f69e87.jpg'
    },
    {
      title: 'KONSER ARMADA',
      price: '400.000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4-rwEUj2kAIS7bNDhG1NGhGvicu9l8X-hQ&s'
    },
    {
      title: 'KONSER SLANK',
      price: '750.000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYH3JtxiCJpGZz_12vatSGME6uXfDz7yo_Q&s'
    },
    {
      title: 'KONSER WALI',
      price: '600.000',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVsF4bZj7Cb9kmCXat6hc5cBHuGgSoWe4U0BHW3COMmA50BZ52qTV2nrHt4lFXYXt0mrwyzTY7JmH-Ku5L6TFzNDMa50gOb6q2z3oVihN40eNb-7i4ZCVWAxSteXZYvclHSn_d5dX10NwBlesCYBaZGbS-uuSPBRjHJdyzt9FCyDdNCHVaqpFrPvwpYXs/w1200-h630-p-k-no-nu/IMG_20231006_153913.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToTab2() {
    this.router.navigate(['/tab2']); // Ganti '/tab2' dengan path yang sesuai untuk tab2
  }
}