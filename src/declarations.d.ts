declare module 'autosuggest-highlight/parse' {
    function parse(text: string, matches: number[][]): Array<{ text: string; highlight: boolean }>;
    export default parse;
  }
declare module 'lodash/throttle' {
    import { throttle } from 'lodash';
    export = throttle;
  }