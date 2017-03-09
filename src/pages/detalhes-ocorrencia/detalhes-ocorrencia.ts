import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VisualizarOcorrenciasPage } from '../visualizar-ocorrencias/visualizar-ocorrencias'

/*
  Generated class for the DetalhesOcorrencia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalhes-ocorrencia',
  templateUrl: 'detalhes-ocorrencia.html'
})
export class DetalhesOcorrenciaPage {

  local: string = this.navParams.get('local');
  descricao: string = this.navParams.get('descricao');
  foto: string = this.navParams.get('foto');

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesOcorrenciaPage');
  }
}
