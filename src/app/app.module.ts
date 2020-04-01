import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorefrontCreatorComponent } from './storefront-creator/storefront-creator.component';
import { StorefrontComponent } from './storefront/storefront.component'

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { StorefrontDisplayComponent } from './storefront-display/storefront-display.component';
import { HomepageComponent } from './homepage/homepage.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.arrows
};

@NgModule({
  declarations: [
    AppComponent,
    StorefrontCreatorComponent,
    StorefrontComponent,
    StorefrontDisplayComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgWizardModule.forRoot(ngWizardConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
