import { Component, OnInit } from '@angular/core';
import{Http,Headers,RequestOptions} from '@angular/http';
import {FormGroup,FormControl, FormBuilder, Validators,AbstractControl} from '@angular/forms';

import{SendMessage} from './send-message';
import{SendMessageService} from './send-message.service';


// import{Observable} from 'rxjs';
// import 'rxjs/Rx';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  formMessage : FormGroup;
  private url : string = "http://localhost:50262/api/message";
  private message:SendMessage= new SendMessage();

  constructor(private sendservice:SendMessageService,private fb:FormBuilder) {
    this.buildForm(fb);
   }

  ngOnInit() {
    
  }

  buildForm(fb: FormBuilder):void{
    this.formMessage = fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      text: ['', Validators.required]
    });
   }
  send(message:FormGroup):void{
     this.sendservice.sendMessage(message);
  }

}
