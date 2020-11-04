---
title: "[iOS] Application Lifecycle"
date: 2020-11-04 21:11:84
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

## Application의 Lifecycle에 대해 알아보자

![1](https://user-images.githubusercontent.com/45819975/98112841-2101a780-1ee6-11eb-84dc-8dbe241bb3da.png)

- 모바일 디바이스에서 resource를 어떻게 분배할 것인가? 매우 중요
- 즉 마지막 스텝인 resource reclaiming이 키포인트라고 할 수 있다
- 그럼 여러 앱을 가동중이라고 했을 때 iOS는 어떤 앱에 리소스를 가장 많이 분배할까?
    - foreground에 있는 앱
    - 이게 앱 개발자에게 중요할까?
        - 유저가 내 앱을 사용 중에 다른 작업을 오랫동안 하게 되면 내가 따로 유저의 데이터를 저장하지 않는 이상 데이터가 날아가게 됨

## 개발할 때 내가 신경써야 할 부분?

- Xcode에서 iOS 프로젝트를 만들면 자동으로 `AppDelegate.swift`와 `SceneDelegate.swift` 파일이 생성됨
- 얘네가 앱의 Lifecycle을 관리하는 파일들
- iOS12까지는 `AppDelegate.swift` 만 있었음! 그럼 `Scene`은 뭐야?

    iOS13부터 특히 iPadOS에서 여러 window의 사용이 가능해짐!!

    하나의 window가 scene, `SceneDelegate.swift` 파일은 Scene간 이동 시 nofity를 받음

    ![2](https://user-images.githubusercontent.com/45819975/98112837-1f37e400-1ee6-11eb-9471-0b9db804e61a.png)


    - ex) `sceneWillResignActive()` : 앱 사용 중 전화가 오는 등 interruption이 발생했을 때 > 음악을 중단한다
    - ex) `sceneDidEnterBackground()` : 앱이 백그라운드 상태로 전환되었을 때 > 유저 데이터를 저장하기 참 좋은 시점!!!



<br>
<br>

---

<br>

Reference, Photo Credit : 

[Udemy iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp](https://www.udemy.com/course/ios-13-app-development-bootcamp/)