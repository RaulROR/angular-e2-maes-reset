import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Compo1Component } from './compo1/compo1.component'; 


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,HelloComponent,Compo1Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
