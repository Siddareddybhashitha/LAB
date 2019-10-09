import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";

class RegisterServiceService {
  registerStudent(studentDetail: { studentID: any; firstName: any; lastName: any; emailAddress: boolean | string | ((control: AbstractControl) => (ValidationErrors | null)); password: any | "" | string; confirmPassword: any }) {

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  constructor(private router: Router, private registerService: RegisterServiceService) { }
  registerUser(event) {
    const studentDetail = {
      firstName: event.firstname,
      lastName: event.lastname,
      emailAddress: event.email,
      studentID: event.studentId,
      password: event.password,
      confirmPassword: event.cpassword
    };
    // @ts-ignore
    let studentDetail1: any;
    // @ts-ignore
    studentDetail1 = this.registerService.registerStudent(studentDetail).subscribe(res => {
        this.router.navigateByUrl('/dashboard');
      }, (err) => {
        // @ts-ignore
        console.log(err);
      });
  }
  ngOnInit() {
  }

}
