import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',  
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  @Input('product') product: Product;
  @Input('searchText') searchText: string;
  constructor() {}

  ngOnInit(): void {}
}
