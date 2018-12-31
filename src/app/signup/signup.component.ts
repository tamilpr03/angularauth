import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';



@Component({templateUrl: 'signup.component.html'})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    // convenience getter for easy access to form fieldss
    get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.register(this.f.username.value, this.f.password.value, this.f.name.value, this.f.email.value)
            .pipe(first())
            .subscribe(
                data => {
                    if(data.status) {
                      window.alert(data.message)
                      this.router.navigate(['login'])
                    } else {
                      this.error = data.message;
                      window.alert(data.message)
                    }
                  })
                }
                
              
              }
              