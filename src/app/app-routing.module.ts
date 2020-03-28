import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorefrontCreatorComponent } from './storefront-creator/storefront-creator.component'
import { RootComponent } from './root/root.component'


const routes: Routes = [
  { path: '', component: RootComponent},
  { path: 'create-storefront', component: StorefrontCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
