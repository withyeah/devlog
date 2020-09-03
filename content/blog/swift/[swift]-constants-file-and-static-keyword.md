---
title: "[Swift] Constants File and Static Keyword"
date: 2020-09-03 18:09:79
category: swift
thumbnail: { thumbnailSrc }
draft: false
---


>미스스펠의 이유로 앱이 크래시되는 것을 최대한 막기 위해서는
>
>string 사용을 최대한 줄이는 게 좋다

<br/>

### Constants File & static keyword

`Constants File`과 `static keyword`를 사용하면 이를 방지하기 쉽다

<br/>
예시를 들어보자


```swift
import Foundation

struct MyStructure {
  	let instanceProperty = "ABC"
  	static let typeProperty = "123"
}

```

- ABC를 쓰려면

  ```swift
  let myStructure = MyStructure()
  print(myStructure.instanceProperty)
  // ABC
  ```

  > myStructure 라는 인스턴스를 생성한 후 property를 call해야 함

<br/>

***반면***

- 123을 쓰려면

  ```swift
  print(MyStructure.typeProperty)
  // 123
  ```

  > 인스턴스 생성 없이 바로 property call 가능



<br/>

**method도 마찬가지!**


<br/>

> 참고로 Constants File struct의 이름은 K로 하는 것이 custom!
>
> 다른 파일들에서 `K.appName` 등으로 call 하는 것이 보기 편하기 때문



<br/>

---


<br/>

reference

https://docs.swift.org/swift-book/LanguageGuide/Properties.html

https://docs.swift.org/swift-book/LanguageGuide/Methods.html
