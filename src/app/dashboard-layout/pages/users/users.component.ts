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
  fetchingUsers = false;
  setTimeProgress;
  fetchUserProgress = 10;
  constructor(private service: UserServiceService, private modalService: NgbModal) { }

  ngOnInit() {
    this.listUsers();
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
        this.deleteExpense(user.id, modalRef);
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
