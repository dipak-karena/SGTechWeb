import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-error-summary',
  templateUrl: './error-summary.component.html',
  styleUrls: ['./error-summary.component.scss']
})
@Injectable()
export class ErrorSummaryComponent implements OnInit {
  @Input() public errorlist:any[]=[];
  constructor() {
    console.log(JSON.stringify(this.errorlist));
   }

  ngOnInit(): void {
  }

}
