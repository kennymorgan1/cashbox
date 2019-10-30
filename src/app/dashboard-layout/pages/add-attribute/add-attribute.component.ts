import { AttributeServiceService } from './../../../services/attribute-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.scss']
})
export class AddAttributeComponent implements OnInit {
  attributeForm: FormGroup;
  loading = false;
  submitted = false;
  disableBtn = false;
  success = false;
  error = false;
  errorMessage;
  setTimeProgress;
  addingForum = 10;
  categoryList = [];
  constructor(private service: AttributeServiceService) { }

  ngOnInit() {
    this.attributeFormField();
  }

  get attribute() { return this.attributeForm.get('attribute'); }
  get getDisableState() { return this.attributeForm.invalid || this.disableBtn; }
  private getDisableBtn(value: boolean) { this.disableBtn = value; }

  attributeFormField() {
    this.attributeForm = new FormGroup({
      attribute: new FormControl('', [Validators.required])
    });
  }

  formSubmit() {
    if (this.attributeForm.valid) {
      this.submitted = true;
      this.getDisableBtn(true);
      const payload = {
        attribute: this.attribute.value
      };
      this.forumCreatingProgress();
      this.service.addAttribute(payload).subscribe(
        (data: any) => {
          this.addingForum = 10;
          this.success = true;
          clearInterval(this.setTimeProgress);
          setTimeout(() => this.success = false, 5000);
          this.getDisableBtn(false);
          this.loading = false;
        },
        error => {
          this.error = true;
          this.addingForum = 10;
          clearInterval(this.setTimeProgress);
          setTimeout(() => this.error = false, 5000);
          this.errorMessage = 'An error occured';
          this.getDisableBtn(false);
          this.loading = false;
        }
      );
    }
  }

  forumCreatingProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.addingForum < 90) {
        this.addingForum += 10;
      }
    }, 1000);
  }
}
