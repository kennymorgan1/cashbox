import { AttributeServiceService } from './../../../services/attribute-service.service';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericDeleteConfirmationComponent } from '../modals';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  headers;
  attributes;
  fetchingUsers = false;
  setTimeProgress;
  fetchUserProgress = 10;
  constructor(private service: UserServiceService, private modalService: NgbModal, private attrService: AttributeServiceService) { }

  ngOnInit() {
    this.listAttributes();
    this.listUsers();
  }

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

  listUsers() {
    this.fetchingUsers = true;
    this.fetchingUsersProgress();
    this.service.getUsers().subscribe((data: any) => {
      if (data) {
        this.users = data.data;
      }
    });
  }

  openDeleteModal(user) {
    this.openDelete('USER', user);
  }

  openDelete(itemType, user): void {
    const modalRef = this.modalService.open(GenericDeleteConfirmationComponent, {
      backdropClass: '',
      backdrop: 'static',
      keyboard: false
    });

    (modalRef.componentInstance as GenericDeleteConfirmationComponent).itemDeleting = user.first_name;
    (modalRef.componentInstance as GenericDeleteConfirmationComponent).itemType = itemType;
    modalRef.componentInstance.confirmed.subscribe(() => {
        this.deleteExpense(user.user_ref, modalRef);
    });
  }

  deleteExpense(id, modalRef) {
    this.service.deleteUser(id).subscribe(() => {
        if (modalRef) { modalRef.close(); }
        this.listUsers();
      },
      error => {
        if (modalRef) { modalRef.close(); }
      }
    );
}

  fetchingUsersProgress() {
    this.setTimeProgress = setInterval(() => {
      if (this.fetchUserProgress < 90) {
        this.fetchUserProgress += 10;
      }
    }, 1000);
  }

}
