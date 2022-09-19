import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  allContacts: ContactData[] = [];
  searchContact = '';
  constructor(private _contactsService: ContactsService) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this._contactsService.getAllContacts().subscribe((res: ContactData[]) => {
      console.log(res);
      this.allContacts = res;
    });
  }
}

export interface ContactData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressData;
  phone: string;
  website: string;
  company: CompanyData;
}

export interface AddressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface CompanyData {
  name: string;
  catchPrase: string;
  bs: string;
}
