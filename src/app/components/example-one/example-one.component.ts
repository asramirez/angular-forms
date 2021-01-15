import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from './category.interface';
import { CategoryService } from './category.service'
import { MyValidators } from '../../validators/password.validator'
import { ActivatedRoute, Params } from '@angular/router';

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
  categoryId: string;
  categories: Category[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: CategoryService) {

    this.buildForm();

    this.service.get().subscribe(data => {
      this.categories = data;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
      if (this.categoryId) {
        this.getCategory();
      }
    });

  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)], MyValidators.validateCategory(this.service)],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  private getCategory() {
    this.service.getCategory(this.categoryId).subscribe(
      (category: Category) => {
        console.log(category);

        this.form.patchValue(category);
      });
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
