export declare class Extension {
  constructor(options?: {});
  init(): any;
  bindEditor(editor?: any): void;
  name: any;
  type: string;
  update: () => void;
  defaultOptions: object;
  plugins: any[];
  inputRules(): any[];
  pasteRules(): any[];
  keys(): object;
}
