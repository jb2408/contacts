import { Component, Input, OnInit } from '@angular/core';
import { ContactData } from '../contacts-page/contacts-page.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() contactData!: ContactData;
  constructor() {}

  ngOnInit(): void {}
  getFirstLetters(fullName: string) {
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2);
  }
}
