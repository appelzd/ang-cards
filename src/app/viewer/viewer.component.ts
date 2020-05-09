import { Component, OnInit } from '@angular/core';
import {ScannerComponent} from '../scanner/scanner.component';
import { InsuranceCard } from '../models/insurance.card';

@Component({
  selector: 'card-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.sass']
})
export class ViewerComponent implements OnInit {

  card: InsuranceCard;
  viewScanner: boolean = false;
  constructor() { 
    this.card = new InsuranceCard();
  }

  ngOnInit(): void {
  }

  onFileChanged(event): void{
    this.viewScanner = false;
  }

  showUploader():void{
      this.viewScanner = true;
  }  
}
