import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Uncomment this line
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, CommonModule, AppRoutingModule], // Include CommonModule
  declarations: [NavbarComponent, AppComponent], // Order matters, ensure 'NavbarComponent' is declared before 'AppComponent'
  bootstrap: [AppComponent],
})
export class AppModule {}
