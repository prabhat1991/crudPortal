import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userObj: any = {};
  regForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private route: ActivatedRoute,
    private router: Router,private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      display_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }
    this.loading = true;
    var emailVal = this.regForm.value.email;
    this.userService.registerUser(this.userObj,emailVal);
    this.router.navigate(['login']); 
 }

}
