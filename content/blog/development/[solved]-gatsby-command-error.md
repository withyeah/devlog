---
title: "[Solved] Gatsby Command Error"
date: 2020-08-31 17:09:93
category: development
thumbnail: { thumbnailSrc }
draft: false
---

> Gatsby로 dev blog를 다시 운영하기 위해 install하면서 생긴 에러를 해결한 과정에 대한 기록


## 에러 👾

개츠비 hot fix 사용 중에 gatsby command가 전부 먹통이됨

<br/>

- node module 중 gatsby-cli와 gatsby를 전부 삭제하고

    ls -g|grep으로 클린하게 삭제되었는지를 확인

    ```bash
    npm ls -g|grep gatsby
    ```

    터미널이 아무것도 리턴하지 않으면 성공!🎉

<br/>

- 개츠비에서 시키는 대로 gatsby-cli를 install

    ```bash
    npm install -g gatsby-cli
    ```

<br/>

- 새로운 프로젝트 생성 → 에러발생 (이미 가지고 있는 개츠비 프로젝트에 develop, build, help 등 다른 command 입력해도 같은 에러가 발생했음)

    ```bash
    gatsby new
    ```

    ```bash
    ~/Desktop   44s
    ❯ gatsby new
    /usr/local/lib/node_modules/gatsby-cli/node_modules/uuid/dist/esm-browser/index.js:1
    export { default as v1 } from './v1.js';
    ^^^^^^

    SyntaxError: Unexpected token 'export'
        at wrapSafe (internal/modules/cjs/loader.js:1060:16)
        at Module._compile (internal/modules/cjs/loader.js:1108:27)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1164:10)
        at Module.load (internal/modules/cjs/loader.js:993:32)
        at Function.Module._load (internal/modules/cjs/loader.js:892:14)
        at Module.require (internal/modules/cjs/loader.js:1033:19)
        at require (internal/modules/cjs/helpers.js:72:18)
        at Object.<anonymous> (/usr/local/lib/node_modules/gatsby-cli/node_modules/gatsby-telemetry/lib/telemetry.js:8:13)
        at Module._compile (internal/modules/cjs/loader.js:1144:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1164:10)
    ```

    <br/>

    → node module 중에 uuid가 뭔가 문제가 있는 것 같아 보였음

<br/>

---


## 시도 🤖

구글링 키워드 : `uuid/dist/esm-browser/index.js:1`

<br/>

uuidjs는 홀수버전 node를 지원하지 않음 띠용때용

<br/>

This is a problem in the [https://github.com/uuidjs/uuid/](https://github.com/uuidjs/uuid/) package where they don't support odd Node versions [https://github.com/uuidjs/uuid/issues/466](https://github.com/uuidjs/uuid/issues/466) .

> Upgrade your Node version. I'm now on 14.4.0 and it works fine.

![1](https://user-images.githubusercontent.com/45819975/92093047-d1cbc780-ee0d-11ea-9fa6-9376065545ae.png)

<br/>

---


## 해결 🛠


```bash
nvm install v14.4
nvm use 14.4
```

```bash
nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local"
Run `npm config delete prefix` or `nvm use --delete-prefix v14.4.0` to unset it.
```

```bash
npm config delete prefix
```

```bash
~/Desktop
❯ nvm use 14.4
Now using node v14.4.0 (npm v6.14.5)

~/Desktop
❯ node -v
v14.4.0
```

```bash
npm install -g gatsby-cli
gatsby new
```

→ 잘 작동!

<br/>

---

<br/>

### reference

[Unexpected token 'export' in Sequelize UUID](https://stackoverflow.com/questions/62618543/unexpected-token-export-in-sequelize-uuid)
