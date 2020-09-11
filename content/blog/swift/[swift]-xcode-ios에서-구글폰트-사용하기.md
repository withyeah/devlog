---
title: "[Swift] Xcode-iOS에서 구글폰트 사용하기"
date: 2020-09-11 20:09:47
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

Xcode에서 iOS 개발 시 구글폰트를 사용하는 방법을 알아보자.

<br>

1. [https://fonts.google.com/](https://fonts.google.com/) 구글폰트 페이지에서 원하는 폰트 패밀리를 다운 받는다.

<br>

2. Xcode로 돌아와 프로젝트 `루트 디렉토리`에 `fonts 디렉토리` 생성 후 그 안에 폰트 파일을 넣어준다.

    ![1](https://user-images.githubusercontent.com/45819975/92923134-e5140e00-f471-11ea-92cd-479274d5c2ce.png)

<br>

3. `info.plist`를 열고 Information Property List 에 마우스 오버를 하면 + 버튼이 활성화된다.

    누르고 `Key`에 `Fonts provided by application`을 추가한다. `Fonts`까지만 타이핑해도 auto suggestion이 뜬다.

    `Fonts provided by application` 는 타입이 Array이다.

    마찬가지로 + 를 누르고 0번째 Value에 폰트 이름을 **확장자까지** 정확하게 입력한다.

    ![2](https://user-images.githubusercontent.com/45819975/92923128-e34a4a80-f471-11ea-8446-3f0268305630.png)

<br>

4. 이제 코드 상에서 원하는 구글 폰트를 사용할 수 있다.

    ```swift
    Text("Hello World!")
    	.font(Font.custom("PermanentMarker-Regular", size: 40))
    ```


<br>

<br>
