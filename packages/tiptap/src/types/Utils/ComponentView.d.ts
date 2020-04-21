import Vue from "vue";

export declare class ComponentView {
  constructor(
    component: any,
    {
      editor,
      extension,
      parent,
      node,
      view,
      decorations,
      getPos
    }: {
      editor: any;
      extension: any;
      parent: any;
      node: any;
      view: any;
      decorations: any;
      getPos: any;
      captureEvents: boolean;
      dom: any;
      contentDom: any;
    }
  );
  createDom: any;
  update(node: any, decorations: any): boolean;
  updateComponentProps(props: any): void;
  updateAttrs(attrs: any): void;
  ignoreMutation(mutation: any): boolean;
  stopEvent(event: any): any;
  selectNode(): void;
  deselectNode(): void;
  getMarkPos(): any;
  destroy(): void;
}
