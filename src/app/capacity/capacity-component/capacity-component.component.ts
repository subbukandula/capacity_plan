import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity-component',
  templateUrl: './capacity-component.component.html',
  styleUrls: ['./capacity-component.component.css']
})
export class CapacityComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.localStorage.setItem("page","capacityPage");
  }

}
