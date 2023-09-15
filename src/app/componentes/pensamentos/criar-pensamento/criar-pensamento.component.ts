import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private servive: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){

    this.servive.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })

  }


  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
