import { Injectable } from '@angular/core';
import { getDatabase, ref, set, onValue } from 'firebase/database';

export interface IContact {
  fullName: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  public saveContact(contact: IContact): Promise<void> {
    return set(ref(getDatabase(), 'contacts/' + contact.phoneNumber), {
      fullName: contact.fullName,
      phoneNumber: contact.phoneNumber,
    });
  }

  public getAllContact(): Promise<IContact[]> {
    return new Promise((resolve, reject) => {
      const contactsRef = ref(getDatabase(), 'contacts/');
      onValue(contactsRef, (snapshot) => {
        const data = snapshot.val();
        const contacts: IContact[] = [];
        Object.entries(data).forEach(value => {
          contacts.push(value[1] as IContact);
        });
        resolve(contacts);
      });
    });
  }
}
