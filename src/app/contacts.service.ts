import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactData } from './contacts-page/contacts-page.component';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<ContactData[]> {
    return this.http.get<ContactData[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
