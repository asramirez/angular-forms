import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Category } from './category.interface';
import { CategoryService } from './category.service'

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
  ]
};

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent implements OnInit {

  html: string;


  editorStyle = {
    height: '200px'
  }

  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button
      ['link', 'image']],



  }


  form: FormGroup;



  categories: Category[];

  constructor(private fb: FormBuilder, private service: CategoryService) {
    this.buildForm();

    this.service.get().subscribe(data => {
      this.categories = data;
    });


  }

  ngOnInit(): void {

  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  get nameField() {
    return this.form.get('name')
  }

  get imageField() {
    return this.form.get('image');
  }

  get descriptionField() {
    return this.form.get('description');
  }

  uploadFile(event): void {

    const image = event.target.files[0];
    const name = 'category.png';

    console.log(image);

  }


  // Validaciones asincronas

}
