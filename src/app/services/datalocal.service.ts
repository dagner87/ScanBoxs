import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root',
})
export class DatalocalService {
  guardados: Registro[] = [];

  constructor() {}

  saveRegister(format: string, text: string) {
    const newRegister = new Registro(format, text);

    this.guardados.unshift(newRegister);
  }
}
