import { Component, OnInit } from '@angular/core';
import { UfserviceService } from 'src/app/service/ufservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  estados:any;

  constructor(private ufService: UfserviceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ufService.getUF().subscribe(data=>{
      this.estados = data;
      console.log(data);
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
