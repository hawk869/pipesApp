import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
// import "primeicons/primeicons.css";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] | undefined;

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Textos y Fechas',
                        icon: 'pi pi-align-center'
                    },
                    {
                        label: 'Numeros',
                        icon: 'pi pi-dollar'
                    },
                    {
                        label: 'No comunes',
                        icon: 'pi pi-globe'
                    }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog'
            }
        ];
    }
}
