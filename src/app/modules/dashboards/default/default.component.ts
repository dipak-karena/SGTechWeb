import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/common/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor( private authService: AuthenticationService) { 


  }

  ngOnInit(): void {
    let  data={
      "Filters": [],
      "First": 0,
      "Rows": 500,
      "SortField": "",
      "SortOrder": 1,
      "globalFilter": ""
       }
    this.authService.getAllCompanyList(data).subscribe(
      response => {}
    );
  }

}
