import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpeButtonModule } from 'ngx-spectrecss';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpeButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
