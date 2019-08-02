import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loadingfull',
  templateUrl: './loadingfull.component.html',
  styleUrls: ['./loadingfull.component.scss']
})
export class LoadingfullComponent {

  @Input('active') active: any = false;

  constructor() { }

}
