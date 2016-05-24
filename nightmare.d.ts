import {Promise} from 'es6-promise';

declare module nightmare {
  export class Nightmare {
    constructor (options?: Object);
    goto (url: string, headers?: Object): Nightmare;
    back (): Nightmare;
    forward (): Nightmare;
    refresh (): Nightmare;
    click (selector: string): Nightmare;
    type (selector: string, text: string): Nightmare;
    upload (selector: string, path: string): Nightmare;
    scrollTo (top: number, left: number): Nightmare;
    inject (type: string, file: string): Nightmare;
    wait <T> (fn: (...values: T[]) => boolean, ...values: T[]): Nightmare;
    wait (ms: number): Nightmare;
    wait (selector: string): Nightmare;
    wait <T> (fn: (...values: T[]) => boolean, ...values: T[]): Nightmare;
    use (plugin: (nightmare: Nightmare) => void): Nightmare;
    exists (selector: string): Nightmare;
    visible (selector: string): Nightmare;
    screenshot (path: string): Nightmare;
    pdf (path: string, options?: Object): Nightmare;
    title (): Nightmare;
    url (): Nightmare;
    authentication (user: string, password: string): Nightmare;
    useragent (useragent: string): Nightmare;
    viewport (width: number, height: number): Nightmare;
    then <T> (onFulfilled?: (value: any) => T, onRejected?: (value: any) => T): Promise<T>;
    catch <T> (onRejected?: (error: any) => T): Promise<T>;
  }

  // TODO: Nightmare constructor options
  // TODO: pdf options
}