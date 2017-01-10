import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';

import{Observable} from 'rxjs';
import 'rxjs/Rx';
import{SendMessage} from './send-message';

@Injectable()
export class SendMessageService {
  private message : SendMessage = new SendMessage();
  private url : string = "http://localhost:50262/api/message";
  constructor(private http : Http) { 

  }
  public sendMessage(message:any):any{
    this.message.Email =message.value.email;
    this.message.Name =message.value.name;
    this.message.Text =message.value.text;

    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
     return this.http.post(this.url,this.message,options)
     .toPromise()
     .then()
     .catch(log => console.log(log));  
  }

}
