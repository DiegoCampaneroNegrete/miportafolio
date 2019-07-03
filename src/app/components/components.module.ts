//componente
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations : 
    [
        FooterComponent,
        NavbarComponent
    ],
    exports : 
    [
        FooterComponent,
        NavbarComponent
    ],
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule{}