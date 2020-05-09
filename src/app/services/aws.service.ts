import { OnInit, Injectable } from '@angular/core';
import {Rekognition} from 'aws-sdk';

@Injectable()
export default class AwsService implements OnInit{

    ngOnInit(){

    }

    public sendImage():void{
        let rek = new Rekognition();
        
    } 
}