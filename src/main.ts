import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { initializeApp } from "firebase/app";
import { importProvidersFrom } from "@angular/core";
import { IonicModule } from "@ionic/angular";

const firebaseConfig = {
  apiKey: "AIzaSyAuPuuRyLiGEHJSHcxncqrzSfcz-n95MtE",
  authDomain: "contact-esiea-e4464.firebaseapp.com",
  projectId: "contact-esiea-e4464",
  databaseURL: "https://contact-esiea-e4464-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "contact-esiea-e4464.appspot.com",
  messagingSenderId: "200549312935",
  appId: "1:200549312935:web:8dddcc437be16819ee2e82"
};

initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy
    },
      importProvidersFrom(IonicModule.forRoot({innerHTMLTemplatesEnabled: true})),
      provideIonicAngular(),
      provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
