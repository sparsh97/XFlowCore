import {Pipe,PipeTransform} from '@angular/core';
 
@Pipe({
 
    name:'NullData'
})
export class NullDataPipe implements PipeTransform{
    transform(value: any) {
        if(value == null){
            return "NA";
        }
        return value;
    }
}