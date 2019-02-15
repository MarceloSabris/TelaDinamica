export class DadosComplementaresBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  leftControl?:string;
  topControl?:string ;
  positionTopLabel?:string;
  positionLeftLabel?:string;
  WidthControlText?:string;

  constructor(options: {
     value?: T,
      key?: string,
       label?: string,
      required?: boolean,
      order?: number,
      controlType?: string , 
      leftControl?:string, 
      topControl?:string  , 
      positionTopLabel?:string,
      positionLeftLabel?:string, 
      WidthControlText?:string 
     
      
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ''; 
    this.leftControl = options.leftControl; 
   this.topControl = options.topControl;
   this.positionTopLabel = options.positionTopLabel;
   this.positionLeftLabel = options.positionLeftLabel;
  this.WidthControlText = options.WidthControlText;     
  }
}
