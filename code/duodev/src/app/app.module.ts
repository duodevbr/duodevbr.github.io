import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SendMessageComponent } from './send-message/send-message.component';
import{ContactService} from './contact/contact.service';
import{SendMessageService} from './send-message/send-message.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ContactService,SendMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
