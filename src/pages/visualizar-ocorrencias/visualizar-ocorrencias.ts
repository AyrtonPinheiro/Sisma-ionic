import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalhesOcorrenciaPage } from '../detalhes-ocorrencia/detalhes-ocorrencia';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

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
   listOcorrencias: any[];



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    /*
      this.listOcorrencias =
    [
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
    */
    this.http.get('http://apisisma.herokuapp.com/barramento/ocorrencias')
      .map(res => res.json())
      .subscribe(data => {
        this.listOcorrencias = data;
        });
    //this.params = this.listOcorrencias[2];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarOcorrenciasPage');
  }

  goToDetalhes(id, local, descricao, foto){
    this.navCtrl.push(DetalhesOcorrenciaPage,  {
    paramId: id, paramLocal: local, paramDescricao: descricao, paramFoto: foto
     });

  }

}
