import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppKoylaComponent } from './app-koyla/app-koyla.component';
import { AppKoylaService } from './services/app-koyla.service'
import { RouterModule }   from '@angular/router';
import { AppLatayComponent } from './app-latay/app-latay.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 
let urls = [
  {
    path: 'koyla',
    component: AppKoylaComponent
  },
  {
    path: 'latay',
    component: AppLatayComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AppKoylaComponent,
    AppLatayComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(urls),
    NgbModule.forRoot()
  ],
  providers: [
    AppKoylaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
