import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonBackButton,IonInput, IonButtons,IonButton, IonContent, IonHeader, IonTitle, IonToolbar,IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
  standalone: true,
  imports: [IonBackButton,IonInput, IonButtons, IonButton,IonItem,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JoinPage implements OnInit {

  //constructors
  name: String = "";
  email: String = "";
  address: String = "";
  submitted = false;

  constructor() { }
//get 3 data types 
submitForm(){
  const userData = {
    name: this.name,
    email: this.email,
    address: this.address
  };
//create a local storage for theese items
  localStorage.setItem('userData',JSON.stringify(userData));
  this.submitted = true;

}

  ngOnInit() {
    
  }

}
