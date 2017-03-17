import { Component } from '@angular/core';
import  { Validators, FormBuilder} from '@angular/forms';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import  { HomePage } from '../home/home';

/*
  Generated class for the CadastroOcorrencia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastro-ocorrencia',
  templateUrl: 'cadastro-ocorrencia.html'
})
export class CadastroOcorrenciaPage {
  ocorrencia : any = {};

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.ocorrencia = this.formBuilder.group({
      local:['', Validators.required],
      descricao:['', Validators.required],
      foto:['', Validators.required]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroOcorrenciaPage');
  }

      //CADASTRO
postOcorrencia(){
  let headers = new Headers({
    'Content-Type': 'application/json'
  });
  let options = new RequestOptions({ headers: headers });

  this.http
  .post('http://apisisma.herokuapp.com/barramento/ocorrencias',
    JSON.stringify(this.ocorrencia.value), options)
    .subscribe(() =>  this.showConcluido(), () =>  this.showErro());
    //.subscribe(console.log(), console.log());
  console.log(this.ocorrencia.value);
  //https://apisisma.herokuapp.com/api/ocorrencias
}

  //MENSAGENS ALERTA
showConcluido(){
    let alert = this.alertCtrl.create({
        title: 'Sucesso!',
        subTitle: 'Sua ocorrência foi cadastrada.',
        buttons: [
          {
          text: 'OK',
          handler: data => {this.navCtrl.push(HomePage);}
          }
        ]
      });
      alert.present();
}
showErro(){
    let alert = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'Sua ocorrência não foi cadastrada. Tente novamente.',
        buttons: [
          {
          text: 'OK',
          handler: data => {this.navCtrl.push(HomePage);}
          }
        ]
      });
      alert.present();
}
}
