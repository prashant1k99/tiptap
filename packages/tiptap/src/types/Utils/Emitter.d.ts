export declare class Emitter {
  on(event: any, fn: any): this;
  emit(event: any, ...args: any[]): this;
  off(event: any, fn: any, ...args: any[]): this;
}
