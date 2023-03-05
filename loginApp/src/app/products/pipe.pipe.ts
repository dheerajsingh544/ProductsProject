import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterPipe',  
  pure:false
})
export class PipePipe implements PipeTransform {

  transform(value:any, filterString:string): any {
   
    if(filterString===''){
      return value;
    }
    return value.filter(function(search){
      return search.name.toLowerCase().indexOf(filterString.toLowerCase())>-1;
    });

  }

}