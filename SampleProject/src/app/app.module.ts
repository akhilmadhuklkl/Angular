import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { SamplepipePipe } from './samplepipe.pipe';
import { NewpipePipe } from './newpipe.pipe';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component'

import { ReactiveFormsModule } from '@angular/forms';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { ApiserviceService } from './apiservice.service';

import { FormsenderComponent } from './formsender/formsender.component';
import { FormreceiverComponent } from './formreceiver/formreceiver.component'
import { FormserviceService } from './formservice.service';

import { CrudsenderComponent } from './crudsender/crudsender.component';
import { CrudreceiverComponent } from './crudreceiver/crudreceiver.component';
import { CrudserviceService } from './crudservice.service';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ViewallComponent } from './viewall/viewall.component';
import { EditComponent } from './edit/edit.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    SamplepipePipe,
    NewpipePipe,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    FormsenderComponent,
    FormreceiverComponent,
    CrudsenderComponent,
    CrudreceiverComponent,
    LoginComponent,
    ViewallComponent,
    EditComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
