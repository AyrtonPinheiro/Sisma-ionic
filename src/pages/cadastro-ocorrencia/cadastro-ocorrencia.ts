import { Component } from '@angular/core';
import  { Validators, FormBuilder} from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams) {
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
  console.log(this.ocorrencia.value);
}
}
