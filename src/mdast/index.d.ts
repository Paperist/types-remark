// Type definitions for mdast v2.1.0
// Project: https://github.com/syntax-tree/mdast
// Definitions by: 3846masa <https://github.com/3846masa>
// Definitions:

declare module 'mdast' {
  import { UNIST } from 'unist';

  export namespace MDAST {
    type AlignType = 'left' | 'right' | 'center' | null;
    type ReferenceType = 'shortcut' | 'collapsed' | 'full';

    interface Root extends UNIST.Parent {
      type: 'root';
    }

    interface Paragraph extends UNIST.Parent {
      type: 'paragraph';
    }

    interface Blockquote extends UNIST.Parent {
      type: 'blockquote';
    }

    interface Heading extends UNIST.Parent {
      type: 'heading';
      depth: 1 | 2 | 3 | 4 | 5 | 6;
    }

    interface Code extends UNIST.Text {
      type: 'code';
      lang?: string;
    }

    interface InlineCode extends UNIST.Text {
      type: 'inlineCode';
    }

    interface YAML extends UNIST.Text {
      type: 'yaml';
    }

    interface HTML extends UNIST.Text {
      type: 'html';
    }

    interface List extends UNIST.Parent {
      type: 'list';
      ordered: boolean;
      start?: number;
      loose: boolean;
    }

    interface ListItem extends UNIST.Parent {
      type: 'listItem';
      loose: boolean;
      checked?: boolean;
    }

    interface Table extends UNIST.Parent {
      type: 'table';
      align: MDAST.AlignType[];
      children: MDAST.TableRow[];
    }

    interface TableRow extends UNIST.Parent {
      type: 'tableRow';
      children: MDAST.TableCell[];
    }

    interface TableCell extends UNIST.Parent {
      type: 'tableCell';
    }

    interface ThematicBreak extends UNIST.Node {
      type: 'thematicBreak';
    }

    interface Break extends UNIST.Node {
      type: 'break';
    }

    interface Emphasis extends UNIST.Parent {
      type: 'emphasis';
    }

    interface Strong extends UNIST.Parent {
      type: 'strong';
    }

    interface Delete extends UNIST.Parent {
      type: 'delete';
    }

    interface Link extends UNIST.Parent {
      type: 'link';
      title?: string;
      url: string;
    }

    interface Image extends UNIST.Node {
      type: 'image';
      title?: string;
      alt?: string;
      url: string;
    }

    interface Footnote extends UNIST.Parent {
      type: 'footnote';
    }

    interface LinkReference extends UNIST.Parent {
      type: 'linkReference';
      identifier: string;
      referenceType: MDAST.ReferenceType;
    }

    interface ImageReference extends UNIST.Node {
      type: 'imageReference';
      identifier: string;
      referenceType: MDAST.ReferenceType;
      alt?: string;
    }

    interface FootnoteReference extends UNIST.Node {
      type: 'footnoteReference';
      identifier: string;
    }

    interface Definition extends UNIST.Node {
      type: 'definition';
      identifier: string;
      title?: string;
      url: string;
    }

    interface FootnoteDefinition extends UNIST.Parent {
      type: 'footnoteDefinition';
      identifier: string;
    }

    interface TextNode extends UNIST.Text {
      type: 'text';
    }
  }
}
