import { AttributeServiceService } from './../../../services/attribute-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericDeleteConfirmationComponent } from '../modals';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  attributes;
  fetchingUsers = false;
  setTimeProgress;
  fetchUserProgress = 10;
  constructor(private service: AttributeServiceService, private modalService: NgbModal) { }

  ngOnInit() {
    this.listAttributes();
  }

  listAttributes() {
    this.fetchingUsers = true;
    this.fetchingUsersProgress();
    this.service.getAttribute().subscribe((data: any) => {
      if (data) {
        let result = data.data;
        result = result.filter(value => (value !== 'user_id'));
        result = result.filter(value => value !== 'id');
        this.attributes = result;
      }
    });
  }

  openDeleteModal(attribute) {
    console.log(attribute);
    this.openDelete('ATTRIBUTE', attribute);
  }

  openDelete(itemType, attribute): void {
    const modalRef = this.modalService.open(GenericDeleteConfirmationComponent, {
      backdropClass: '',
      backdrop: 'static',
      keyboard: false
    });

    (modalRef.componentInstance as GenericDeleteConfirmationComponent).itemDeleting = attribute;
    (modalRef.componentInstance as GenericDeleteConfirmationComponent).itemType = itemType;
    modalRef.componentInstance.confirmed.subscribe(() => {
        this.deleteExpense(attribute, modalRef);
    });
  }

  deleteExpense(id, modalRef) {
    this.service.deleteAttribute(id).subscribe(() => {
        if (modalRef) { modalRef.close(); }
        this.listAttributes();
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
