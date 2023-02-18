import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { FormsenderComponent } from './formsender/formsender.component';
import { FormreceiverComponent } from './formreceiver/formreceiver.component'
import { CrudsenderComponent } from './crudsender/crudsender.component';
import { CrudreceiverComponent } from './crudreceiver/crudreceiver.component';
import { LoginComponent } from './login/login.component';
import { ViewallComponent } from './viewall/viewall.component';
import { EditComponent } from './edit/edit.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'third',component:ThirdComponent},
  {path:'fourth',component:FourthComponent},
  {path:'fifth',component:FifthComponent},
  {path:'sixth',component:SixthComponent},
  {path:'seventh',component:SeventhComponent},
  {path:'formsender',component:FormsenderComponent},
  {path:'formreceiver',component:FormreceiverComponent},
  {path:'crudsender',component:CrudsenderComponent},
  {path:'crudreceiver',component:CrudreceiverComponent},
  {path:'login',component:LoginComponent},
  {path:'viewall',component:ViewallComponent},
  {path:'edit',component:EditComponent},
  {path:'searchbar',component:SearchbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
