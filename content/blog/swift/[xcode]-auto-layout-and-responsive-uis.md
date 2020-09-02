---
title: "[swift] Auto Layout and Responsive UIs"
date: 2020-06-10 11:09:76
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

<br/>

# Constraints



## Pinning Constraints



![Untitled 1](https://user-images.githubusercontent.com/45819975/91926127-82a06c80-ed11-11ea-8787-546579ee7045.png)

<br/>

## Allignment Constraints

![Untitled 2](https://user-images.githubusercontent.com/45819975/91926137-87652080-ed11-11ea-89c2-744d814b124a.png)

<br/>

## Combo도 가능

![Untitled 3](https://user-images.githubusercontent.com/45819975/91926138-87652080-ed11-11ea-96f9-827be993c311.png)

<br/>

![Untitled 4](https://user-images.githubusercontent.com/45819975/91926139-88964d80-ed11-11ea-8099-e6b52557237c.png)

→ 어디에 대하여 constraints를 걸 것인지

- `Superview` : 화면 전체
- `Safe Area` : 일반적으로 화면 위아래 시간, 홈버튼 부분 (여기에는 배경을 제외한 element들을 넣지 않음)
- 기타 element가 화면에 있다면 거기에 대해서도 constraints를 걸 수 있음
    - ex) AppBreweryLogo의 30px 아래에 항상 고정

<br/>
<br/>

# Containers

## View Embed하는 3가지 방법


![Untitled 5](https://user-images.githubusercontent.com/45819975/91926140-88964d80-ed11-11ea-9749-92e4fac3cb56.png)

- object library - UIView - 원하는 element를 View Controller Scene에서 만들어진 View의 인덴트 안으로 넣기
- element 선택한 상태로 메뉴바 - Editor - Embed In - View
- element 선택한 상태로 하단의 embed 버튼 - View

    ![Untitled 6](https://user-images.githubusercontent.com/45819975/91926141-892ee400-ed11-11ea-8b68-dcd2a24c79ad.png)

<br/>
<br/>

## Stack View

- select multiple views - Embed In View - Stack View

    ![Untitled 7](https://user-images.githubusercontent.com/45819975/91926143-89c77a80-ed11-11ea-9554-f2128a2541a7.png)

<br/>
<br/>

## Size Constraints

- Label에 Size Constraints (Width / Height) 주면 warning 발생

    Fixed width constraints may cause clipping.

    - Label 안의 텍스트 길이가 Width를 넘어가면 Clipping되기 때문
    - Warning sign 눌러보면 선택지 추천해줌 → 두 번째 선택

        ![Untitled 8](https://user-images.githubusercontent.com/45819975/91926145-8a601100-ed11-11ea-8edd-89f35d358021.png)

        ![Untitled 9](https://user-images.githubusercontent.com/45819975/91926146-8af8a780-ed11-11ea-8910-b975159c975d.png)

        → Relation : Greater Than or Equal 로 설정된 것을 볼 수 있음
