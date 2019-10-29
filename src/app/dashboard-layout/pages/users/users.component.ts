import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.service.getUsers().subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.users = data;
      }
    });
  }

}
