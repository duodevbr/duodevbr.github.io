import { Component, OnInit,AfterViewChecked } from '@angular/core';

import{ContactService}from './contact.service';
import{Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewChecked {
  contact : Contact = new Contact() ;
  constructor(private contactService : ContactService) { 
    this.contactService.getContacts().subscribe(
      contact => this.contact = contact,
      erro => console.log(erro)
      );
  }

  ngOnInit() {
   
  }
  ngAfterViewChecked(){
console.log("Object de retorno "+this.contact);
  }

}
