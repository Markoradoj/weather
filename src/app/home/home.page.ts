import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton,IonButtons,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) {}
//methods that allow to navigate the page if a user presses a button

  goWeather() {
    this.router.navigate(['/weather']);
  }

  goJoin(){
    this.router.navigate(['/join']);
  }

}

