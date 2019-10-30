import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userUrl = 'https://kennymorgan1-cashbox.herokuapp.com/api/v1/user';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(`${this.userUrl}`);
  }

  addUser(data: any) {
    return this.http.post<any>(`${this.userUrl}`, data);
  }

  updateUser(data: any, id: string) {
    return this.http.put<any>(`${this.userUrl}/${id}`, data);
  }

  updateUserAttribute(data: any, id: string) {
    return this.http.put<any>(`${this.userUrl}/attribute/${id}`, data);
  }

  deleteUser(id: string) {
    return this.http.delete<any>(`${this.userUrl}/${id}`);
  }
}
