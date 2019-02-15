import { DadosComplementaresBase } from './DadosComplementares-base';

export class TextboxDadosComplementares extends DadosComplementaresBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
