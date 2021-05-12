import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product/product.model';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): Product[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();
    let searchArray: string[] = searchText.split(' ');

    items = items.filter((it) => {
      let x = false;
      searchArray.some((t) => {
        x = it.name.toLocaleLowerCase().includes(t);
        if (!x) {
          return true;
        }
      });
      return x;
    });

    return items;
  }
}
