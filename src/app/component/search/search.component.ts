import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/product/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  products: Product[];
  page: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.get().subscribe((data) => {
      this.products = data;
    });
  }
}
