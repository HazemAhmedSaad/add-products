import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      image: 'https://picsum.photos/id/237/200/300',
      title: 'Product 1',
      quantity: 0
    },
    {
      image: 'https://picsum.photos/id/238/200/300',
      title: 'Product 2',
      quantity: 15
    },
    {
      image: 'https://picsum.photos/id/239/200/300',
      title: 'Product 3',
      quantity: 1
    },
    {
      image: 'https://picsum.photos/id/240/200/300',
      title: 'Product 4',
      quantity: 2
    },
    {
      image: 'https://picsum.photos/id/241/200/300',
      title: 'Product 5',
      quantity: 6
    }
  ]
}
