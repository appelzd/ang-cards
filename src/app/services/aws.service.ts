import { OnInit, Injectable } from '@angular/core';
import {Rekognition} from 'aws-sdk';
import { environment } from 'src/environments/environment';
import * as AWS from 'aws-sdk';

@Injectable()
export default class AwsService implements OnInit{


    ngOnInit(){

    }

    public sendImage():void{
        let rek = new Rekognition({});
        


    } 

    updateAwsCreds(): any {
        AWS.config.region = environment.awsRegion,
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:aa1cc192-ef72-4cac-a691-aa0f60b9e076'
        });

        const rtn ={accessKeyId:null, secretAccessKey:null, sessionToken: null};

        AWS.config.getCredentials(() => {
            rtn.accessKeyId = AWS.config.credentials.accessKeyId;
            rtn.secretAccessKey = AWS.config.credentials.secretAccessKey;
            rtn.sessionToken = AWS.config.credentials.sessionToken;
        });

        return rtn;
    }
}