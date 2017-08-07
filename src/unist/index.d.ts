// Type definitions for unist v1.0.1
// Project: https://github.com/syntax-tree/unist
// Definitions by: 3846masa <https://github.com/3846masa>
// Definitions:

declare module 'unist' {
  export namespace UNIST {
    interface Node {
      type: string;
      data?: UNIST.Data;
      position?: UNIST.Location;
    }

    interface Data {
      [key: string]: any;
    }

    interface Location {
      start: UNIST.Position;
      end: UNIST.Position;
      indent?: number;
    }

    interface Position {
      line: number;
      column: number;
      offset?: number;
    }

    interface Parent extends Node {
      children: Node[];
    }

    interface Text extends Node {
      value: string;
    }
  }
}
