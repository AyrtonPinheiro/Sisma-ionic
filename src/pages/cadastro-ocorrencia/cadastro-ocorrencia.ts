import { Component } from '@angular/core';
import  { Validators, FormBuilder} from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

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
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams, public http: Http) {
    this.ocorrencia = this.formBuilder.group({
      local:['', Validators.required],
      descricao:['', Validators.required],
      foto:['', Validators.required]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroOcorrenciaPage');
  }
postOcorrencia(){
  let headers = new Headers({
    'Content-Type': 'application/json'
  });
  let options = new RequestOptions({ headers: headers });

  this.http
  .post('http://apisisma.herokuapp.com/barramento/ocorrencias',
    JSON.stringify(this.ocorrencia.value), options)
    .subscribe(console.log, console.log);
  console.log(this.ocorrencia.value);
  //https://apisisma.herokuapp.com/api/ocorrencias
}
}
