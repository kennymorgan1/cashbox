import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttributeServiceService {
  private attributeUrl = '/api/v1/attribute';
  constructor(private http: HttpClient) { }

  getAttribute() {
    return this.http.get<any>(`${this.attributeUrl}`);
  }

  addAttribute(data: any) {
    return this.http.post<any>(`${this.attributeUrl}`, data);
  }

  updateAttribute(data: any) {
    return this.http.put<any>(`${this.attributeUrl}`, data);
  }

  deleteAttribute() {
    return this.http.delete<any>(`${this.attributeUrl}`);
  }
}
