import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable()
export class HttpProxyService{

    constructor(private http: HttpClient){
        
    }

    getHeaders(): HttpHeaders{
        return new HttpHeaders({}); 
    }
}      


 