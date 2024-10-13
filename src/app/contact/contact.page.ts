import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { addIcons } from "ionicons";
import { addCircle } from "ionicons/icons";
import { Router } from "@angular/router";
import { ContactService, IContact } from "../core/services/contact/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ContactPage implements OnInit {
  public contacts: IContact[] = [];

  constructor(private router: Router, private contactService: ContactService) {
    addIcons({addCircle})
  }

  ngOnInit() {
    this.contactService.getAllContact()
      .then((contacts: IContact[]) => {
        console.log('On Init')
        this.contacts = contacts;
      });
  }

  ionViewWillEnter() {
    this.contactService.getAllContact()
      .then((contacts: IContact[]) => {
        console.log('On View Will Enter')
        this.contacts = contacts;
      });
  }

  public goToNewContactPage(): void {
    this.router.navigate(['/contact/new']);
  }

}
