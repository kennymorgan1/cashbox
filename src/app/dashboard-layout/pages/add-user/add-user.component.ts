import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  disableBtn = false;
  success = false;
  error = false;
  errorMessage;
  setTimeProgress;
  addingForum = 10;
  categoryList = [];
  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.userFormField();
  }

  get first_name() { return this.userForm.get('first_name'); }
  get surname() { return this.userForm.get('surname'); }
  get date_of_birth() { return this.userForm.get('date_of_birth'); }
  get getDisableState() { return this.userForm.invalid || this.disableBtn; }
  private getDisableBtn(value: boolean) { this.disableBtn = value; }

  userFormField() {
    this.userForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      date_of_birth: new FormControl('', [Validators.required])
    });
  }

  formSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      this.getDisableBtn(true);
      const payload = {
        first_name: this.first_name.value,
        surname: this.surname.value,
        date_of_birth: this.date_of_birth.value
      };
      console.log(payload);
      this.forumCreatingProgress();
      this.service.addUser(payload).subscribe(
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
}
