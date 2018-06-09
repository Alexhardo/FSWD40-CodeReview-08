import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { Services } from '@angular/core/src/view';

export const firebaseConfig = {

  apiKey: "AIzaSyBNgPiBPe8xXwI7A9aT7s8Sd0WtMyeLAYo",
    authDomain: "codersdating-196e1.firebaseapp.com",
    databaseURL: "https://codersdating-196e1.firebaseio.com",
    projectId: "codersdating-196e1",
    storageBucket: "codersdating-196e1.appspot.com",
    messagingSenderId: "575586072719"
    
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
   ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }






