import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
