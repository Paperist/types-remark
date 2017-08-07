// Type definitions for remark-parse v4.0.0
// Project: https://github.com/wooorm/remark/tree/master/packages/remark-parse
// Definitions by: 3846masa <https://github.com/3846masa>
// Definitions:

declare module 'remark-parse' {
  import { UNIST } from 'unist';

  namespace RemarkParse {
    interface Add {
      (node: UNIST.Node, parent?: UNIST.Node): UNIST.Node;
      test(): UNIST.Location;
      reset(node: UNIST.Node, parent?: UNIST.Node): UNIST.Node;
    }

    interface Eat {
      (subvalue: string): RemarkParse.Add;
    }

    interface Locator {
      (value: string, fromIndex: number): number;
    }

    interface TokenizerFunction {
      (eat: RemarkParse.Eat, value: string, silent?: boolean):
        | UNIST.Node
        | boolean
        | undefined;
    }

    interface Tokenizer extends TokenizerFunction {
      locator: Locator;
      onlyAtStart?: boolean;
      notInBlock?: boolean;
      notInList?: boolean;
      notInLink?: boolean;
    }

    interface RemarkParser {
      prototype: {
        blockTokenizers: { [key: string]: Tokenizer };
        blockMethods: string[];
        inlineTokenizers: { [key: string]: Tokenizer };
        inlineMethods: string[];
      };
    }
  }

  interface RemarkParse {
    (): () => void;
    Parser: RemarkParse.RemarkParser;
  }

  var RemarkParse: RemarkParse;
  export = RemarkParse;
}
