import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: '';
  password: '';
  InvalidUser: ' ';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  userLogin() {
    const student = {
      username: this.username,
      password: this.password
    };
/*    this.loginService.authenticate(student).subscribe((data) => {
      /!*Receives success message if user exists and with correct credentails*!/
      // @ts-ignore
      if (data.message === 'Success') {
        this.router.navigate(['./dashboard']);
        // @ts-ignore
        console.log(data.message);
      } else {
        // @ts-ignore
        console.log(data.message);
      }
    });*/
  }

}
