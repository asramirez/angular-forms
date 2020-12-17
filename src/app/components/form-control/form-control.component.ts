import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  nameField = new FormControl('', [Validators.required, Validators.minLength(5)]);
  emailField = new FormControl();
  phoneField = new FormControl();
  categoryField = new FormControl();
  tagsField = new FormControl();
  agreeField = new FormControl(false);
  genderField = new FormControl();

  countValueChanges: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.nameField.valueChanges
      .subscribe(value => {
        this.countValueChanges++;
      })


    console.log(this.nameField)

  }

  randomNameWithoutEvent() {
    this.nameField.setValue('Carolina', { emitEvent: false })
  }

  randomNameWithEvent() {
    this.nameField.setValue('Arianna');
  }
  getNameValue() {
    console.log(this.nameField.value)
    
  }

}
