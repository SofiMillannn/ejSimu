import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonImg, IonLabel, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonLabel]
})
export class InicioPage implements OnInit {
  datos = {
    imagen: 'favicon.png'
      texto:
      color:

  }
  constructor() { }

  ngOnInit() {
  }

}
