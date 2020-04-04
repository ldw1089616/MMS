import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthControllerService, User, TokenInfo} from '../../service';
import { LocalStorageService, SessionStorageService} from '../../common-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: User = { username: '', password: '' };
  submitted = false;
  token: TokenInfo;
  constructor(
    public authControllerService: AuthControllerService,
    private localS: LocalStorageService,
    private sessionS: SessionStorageService,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authControllerService.loginUsingPOST(this.login).subscribe(
        val => {
          this.token = val;
          this.sessionS.setStore('token', this.token.accessToken);
          this.router.navigateByUrl('/app/tabs/schedule');
        },
        () => {
          console.log('error');
        }
      );
    }
  }

  
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
