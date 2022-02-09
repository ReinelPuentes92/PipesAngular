import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upper'
})

export class UppercasePipe implements PipeTransform{
    transform(value: string, atUpper: boolean = true): string {
        //validacion tradicional
        /*if (atUpper)
        {
            return value.toUpperCase();
        } else{
            return value.toLocaleLowerCase();
        }*/        

        //validacion ternaria
        return (atUpper) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}