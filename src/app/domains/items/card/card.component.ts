import { Component, inject} from '@angular/core';
import { Cartas } from '../../../shared/models/cartas';
import { CartasSerService } from '../../../shared/services/cartas-ser.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cartasService = inject(CartasSerService);

  listaCartas = this.cartasService.listaItems;

  cardDetail: any;

  isGridView = true;

  // Función para mostrar el detalle de la carta
  showCardDetail(card: any) {
    this.cardDetail = card;
  }

  // Función para cerrar la pestaña de detalles
  closeDetails() {
    this.cardDetail = null;
  }

  // Función para cambiar entre vista de lista y cuadrícula
  toggleView() {
    this.isGridView = !this.isGridView;
  }

}
