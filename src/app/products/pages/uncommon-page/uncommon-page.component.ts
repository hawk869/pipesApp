import { Component } from '@angular/core';
import {interval, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect Pipe
  public name: string = 'Daniel';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

//   i18nPlural Pipe
  public clients: string[] = ['Maria','Daniel','Juan','Fernando','Diana','Valentina',];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }
  deleteClient(): void {
    this.clients.shift();
  }

//   KeyValue pipe
  public person = {
    name: 'Daniel',
    age: 37,
    address: 'Bogota, Colombia'
  }

//   async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa')
    }, 3500);
  })

}
