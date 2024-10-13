import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';

export interface IUser {
  fullName: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  public signUpWithEmailAndPassword(user: IUser): Promise<boolean | unknown> {
    const database = getDatabase();

    return new Promise((resolve, reject) => {

      createUserWithEmailAndPassword(getAuth(), user.email, user.password)
        .then((userCreated: UserCredential) => {

          set(ref(database, 'users/' + userCreated.user.uid), {
            email: user.email,
            fullName: user.fullName,
          }).then(() => resolve(true))
            .catch((error) => reject(false));

        }).catch((error) =>
        reject(error));
    });
  }

  public signInWithEmailAndPassword(user: Partial<IUser>): Promise<UserCredential> {
    return signInWithEmailAndPassword(getAuth(), user.email as string, user.password as string);
  }
}
