---
title: "[Xcode] Cocoapods - No such module Error"
date: 2020-09-16 14:09:06
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

Cocoapods 사용 중 발생하는 `No such module` 에러를 해결해보자


## 문제 상황

1. `pods init`
2. podfile에 필요한 pod 입력
3. `pods install`
4. `.xcworkspace` 파일 열기
5. `import [POD]` 코드로 import 시도
6. `No such module '[POD]'` 에러 발생

## 에러 원인

install한 pod이 scheme에 자동으로 등록되지 않음

## 해결 방법

> `menu` - `Product` - `Scheme` - `Manage Schemes...`

![1](https://user-images.githubusercontent.com/45819975/93296586-7bf21900-f82a-11ea-9608-d031beb5bc8a.png)


`Show` 체크박스를 체크해준다

빌드해보면 에러가 사라진다! 🎉

에러 해결


<br>

---

<br>

Reference

[(iOS) cocoapods 사용하기](https://marlboroyw.tistory.com/516)

<br>

<br>
