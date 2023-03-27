import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, bookName:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || bookName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[bookName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
