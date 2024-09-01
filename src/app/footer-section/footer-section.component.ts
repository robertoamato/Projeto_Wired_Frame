import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
  onButtonClick() {
    // Aqui você pode adicionar a lógica que deve ser executada quando o botão for clicado.
    console.log('Button clicked!');
  }
}