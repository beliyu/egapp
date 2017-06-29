import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './book/addform.component';
import { BookComponent } from './book/book.component';
import { WhmService } from './wh.service';
import { AutService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    AddformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WhmService, AutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
