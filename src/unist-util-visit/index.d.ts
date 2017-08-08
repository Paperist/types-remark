// Type definitions for unist v1.1.3
// Project: https://github.com/syntax-tree/unist-util-visit
// Definitions by: 3846masa <https://github.com/3846masa>
// Definitions:

declare module 'unist-util-visit' {
  import { UNIST } from 'unist';

  namespace Visit {
    interface Visitor {
      /**
       * Invoked when a node (when `type` is given, matching `type`) is found.
       *
       * @param   node    Found node
       * @param   index   Position of `node` in `parent`
       * @param   parent  Parent of `node`
       * @return          When `false`, visiting is immediately stopped.
       */
      (node: UNIST.Node, index?: number, parent?: UNIST.Parent): boolean;
    }
  }

  interface Visit {
    /**
     * Visit nodes. Optionally by node type. Optionally in reverse.
     *
     * @param   node    Node to search
     * @param   visitor Visitor invoked when a node is found
     * @param   reverse When falsey, checking starts at the first child and continues through to later children. When truthy, this is reversed.
     */
    (node: UNIST.Node, visitor: Visit.Visitor, reverse?: boolean): void;
    /**
     * Visit nodes. Optionally by node type. Optionally in reverse.
     *
     * @param   node    Node to search
     * @param   type    Node type
     * @param   visitor Visitor invoked when a node is found
     * @param   reverse When falsey, checking starts at the first child and continues through to later children. When truthy, this is reversed.
     */
    (
      node: UNIST.Node,
      type: string,
      visitor: Visit.Visitor,
      reverse?: boolean
    ): void;
  }

  var Visit: Visit;
  export = Visit;
}
