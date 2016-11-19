import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Pacient } from '../../../interfaces/pacient';
import { Gender } from '../../../interfaces/gender';
import {DiabetesType} from '../../../interfaces/diabetesType';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items : Pacient[];

  constructor(public navCtrl: NavController) {
    this.items = [
       {
         id : 1,
         firstName: 'Gigel',
         lastName: 'dotCom',
         gender : Gender.Male,
         birthDate : new Date(),
         diagnosticDate : new Date(),
         diabetesType : DiabetesType.Type1
      }
    ];
  }
}
