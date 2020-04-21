import { ExtensionManager } from "../Utils";

export interface Options {
  editorProps?: object;
  readonly editable?: boolean;
  readonly autoFocus?: boolean;
  readonly extensions?: any[];
  content?: string;
  topNode?: string;
  emptyDocument?: {
    type?: string;
    content?: object[];
  };
  useBuiltInExtensions?: boolean;
  readonly disableInputRules?: boolean;
  disablePasteRules?: boolean;
  dropCursor?: object;
  readonly parseOptions?: object;
  readonly injectCSS?: boolean;
  onInit(): object | void;
  onTransaction(): object | void;
  onUpdate(): object | void;
  onFocus(): object | void;
  onBlur(): object | void;
  onPaste(): object | void;
  onDrop(): object | void;
}

export declare class Editor {
  constructor(options: Options | object): Editor;
  init(options: Options): void;
  setOptions(options: Options): void;
  builtInExtensions(): any[];
  state(): EditorState<Schema<any, any>> | null;
  createExtensions(): ExtensionManager;
  createPlugins(): any;
  createKeymaps(): Plugin<any, any>[];
  createInputRules(): any;
  createPasteRules(): any;
  createCommands(): any;
  createNodes(): any;
  createMarks(): any;
  createSchema(): Schema<any, any>;
  createState(): EditorState<Schema<any, any>>;
  createDocument(content: any, parseOptions?: any): false | ProsemirrorNode<Schema<any, any>>;
  createView(): EditorView<Schema<any, any>>;
  setParentComponent(component?: any): void;
  initNodeViews({ parent, extensions }: { parent: any; extensions: any }): any;
  dispatchTransaction(transaction: any): void;
  emitUpdate(transaction: any): void;
  resolveSelection(position?: any): any;
  focus(position?: any): void;
  setSelection(from?: number, to?: number): void;
  blur(): void;
  getSchemaJSON(): any;
  getHTML(): string;
  getJSON(): {
    [key: string]: any;
  };
  setContent(content?: {}, emitUpdate?: boolean, parseOptions: any): void;
  clearContent(emitUpdate?: boolean): void;
  setActiveNodesAndMarks(): void;
  getMarkAttrs(type?: any): any;
  isActive: object;
  registerPlugin(plugin?: any): void;
  unregisterPlugin(name?: any): void;
  destroy(): void;
}
