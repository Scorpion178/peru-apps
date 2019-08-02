import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UsuariosService } from '../../theme/services/usuarios.service';

// Detecta cambios en elementos o variables
import { merge } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  displayedColumns = ['id', 'nombres', 'opciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  tableconfig: any = {
    'current_page': 0,
    'from': 0,
    'last_page': 0,
    'next_page_url': null,
    'path': '/',
    'per_page': 0,
    'prev_page_url': null,
    'to': 0,
    'total': 0
  };

  // Interfaz
  loadtable: boolean = true;
  activeloadingfull: boolean = false;
  constructor(
    private _usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    /************************** Detecta los cambios de paginación (solo cuando hace click en los boton) **************************/
    merge(this.paginator.page)
      .pipe(
      startWith({}),
      switchMap(() => {
        this.loadtable = true;
        return this._usuariosService.getUsuarios(this.paginator.pageIndex + 1);
      }),
      map(data => {
        this.setTableconfig(data);
        this.loadtable = false;
        return data.data;
      }),
      catchError(() => {
        this.loadtable = false;
        return observableOf([]);
      })
      ).subscribe(data => {
        this.dataSource.data = data;
      });
    /************************** /Detecta los cambios de paginación **************************/
  }

  setTableconfig(data) {
    this.tableconfig = {
      'current_page': data.current_page,
      'from': data.from,
      'last_page': data.last_page,
      'next_page_url': data.next_page_url,
      'path': data.path,
      'per_page': data.per_page,
      'prev_page_url': data.prev_page_url,
      'to': data.to,
      'total': data.total
    };
  }

}
