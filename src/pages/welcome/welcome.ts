import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';
import { SignupPage } from '../../pages/signup/signup';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){
  	this.navCtrl.push(TabsPage);
  }

  signup(){
  	this.navCtrl.push(SignupPage);	
  }

}
