import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisualizarOcorrenciasPage } from '../pages/visualizar-ocorrencias/visualizar-ocorrencias';
import { CadastroOcorrenciaPage } from '../pages/cadastro-ocorrencia/cadastro-ocorrencia';
import { DetalhesOcorrenciaPage } from '../pages/detalhes-ocorrencia/detalhes-ocorrencia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisualizarOcorrenciasPage,
    CadastroOcorrenciaPage,
    DetalhesOcorrenciaPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisualizarOcorrenciasPage,
    CadastroOcorrenciaPage,
    DetalhesOcorrenciaPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
