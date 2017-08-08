# @paperist/types-remark

[![LICENSE][license-badge]][license]
[![standard-readme compliant][standard-readme-badge]][standard-readme]

[license]: https://3846masa.mit-license.org
[standard-readme]: https://github.com/RichardLitt/standard-readme

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIGNIUk0AAHomAACAhAAA%2BgAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAVUExURSBTICJcIiNgIiZoJTuhNyt3Kf///%2BCqxSgAAAAGdFJOUwpclbn%2B4Fj6/H8AAAABYktHRAZhZrh9AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4AkEEjEV7MDQQwAAAGBJREFUCNc1TUEKgDAMi07vE/Q%2BRD8g%2B4BbvAvi/79iMjDQJm1CC6BbDzRsZI3incIpYeYFhCaYnLiyPYnYkwWZFWoFHrSuttCmmbwXh0eJQYVON4JthZTxCzzAmyb8%2BAAKXBRyN6RyZQAAAABJRU5ErkJggg==
[standard-readme-badge]: https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square

> TypeScript type definitions for [wooorm/remark] plugins.

[wooorm/remark]: https://github.com/wooorm/remark

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Supported Packages](#supported-packages)
- [Contribute](#contribute)
- [License](#license)

## Install

```bash
npm i @paperist/types-remark
```

**NOTE** |
You should **NOT** install `mdast`, `unist` packages. It is not exists on npm.

## Usage

First, you should set `@paperist/types-remark` to `types` in `tsconfig.json`.

```json
{
  "compilerOptions": {
    "types": ["node", "@paperist/types-remark"]
  }
}
```

## Supported packages

- [unist-util-visit]
  - `import * as Visit from 'unist-util-visit';`
- [remark-parse]
  - `import * as RemarkParse from 'remark-parse';`
- [MDAST] (no npm package)
  - `import { MDAST } from 'mdast';`
- [Unist] (no npm package)
  - `import { UNIST } from 'unist';`

[unist-util-visit]: https://github.com/syntax-tree/unist-util-visit
[remark-parse]: https://github.com/wooorm/remark/tree/master/packages/remark-parse
[MDAST]: https://github.com/syntax-tree/mdast
[Unist]: https://github.com/syntax-tree/unist

## Contribute

PRs accepted.

## License

![3846masa] MIT (c) 3846masa

[3846masa]: https://www.gravatar.com/avatar/cfeae69aae4f4fc102960f01d35d2d86?s=50
