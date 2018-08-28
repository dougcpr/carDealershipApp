import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardLayoutComponent} from './card-layout.component';

const routes: Routes = [{
  path: '', component: CardLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardLayoutRoutingModule { }
