/// <reference types="node" />

declare module 'stream' {
    const Stream: NodeJS.ReadWriteStream;
    export default Stream;
  }
  

declare module 'crypto' {
  export * from 'crypto-browserify';
}


