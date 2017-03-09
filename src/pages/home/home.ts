import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { VisualizarOcorrenciasPage } from '../visualizar-ocorrencias/visualizar-ocorrencias';
import { CadastroOcorrenciaPage } from '../cadastro-ocorrencia/cadastro-ocorrencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
visualizarOcorrenciasPage = VisualizarOcorrenciasPage;
cadastroOcorrenciaPage = CadastroOcorrenciaPage
  constructor(public navCtrl: NavController) {

  }

}
