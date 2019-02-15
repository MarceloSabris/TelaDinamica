import { Component, Input } from '@angular/core';

import { DadosComplementaresBase }     from './DadosComplementares-base';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'app-DadosComplementares',
  templateUrl: './dynamic-form-DadosComplementares.component.html'
})
export class DynamicFormDadosComplementaresComponent {
  @Input() DadosComplementares: DadosComplementaresBase<any>;
  @Input() form: FormGroup;
 get isValid() { return this.form.controls[this.DadosComplementares.key].valid; }
}
