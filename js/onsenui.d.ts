// Type definitions for Onsen UI 2
// Project: https://onsen.io/
// Definitions by: Fran Dios <https://github.com/frankdiox/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// module declaration
declare module 'onsenui' { 
  export = ons;
}

interface onsOptions {
  parentScope?: Object;
}

interface alertOptions {
  message?: string;
  messageHTML?: string;
  buttonLabel?: string;
  buttonLabels?: [string];
  primaryButtonIndex?: number;
  cancelable?: boolean;
  animation?: string;
  title?: string;
  modifier?: string;
  callback?: any;
  id?: string;
}

interface onsPlatform {
  /**
   * @param  {string} platform Name of the platform. Possible values are: "opera", "firefox", "safari", "chrome", "ie", "android", "blackberry", "ios" or "wp".
   * @description Sets the platform used to render the elements. Useful for testing.
   */
  select(platform: string): void;
  /**
   * @description Returns whether app is running in Cordova
   * @return {Boolean}
   */
  isWebView(): boolean;

  /**
   * @description Returns whether the OS is iOS
   * @return {Boolean}
   */
  isIOS(): boolean;

  /**
   * @description Returns whether the OS is Android
   * @return {Boolean}
