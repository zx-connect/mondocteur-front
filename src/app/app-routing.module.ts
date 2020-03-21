import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VulgarisationComponent} from './vulgarisation/vulgarisation.component';
import {MapComponent} from './map/map.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/vulgarisation',
    pathMatch: 'full'
  },
  {
    path: 'vulgarisation',
    component: VulgarisationComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
