import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/common/auth.service';

@Component({
  selector: 'app-membership-pricing',
  templateUrl: './membership-pricing.component.html',
  styleUrls: ['./membership-pricing.component.scss']
})
export class MembershipPricingComponent implements OnInit {
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
      response => {});
  }

}
