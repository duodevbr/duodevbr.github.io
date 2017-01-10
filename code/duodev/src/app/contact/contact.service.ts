import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

import{Observable} from 'rxjs';
import 'rxjs/Rx';
import{Contact} from './Contact';

@Injectable()
export class ContactService {
  contact:Contact;
  url:string = "http://localhost:50262/api/Values";
  
  constructor(private http:Http) { 
  }

  getContacts():Observable<any>{
    let response;
    return this.http.get(this.url)
    .map(res=> res.json())
    .catch(log=> {throw console.log("erro "+log);});
  }


}
