import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component'; // Import Home component
import { AboutComponent } from './views/about/about.component'; // Import About component

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // Declare Home component
    AboutComponent // Declare About component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
