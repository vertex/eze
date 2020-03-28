import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorefrontCreatorComponent } from './storefront-creator/storefront-creator.component';
import { RootComponent } from './root/root.component'

@NgModule({
  declarations: [
    AppComponent,
    StorefrontCreatorComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
