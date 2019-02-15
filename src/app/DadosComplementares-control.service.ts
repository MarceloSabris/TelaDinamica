import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DadosComplementaresBase } from './DadosComplementares-base';
import { Injectable }   from '@angular/core';

@Injectable()
export class DadosComplementaresControlService {
  constructor() { }

  toFormGroup(DadosComplementaress: DadosComplementaresBase<any>[] ) {
    let group: any = {};

    DadosComplementaress.forEach(DadosComplementares => {
      group[DadosComplementares.key] = DadosComplementares.required ? new FormControl(DadosComplementares.value || '', Validators.required)
                                              : new FormControl(DadosComplementares.value || '');
    });
    return new FormGroup(group);
  }
}
