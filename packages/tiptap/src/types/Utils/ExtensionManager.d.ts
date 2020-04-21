export declare class ExtensionManager {
  constructor(extensions?: any[], editor: any);
  nodes: any;
  options: any;
  marks: any;
  plugins: any;
  keymaps({ schema }: { schema: any }): Plugin<any, any>[];
  inputRules({ schema, excludedExtensions }: { schema: any; excludedExtensions: any }): any;
  pasteRules({ schema, excludedExtensions }: { schema: any; excludedExtensions: any }): any;
  commands({ schema, view }: { schema: any; view: any }): any;
}
