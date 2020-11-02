---
title: "[iOS] ViewController Lifecycle"
date: 2020-11-02 18:11:13
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

## ViewController의 Lifecycle을 알아보자

![1](https://user-images.githubusercontent.com/45819975/97854171-70a46f80-1d3c-11eb-8f5e-c509fc222734.png)

1. viewDidLoad()
    - View가 생성되는 최초의 순간에만 단 한 번 작동한다!
    - IBOutlet, IBAction와 같은 view related objects들이 view에 연결되어서 accessible한 시점

1. viewWillAppear()
    - 아직 유저에게는 아무것도 보이지 않는 상태
    - 특정 UI components들을 hide / show 하기 좋은 시점

1. viewDidAppear()
    - UI components들이 스크린에 실제 표시됨
    - 유저가 detect할 수 있는 작업들(timer, animation 등)이 이루어지기 좋은 시점

2. viewWillDisappear()
    - 유저가 navigate back 하거나 어떤 방식으로든 현재 VC를 dismiss했을 때 가장 먼저 called 되는 메서드
    - 작동중이던 animation을 멈추거나 UI components를 hide하거나 하기 좋은 시점

1. viewDidDisappear()
    - View가 사라지기 전 마지막으로 뭔가 바꿀 수 있는 시점
    - view가 disappear되었다고 해서 deallocated 되었거나 디바이스의 메모리에서 사라진 것이 아님!!
    - 유저가 해당 view를 볼 수 없다는 뜻

<br>
<br>

---

<br>

Reference, Photo Credit : 

[Udemy iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp](https://www.udemy.com/course/ios-13-app-development-bootcamp/)