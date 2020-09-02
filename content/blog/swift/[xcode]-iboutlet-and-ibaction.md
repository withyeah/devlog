---
title: "[Xcode] IBOutlet and IBAction"
date: 2020-06-10 12:09:46
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

### Assistant Editor

- Main.Storyboard - 우측 상단 햄버거 `Adjust Editor Options` - Assistant

    ![1](https://user-images.githubusercontent.com/45819975/91929779-1aa25400-ed1a-11ea-9bd7-260197852216.png)

<br/>

## IBOutlet (Interface Builder Outlet)

- 위 화면 상 왼쪽의 Main.storyboard가 Interface Builder
- design에서 control(^) 누른 상태로 원하는 element 끌어다가 class ~ override 사이에 drag&drop
- prompt에서 `camel case`로 이름 짓기

```swift
@IBOutlet weak var diceImageView1: UIImageView!
```

>여기서 매우 매우 중요한 점!!!!!
>코드 상에서 그냥 타이핑으로 변수명을 변경하면 안됨

```swift
2020-06-10 15:45:42.029363+0900 Dicee-iOS13[1234:865204] 
*** Terminating app due to uncaught exception 'NSUnknownKeyException', 
reason: '[<Dicee_iOS13.ViewController 0x7fc30450a240> setValue:forUndefinedKey:]: 
this class is not key value coding-compliant for the key diceImageView1.'
```

- 변수명 바꿀 때는 변수명 우클릭 - Refactor - Rename 하면 코드 상 같은 이름을 다 찾아서 한 번에 안전하게 바꿀 수 있음
- Outlet 연결 망했을 때는 IB에 있는 element 우클릭 - 링크의 x 버튼 누르면 링크 깨짐
    - 다시 연결하고 싶을 때는 코드 상 line # 칸에 남아있는 빈 동그라미 끌어다가 element에 놓으면 연결!

<br/>

## Dot Notation

- Who.What = Value

    1. Who : 변수명 타이핑하면 auto completion 할 수 있다! (tab or enter)
    2. What : 변수명. 하면 property가 또 엄청 많이 추천되는데 잘 모르겠을 때는 right hand pane - property에서 참고하자
    3. Value : image를 바꾸고 싶음 → Image Literal, 더블 클릭→ asset에서 사용가능한 이미지 팝업 → 원하는 이미지 선택하면 뙇 들어감

    ![2](https://user-images.githubusercontent.com/45819975/91929777-1a09bd80-ed1a-11ea-8bc9-67f132d81f7e.png)

    ```swift
    @IBOutlet weak var diceImageView1: UIImageView!
    @IBOutlet weak var diceImageView2: UIImageView!
        
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        diceImageView1.image = #imageLiteral(resourceName: "DiceSix")
        diceImageView1.alpha = 0.5
        diceImageView2.image = #imageLiteral(resourceName: "DiceTwo")
    }
    ```

<br/>

## IBAction

- IBOutlet이 디자인 → 코드라면 IBAction은 코드 → 디자인
- 유저가 탭 등 UI element를 조작했을 때 디자인에 변화를 주기 위함
- 유저가 `Roll` 버튼을 눌렀을 때 dice4로 image 바꾸기
    - control(^) 누른 상태로 element drag 해서 코드 원하는 라인에 drop

        ![3](https://user-images.githubusercontent.com/45819975/91929771-17a76380-ed1a-11ea-861e-729ba7271d46.png)

        - Button element라서 자동으로 Connection : Action
        - Type : Any → UIButton
        - Touch Up Inside : 어떤 액션을 통해 코드를 트리거 할 것인가? 이 경우 element를 터치한 후 boundary 안에서 release 했을 경우를 말함

    ```swift
    @IBAction func rollButtonPressed(_ sender: UIButton) {
            print("Button got tapped.")
            diceImageView1.image = #imageLiteral(resourceName: "DiceFour")
            diceImageView2.image = #imageLiteral(resourceName: "DiceFour")
        }
    ```

    → Roll 버튼 탭하면 콘솔에 prin문 출력, dice element 둘 다 DiceFour로 이미지 변경됨