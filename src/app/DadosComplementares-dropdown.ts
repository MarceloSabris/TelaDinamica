import { DadosComplementaresBase } from './DadosComplementares-base';

export class DropdownDadosComplementares extends DadosComplementaresBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
