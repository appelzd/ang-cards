import { Component, OnInit } from '@angular/core';
import {ScannerComponent} from '../scanner/scanner.component';
import { InsuranceCard } from '../models/insurance.card';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.sass']
})
export class ViewerComponent implements OnInit {

  card: InsuranceCard;
  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event): any{

  }

  
}
