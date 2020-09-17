---
title: "[Xcode] AutoLayout Error - Unable to simultaneously satisfy constraints"
date: 2020-09-17 10:09:66
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

### iOS Auto Layout 사용 중 발생하는 Constraints 충돌 에러를 해결해보자.

<br>

오늘의 에러는
```shell
[LayoutConstraints] Unable to simultaneously satisfy constraints.
	Probably at least one of the constraints in the following list is one you don't want. 
	Try this: 
		(1) look at each constraint and try to figure out which you don't expect; 
		(2) find the code that added the unwanted constraint or constraints and fix it. 
(
    "<NSLayoutConstraint:0x600001e77d90 UIButton:0x7f9a77b3cd20.height == 25   (active)>",
    "<NSLayoutConstraint:0x600001e4c320 UILayoutGuide:0x600000477560'UIViewSafeAreaLayoutGuide'.bottom == UIButton:0x7f9a77b3cd20.bottom + 312   (active)>",
    "<NSLayoutConstraint:0x600001e4c870 V:[UIView:0x7f9a77b384c0]-(34)-[UIView:0x7f9a77b38630]   (active)>",
    "<NSLayoutConstraint:0x600001e4c8c0 V:[UIView:0x7f9a77b38630]-(391)-|   (active, names: '|':UIView:0x7f9a77a13a50 )>",
    "<NSLayoutConstraint:0x600001e4ca50 V:[UIView:0x7f9a77b384c0]-(70)-[UIButton:0x7f9a77b3cd20]   (active)>",
    "<NSLayoutConstraint:0x600001e4c0a0 'UIViewSafeAreaLayoutGuide-bottom' V:[UILayoutGuide:0x600000477560'UIViewSafeAreaLayoutGuide']-(0)-|   (active, names: '|':UIView:0x7f9a77a13a50 )>"
)

Will attempt to recover by breaking constraint 
<NSLayoutConstraint:0x600001e77d90 UIButton:0x7f9a77b3cd20.height == 25   (active)>

Make a symbolic breakpoint at UIViewAlertForUnsatisfiableConstraints to catch this in the debugger.
The methods in the UIConstraintBasedLayoutDebugging category on UIView listed in <UIKitCore/UIView.h> may also be helpful.
```

<br>

말 그대로 동시에 적용될 수 없는 Constraints가 있으니 살펴보고 수정하라는 뜻!
하지만 elements들이 오브젝트 이름으로 array에 담겨있어 알아보기 힘들다.
여기서 유용하게 쓰이는 도구가 바로 https://www.wtfautolayout.com/ , `Why The Failure, Auto Layout?` 이다.

<br>

1. 콘솔 로그에 있는 constraints error log 중 `()` 사이에 있는 리스트를 복붙
    <img width="927" alt="image" src="https://user-images.githubusercontent.com/45819975/93408137-c4fba900-f8ce-11ea-9167-df816a6e70dd.png">

2. `Go`

3. Contraints들이 View1, 2, 3 등의 이름을 달고 시각화된다.
    <img width="972" alt="image" src="https://user-images.githubusercontent.com/45819975/93408225-fd9b8280-f8ce-11ea-86ba-54436a752227.png">

4. 중복된 Constraints를 잘 살펴보고 수정하면 완료!

<br>

나의 케이스에서는 4번째, 6번째 노란색 `View3`의 `bottom edge`가 두 가지의 contraints를 가지고 있는 것을 볼 수 있다.
Xcode로 돌아와 4번째 Constraints를 지웠더니 에러 해결! 🎉

<br>

---

<br>

Reference

[[ios] AutoLayout - Unable to simultaneously satisfy constraints](https://baked-corn.tistory.com/96)

<br>

<br>