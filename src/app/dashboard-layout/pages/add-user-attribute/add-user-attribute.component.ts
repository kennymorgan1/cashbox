import { AttributeServiceService } from './../../../services/attribute-service.service';
import { UserServiceService } from './../../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-attribute',
  templateUrl: './add-user-attribute.component.html',
  styleUrls: ['./add-user-attribute.component.scss']
})
export class AddUserAttributeComponent implements OnInit {
  userForm: FormGroup;
  userId;
  userData;
  setTimeProgress;
  fetchUserProgress = 10;
  success = false;
  error = false;
  errorMessage;
  loading = false;
  submitted = false;
  disableBtn = false;
  addingForum = 10;
  attributes;
  constructor(
    private service: UserServiceService,
    private route: ActivatedRoute,
    private attrService: AttributeServiceService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
   }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('userId'));
    this.listAttributes();
    // this.listOneUser();
    this.userFormField();
  }

  get attribute() { return this.userForm.get('attribute'); }
  get value() { return this.userForm.get('value'); }
  get getDisableState() { return this.userForm.invalid || this.disableBtn; }
  private getDisableBtn(value: boolean) { this.disableBtn = value; }

  listAttributes() {
    this.attrService.getAttribute().subscribe((data: any) => {
      if (data) {
        let result = data.data;
        result = result.filter(value => (value !== 'user_id'));
        result = result.filter(value => value !== 'id');
        this.attributes = result;
      }
    });
  }

  listOneUser() {
    this.fetchingUsersProgress();
    this.service.getOneUser(this.userId).subscribe((data: any) => {
      this.userData = data.data;
    });
  }

  userFormField() {
    this.userForm = new FormGroup({
      attribute: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required])
    });
  }

  formSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      this.getDisableBtn(true);
      const id = this.userId;
      const payload = {
        attribute: this.attribute.value,
        value: this.value.value
      };
      this.forumCreatingProgress();
      this.service.updateUserAttribute(payload, id).subscribe(
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
          console.log(error);
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

  fetchingUsersProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.fetchUserProgress < 90) {
        this.fetchUserProgress += 10;
      }
    }, 1000);
  }
}
