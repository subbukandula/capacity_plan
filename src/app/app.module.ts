import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponentComponent } from './summary/summary-component/summary-component.component';
import { PeopleComponentComponent } from './people/people-component/people-component.component';
import { CapacityComponentComponent } from './capacity/capacity-component/capacity-component.component';
import { CapacityComponent1Component } from './capacity1/capacity-component1/capacity-component1.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponentComponent,
    PeopleComponentComponent,
    CapacityComponentComponent,
    CapacityComponent1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
