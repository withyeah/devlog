---
title: "[Swift] 나누기 Deviding Operator"
date: 2020-06-13 14:09:90
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

### [Repl.it](http://repl.it) function2 excercise (calculator) 풀다가 알게된 사실

<br/>

3 / 4 = 0 인 이유

```swift
var a: Int = 3
var b: Int = 4
print(a / b)
//0

var c: Double = 3
var d: Double = 4
print(c / d)
//0.75
```

<br/>

왜 이럴까?

Xcode 상에서 `option` + 각각 `/` operator 클릭해보면

<br/>

- `Int / Int`

    ```swift
    static func / (lhs: Int, rhs: Int) -> Int
    ```

    ![1](https://user-images.githubusercontent.com/45819975/91935605-0d409600-ed29-11ea-8c54-62c835ad56a0.png)

<br/>

- `Double / Double`

    ```swift
    static func / (lhs: Double, rhs: Double) -> Double
    ```

    ![2](https://user-images.githubusercontent.com/45819975/91935602-09ad0f00-ed29-11ea-86b2-741cbf338956.png)

<br/>

참고 : 한 쪽만 Double이어도 결과는 Double을 Return한다

하지만...

![3](https://user-images.githubusercontent.com/45819975/91935599-07e34b80-ed29-11ea-8a89-bd344c39b9c8.png)

양 쪽의 Data Type을 다르게 아예 Assign한 경우 `/ operating`이 불가하다

<br/>

---

reference

[Swift3 ) 나누기가 안될 때](https://zeddios.tistory.com/171)
