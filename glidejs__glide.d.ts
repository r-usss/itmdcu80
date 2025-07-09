// glidejs_glide.d.ts
declare module '@glidejs/glide' {
    export default class Glide {
      constructor(selector: string, options?: any);
      mount(): void;
      destroy(): void;
      // Add other methods and properties as needed
    }
  }