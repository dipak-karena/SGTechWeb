import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() mobileMenuButtonClicked = new EventEmitter(); 
   constructor() { }

  ngOnInit(): void {
  }
  Onclick() {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }
}
