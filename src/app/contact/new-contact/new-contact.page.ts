import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { addIcons } from "ionicons";
import { caretBack } from "ionicons/icons";
import { ContactService, IContact } from "../../core/services/contact/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class NewContactPage implements OnInit {
  public contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)]
    )
  })

  constructor(private contactService: ContactService, private router: Router) {
    addIcons({caretBack})
  }

  ngOnInit() {
  }

  public onSave(): void {
    this.contactService.saveContact(this.contactForm.value as unknown as IContact)
      .then(() => {
      this.router.navigate(['/contact']);
    }).catch((error) => {
      console.log(error);
    })
  }
}
