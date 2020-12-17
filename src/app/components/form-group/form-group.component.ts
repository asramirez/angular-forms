import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyValidators } from '../../validators/password.validator';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  form: FormGroup;


  constructor() {

    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$')]),
        lastName: new FormControl(),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(),
        address: new FormGroup({
          street: new FormControl('', Validators.required),
          zip: new FormControl()
        }),
        password: new FormControl('', MyValidators.password),
        confirmPassword: new FormControl('', MyValidators.password)

      }, {
      validators: MyValidators.matchPassword
    }

    );

  }

  ngOnInit(): void {
  }


  get isNameFieldValid() {
    return this.form.get('name').valid;
  }

  get isNameFieldInvalid() {
    return this.form.get('name').invalid;
  }

  get isNameFieldTouched() {
    return this.form.get('name').touched;
  }

  get isEmailFieldValid() {
    return this.form.get('email').valid;
  }

  get isEmailFieldInvalid() {
    return this.form.get('email').invalid;
  }

  get isEmailFieldTouched() {
    return this.form.get('email').touched;
  }

  get formControlName() {
    return this.form.get('name');
  }

  get formControlEmail() {
    return this.form.get('email');
  }

  get formControlAddress() {
    return this.form.get('address.street');
  }

  get formControlPassword() {
    return this.form.get('password');
  }

  get formControlConfirmPassword(){
    return this.form.get('confirmPassword');
  }


  get isStreetFieldValid() {
    return this.form.get('address.street').valid;
  }

  get isStreetFieldInvalid() {
    return this.form.get('address.street').invalid;
  }

  get isStreetFieldTouched() {
    return this.form.get('address.street').touched;
  }





  save() {
    if (this.form.invalid) {
      this.form.controls.name.markAsTouched();
      this.form.controls.email.markAsTouched();
      this.form.controls.address.markAllAsTouched();
      return;
    }
  }




}
