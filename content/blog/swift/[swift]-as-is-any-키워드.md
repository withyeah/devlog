---
title: "[Swift] as? as! as is 키워드와 Any"
date: 2020-09-07 17:09:60
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

**Downcasting, Upcasting, Any 키워드들을 알아보자.**

## `is`, `as!`, `as?`, `as`

### is

![is](https://user-images.githubusercontent.com/45819975/92364592-41072b80-f12e-11ea-973e-f33ba19214ea.jpeg)

left hand와 right hand의 타입이 일치하는지

<br/>

### as!

![as!](https://user-images.githubusercontent.com/45819975/92364580-3e0c3b00-f12e-11ea-82b8-836c973ee156.jpeg)


subclass로 force downcast

확실할 때만 사용!!!!

캐스팅 불가한 경우 컴파일러는 못 잡고 런타임에서 아래 에러를 볼 수 있음

```bash
Could not cast value of type 'Human' to 'Fish'
```

<br/>

### as?

![as?](https://user-images.githubusercontent.com/45819975/92364588-406e9500-f12e-11ea-9cc6-fd04f4bce41b.jpeg)

조금 더 안전한 방법

캐스팅이 가능하다면 ~~ 해라

<br/>

### as

![as](https://user-images.githubusercontent.com/45819975/92364571-3a78b400-f12e-11ea-9f0f-d9d6279d89cc.jpeg)


Upcast : upper class로 raise할 때

> ? 나 ! 가 붙지 않는 이유 
> : B가 A를 inherit했다면 당연히 모든 경우에서 Upcast가 가능하기 때문

downcasting보다 훨씬 적게 사용됨

## `Any`

![any](https://user-images.githubusercontent.com/45819975/92364585-3f3d6800-f12e-11ea-8960-d8fd7e5debae.jpeg)

- flexibility를 원하거나
- 아무 클래스를 상속해야만 사용할 수 있는 기능이 있을 수 있음 > 그럴 경우 AnyObject를 상속해서 사용

 

<br/>

---

<br/>

reference

[Type Casting - The Swift Programming Language (Swift 5.3)](https://docs.swift.org/swift-book/LanguageGuide/TypeCasting.html)

사진출처 Photo Credit : 

[Udemy iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp](https://www.udemy.com/course/ios-13-app-development-bootcamp/)

<br/>
