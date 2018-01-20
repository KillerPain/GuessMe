import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Injectable()
export class AwsService {

  constructor(private http: HttpClient) {
    AWS.config.update({
    });
  }


  uploadFile(file: any, username: string) {
    console.log('uploadFile')
    console.log(file.name)
    console.log(username)
    let newName = file.name.split('.');
    newName = newName[newName.length - 1];
    let id = UUID.UUID();
    newName = id + '.' + newName;

    // tslint:disable-next-line:max-line-length
    this.http.post('https://x3zjatrbpd.execute-api.us-east-2.amazonaws.com/photos_stage_1/-url-user-', { user: username, url: newName }).toPromise().then(
      data => {
        console.log(data);
      }
    ).catch(error => {
      console.log(error);
    });
    var bucket = new AWS.S3({ apiVersion: '2006-03-01', params: { Bucket: 'guess-me' } });
    var params = { Key: newName, Body: file, ACL: 'public-read' } as PutObjectRequest;
    bucket.upload(params, function (err, data) {
      console.log(err, data);
      if (err == null) {
        let location = data['Location'];
        console.log('no error');
      }
    });

  }

}
