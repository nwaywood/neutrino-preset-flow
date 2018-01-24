# Neutrino flow preset

[![NPM version][npm-image]][npm-url]

`neutrino-preset-flow` is a Neutrino preset that adds support for
[flow][flow-url]

## Requirements

- Node.js v7+
- Yarn or npm client
- Neutrino v8, Neutrino build preset

## Installation

`neutrino-preset-flow` can be installed via the Yarn or npm clients.

### Yarn

```bash
yarn add neutrino-preset-flow
```

### npm

```bash
npm install --save neutrino-preset-flow
```

## Usage

  Add `neutrino-preset-flow` to `use` in your `.neutrinorc.js`.

  ```js
     module.exports = {
      use: [
        'neutrino-preset-react',
        'neutrino-preset-flow',
        ...
      ]
    };
  ```

  And that's all. For `flow` specific usage, see their [docs][flow-url].
  For Neutrino usage, refer to their [documentation][neutrino-docs].

[npm-image]: https://img.shields.io/npm/v/neutrino-preset-flow.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-flow
[flow-url]: https://flow.org/
[neutrino-docs]: https://neutrino.js.org/
