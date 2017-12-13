import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiv',
  templateUrl: './reactiv.component.html',
  styleUrls: ['./reactiv.component.css']
})
export class ReactivComponent implements OnInit {


  signUpForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email] ),
      'phoneNumber' : new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'subscription' : new FormControl('pro'),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'hobbies': new FormArray([]);
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  addHobbies() {
    const inputHobby = new FormControl(null, Validators.required);

    (<FormArray>this.signUpForm.get('hobbies')).push(inputHobby);
  }
}
