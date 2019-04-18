import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryComponentComponent} from './summary/summary-component/summary-component.component';
import {PeopleComponentComponent} from './people/people-component/people-component.component';
import {CapacityComponentComponent} from './capacity/capacity-component/capacity-component.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponentComponent },
  { path: 'people',      component: PeopleComponentComponent },
  { path: 'capacity', component: CapacityComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
