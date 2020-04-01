import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorefrontCreatorComponent } from './storefront-creator/storefront-creator.component'
import { StorefrontComponent } from './storefront/storefront.component'
import { HomepageComponent } from './homepage/homepage.component'


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'storefront', component: StorefrontComponent },
  { path: 'create-storefront', component: StorefrontCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
