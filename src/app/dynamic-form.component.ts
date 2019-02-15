import { AfterViewInit, Component, Input, OnInit }  from '@angular/core';

import { DadosComplementaresBase }              from './DadosComplementares-base';
import { DadosComplementaresControlService }    from './DadosComplementares-control.service';
import { FormGroup }                 from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ DadosComplementaresControlService ]
})
export class DynamicFormComponent implements OnInit {

 
  @Input() DadosComplementaress: DadosComplementaresBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: DadosComplementaresControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.DadosComplementaress);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
