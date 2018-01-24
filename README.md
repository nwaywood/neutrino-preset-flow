# Neutrino emotion preset

[![NPM version][npm-image]][npm-url]

`neutrino-preset-emotion` is a Neutrino preset that adds support for
[emotion][emotion-url], a [CSS in JS technique][css-js-url].

## Requirements

- Node.js v7+
- Yarn or npm client
- Neutrino v8, Neutrino build preset

## Installation

`neutrino-preset-emotion` can be installed via the Yarn or npm clients.

### Yarn

```bash
yarn add neutrino-preset-emotion emotion react-emotion
```

### npm

```bash
npm install --save neutrino-preset-emotion emotion react-emotion
```

## Usage

  Add `neutrino-preset-emotion` to `use` in your `.neutrinorc.js`.

  ```js
     module.exports = {
      use: [
        'neutrino-preset-react',
        'neutrino-preset-emotion',
        ...
      ]
    };
  ```

  And that's all. For `emotion` specific usage, see their [docs][emotion-url].
  For Neutrino usage, refer to their [documentation][neutrino-docs].

[npm-image]: https://img.shields.io/npm/v/neutrino-preset-emotion.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-emotion
[emotion-url]: https://emotion.sh/docs
[css-js-url]: https://github.com/MicheleBertoli/css-in-js
[neutrino-docs]: https://neutrino.js.org/
