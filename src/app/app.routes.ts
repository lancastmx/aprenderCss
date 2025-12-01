import { Routes } from '@angular/router';
import { SelectoresYespecificidadComponent } from './pages/selectores-yespecificidad/selectores-yespecificidad.component';
import { AprenderTsComponent } from './pages/aprender-ts/aprender-ts.component';
export const routes: Routes = [
    {
        path: '',
        component: SelectoresYespecificidadComponent
    },
    {
        path: 'aprender-ts',
        component: AprenderTsComponent
    }
];
