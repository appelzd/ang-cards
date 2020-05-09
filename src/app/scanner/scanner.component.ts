import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.sass']
})
export class ScannerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Output() filechanged = new EventEmitter<any>();

  fileChanged(imageUploader){
    let g = imageUploader;
    
    let reader = new FileReader();

    reader.onload = event =>
    {
        this.filechanged.emit(event.target["result"]);
    }

    reader.readAsDataURL(imageUploader["files"][0]);
  }
}
