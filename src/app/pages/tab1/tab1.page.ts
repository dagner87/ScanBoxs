import { Component } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private datalocalService: DatalocalService
  ) {}

  ionViewWillEnter() {
    console.log('viewWillEnter');
  }
  ionViewDidEnter() {
    console.log('viewDidEnter');
  }
  ionViewDidLeave() {
    console.log('viewDidLeave');
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
        if (!barcodeData.cancelled) {
          this.datalocalService.saveRegister(
            barcodeData.format,
            barcodeData.text
          );
        }
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
