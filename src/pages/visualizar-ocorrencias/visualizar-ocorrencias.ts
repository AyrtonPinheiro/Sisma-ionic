import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalhesOcorrenciaPage } from '../detalhes-ocorrencia/detalhes-ocorrencia';

/*
  Generated class for the VisualizarOcorrencias page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-visualizar-ocorrencias',
  templateUrl: 'visualizar-ocorrencias.html'
})
export class VisualizarOcorrenciasPage {
  detalhesOcorrenciaPage = DetalhesOcorrenciaPage;

   params: any[];
   public ocorrencias: any[];
   listOcorrencias: any[];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ocorrencias = this.getOcorrencias();
    this.listOcorrencias = [
      {id: 1, local: "aqui mesmo", descricao: "torneira", foto: "torneira.png"},
      {id: 2, local: "lá", descricao: "cadeira", foto: "cadeira.png"},
      {id: 3, local: "não sei", descricao: "mesa", foto: "mesa.png"},
      {id: 4, local: "aqui mesmo", descricao: "torneira", foto: "torneira.png"},
      {id: 5, local: "lá", descricao: "cadeira", foto: "cadeira.png"},
      {id: 6, local: "não sei", descricao: "mesa", foto: "mesa.png"},
      {id: 7, local: "aqui mesmo", descricao: "torneira", foto: "torneira.png"},
      {id: 8, local: "lá", descricao: "cadeira", foto: "cadeira.png"},
      {id: 9, local: "não sei", descricao: "mesa", foto: "mesa.png"}

    ];
    this.params = this.listOcorrencias[2];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarOcorrenciasPage');
  }
  getOcorrencias() {
    return this.listOcorrencias;
  }
  goToDetalhes(){
    this.navCtrl.push(DetalhesOcorrenciaPage, this.listOcorrencias);
  }

}
