---
title: "[Swift] How to generate random Integer & Range Operator"
date: 2020-06-10 12:09:48
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

## How to generate random dice

<br/>

```swift
@IBAction func rollButtonPressed(_ sender: UIButton) {
        
        let diceArray = [#imageLiteral(resourceName: "DiceOne"), #imageLiteral(resourceName: "DiceTwo"), #imageLiteral(resourceName: "DiceThree"), #imageLiteral(resourceName: "DiceFour"), #imageLiteral(resourceName: "DiceFive"), #imageLiteral(resourceName: "DiceSix")]
        
        // generating random integer between 0~5 and use it as an index
        diceImageView1.image = diceArray[Int.random(in: 0...5)]
        // retrieve random element of array
        diceImageView2.image = diceArray.randomElement()
```

<br/>

1. `let diceArray` : code 반복을 줄이기 위해 dice image literal array를 따로 뺌, 이 array는 코드 끝까지 변하지 않기 때문에 `var` 대신 `let`을 써서 constant로 만듬
2. random dice 두 가지 방법
    - random int 만들어서 array의 index로 접근하기

        swift에서 random int 만드는 방법 : `Int.random(in: lower...upper)`

        range operator
        `...` : lower, upper bound를 포함한 closed range
        `..<` : upper bound를 포함하지 않음

    - randomElement() 함수로 array에서 random 이미지를 retrieve