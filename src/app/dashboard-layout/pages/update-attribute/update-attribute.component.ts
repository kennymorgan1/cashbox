import { Component, OnInit } from '@angular/core';
import { AttributeServiceService } from 'src/app/services/attribute-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-attribute',
  templateUrl: './update-attribute.component.html',
  styleUrls: ['./update-attribute.component.scss']
})
export class UpdateAttributeComponent implements OnInit {
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
  attributeParam;
  constructor(private service: AttributeServiceService, private route: ActivatedRoute) {
    this.attributeParam = this.route.snapshot.paramMap.get('attribute');
   }

  ngOnInit() {
    this.attributeFormField();
  }

  get attribute() { return this.attributeForm.get('attribute'); }
  get newAttribute() { return this.attributeForm.get('newAttribute'); }
  get getDisableState() { return this.attributeForm.invalid || this.disableBtn; }
  private getDisableBtn(value: boolean) { this.disableBtn = value; }

  attributeFormField() {
    this.attributeForm = new FormGroup({
      attribute: new FormControl(this.attributeParam, [Validators.required]),
      newAttribute: new FormControl('', [Validators.required])
    });
  }

  formSubmit() {
    if (this.attributeForm.valid) {
      this.submitted = true;
      this.getDisableBtn(true);
      const payload = {
        attribute: this.attribute.value,
        newAttribute: this.newAttribute.value
      };
      this.forumCreatingProgress();
      this.service.updateAttribute(payload).subscribe(
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
