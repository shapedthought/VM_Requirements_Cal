import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  outputItems = [];
  pvmCPU: number;
  pvmGHz: number;
  pvmRam: number;

  @Output() calSend = new EventEmitter<object>();

  envReqForm = new FormGroup({
    vmQty: new FormControl('', Validators.required),
    vCPU: new FormControl('', Validators.required),
    GHz: new FormControl('', Validators.required),
    ram: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.outputItems.length > 0) {
      this.outputItems = [];
    }
    const data = this.envReqForm.value;
    this.pvmCPU = data.vCPU / data.vmQty;
    this.pvmGHz = data.GHz / data.vmQty;
    this.pvmRam = data.ram / data.vmQty;
    this.outputItems.push(this.pvmCPU);
    this.outputItems.push(this.pvmGHz);
    this.outputItems.push(this.pvmRam);
    this.calSend.emit(this.outputItems);
    console.log(this.pvmCPU, this.pvmGHz, this.pvmRam);
  }
}
