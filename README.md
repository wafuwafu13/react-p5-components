# react-p5-components
:art: use p5.js in react without writing p5's code

## Install

```
npm i react-p5-components
```

## Components

### GenerateLettersByDragCanvas

#### Code

```jsx
import GenerateLettersByDragCanvas from "react-p5-components";

<GenerateLettersByDragCanvas
  letters={"example letters"}
  height={500}
  width={500}
  font={"Georgia"}
  fontColor={"#000000"}
  fontSizeMin={10}
  backgroundColor={"#CCCCCC"}
/>
```

#### Demo
[click here](https://user-images.githubusercontent.com/50798936/103163042-d2182480-483b-11eb-84be-f536aa1f7983.mp4)

#### Props

##### *All Props is Required.

| Name | Type | Description |
|:---:|:---:|:---:|
| letters | string | generate this letters |
| height | number | canvas height |
| width | number | canvas width |
| font | string | [font-family](https://developer.mozilla.org/ja/docs/Web/CSS/font-family) |
| fontColor | string | font [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) |
| fontSizeMin | number | minimum size of letter |
| backgroundColor | string | canvas background [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) |

## Contributes
I'm waiting for your contribution:)  
Please [fork this repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) and [checkout branch](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-glossary#checkout) (branch name and commit message is free now).

#### Set up local server

```
$ cd react-p5-components
$ npm i
$ npm run start # connect http://localhost:3001/
```

#### Confirm your code

change

```jsx:example/src/index.js
import GenerateLettersByDragCanvas from "react-p5-components";
```

to

```jsx:example/src/index.js
import GenerateLettersByDragCanvas from "../../src/GenerateLettersByDragCanvas";
```
