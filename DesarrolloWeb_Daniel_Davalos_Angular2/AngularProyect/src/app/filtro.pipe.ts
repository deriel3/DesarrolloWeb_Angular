import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[] , searchText: string): any[]  {
      if(!items) return [];
      if(!searchText) return items;
      console.log(items[0]["nombre"]);
  searchText = searchText;
  return items.filter( it => {
        return it.toString().toLowerCase().includes(searchText);
      });
  }

}
