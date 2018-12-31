import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'per-vm-cal';
  pvmCPU: number;
  pvmGHz: number;
  pvmRam: number;

  displayOut(outData) {
    this.pvmCPU = outData[0];
    this.pvmGHz = outData[1];
    this.pvmRam = outData[2];
  }
}
