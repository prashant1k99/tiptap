export declare class Node {
  constructor(options?: object);
  type: string;
  view: any;
  schema: any;
  command(): () => void;
}
