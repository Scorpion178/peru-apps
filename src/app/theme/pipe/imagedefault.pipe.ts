import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imagedefault'
})
export class ImagedefaultPipe implements PipeTransform {
    /*  Examples
    *   --> defautlimage:tipo de imagen default:carga o no:string de filtro que debe tener la url al inicio
    *   <img [src]="empresa.urlImage | imagedefault" alt="">
    */

    imgdefault: string = '';

    constructor() { }

    transform(
        image: any
    ): any {
        // Inicializa la imagen por default enviada al pipe
        this.imgdefault = 'assets/img/person-default.png';

        return this.filtroImagen(image);
    }

    filtroImagen(imagen: any) {
        let resp: string = '';
        if (imagen != null && imagen.length > 1) {
            resp = imagen;
        } else {
            resp = this.imgdefault;
        }
        return resp;
    }
}

