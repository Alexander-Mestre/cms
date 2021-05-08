import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  //public contactCard: Contact = new Contact();
  
  @Input() contact: Contact | undefined;
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
