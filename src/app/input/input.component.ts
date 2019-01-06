import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  pvmCPU: number;
  pvmGHz: number;
  pvmRAM: number;



  envReqForm = new FormGroup({
    vmQty: new FormControl('', Validators.required),
    vCPU: new FormControl('', Validators.required),
    GHz: new FormControl('', Validators.required),
    ram: new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    const data = this.envReqForm.value;
    this.pvmCPU = data.vCPU / data.vmQty;
    this.pvmGHz = data.GHz / data.vmQty;
    this.pvmRAM = data.ram / data.vmQty;
    this.dataService.calculationUpdated.next({pvmCPU: this.pvmCPU, pvmGHz: this.pvmGHz, pvmRAM: this.pvmRAM });
}}
