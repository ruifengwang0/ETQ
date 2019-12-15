import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FilterPipe } from './filter.pipe';
import { DirectoryComponent } from './directory/directory.component';

import {  NgxPaginationModule  } from 'ngx-pagination'; 

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FilterPipe,
    DirectoryComponent
  ],
  imports: [
    BrowserModule, FormsModule, ModalModule.forRoot(), HttpModule, NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
