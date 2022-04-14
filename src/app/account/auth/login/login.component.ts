import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/common/auth.service';
import { NotificationService } from 'src/app/core/services/common/toast-service';
import { SessionHelperService } from 'src/app/shared/helpers/session-helper.service';
import { StorageKey, StorageService } from 'src/app/core/services/common/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private session: SessionHelperService, private authService: AuthenticationService,private router: Router,
    private storageService: StorageService, private notifyService: NotificationService,) { }

  ngOnInit(): void {
    
  }
  OnClick(){
    
    let objdata = { username: 'Demo-ADMIN', password: 'Demo@1947' }

    this.authService.login(objdata)
      .subscribe(
        response => {
          // this.storageService.setValue(StorageKey.currentUser, JSON.stringify(response.data.user));
          // this.storageService.setValue(StorageKey.sessionID, response.data.uid);
          // this.storageService.setValue(StorageKey.dateformat, JSON.stringify('dd/MM/yyyy'));
          // this.storageService.setValue(StorageKey.datetimeformat, JSON.stringify('dd/MM/yyyy hh:mm:ss'));
          // this.storageService.setValue(StorageKey.authToken, response.data.token.value);
          this.notifyService.showSuccess(`Welcome, ${response.data.user.userFullName}!`, 'SUCCESS');
          this.router.navigate(['/dashboard']);
        },
        error => {
         // this.error = error ? error : '';
        });
  }

}
