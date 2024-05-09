import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module'; // Import your routes

@NgModule({
  imports: [
    CommonModule, // Import CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    CommonModule, // Export CommonModule
    RouterModule
  ]
})
export class AppRoutingModule { }
