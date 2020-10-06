---
title: "[Swift] UserDefaults는 어디에 저장될까"
date: 2020-10-05 19:10:83
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

## UserDefaults 특징

- 간단한 데이터를 저장하는 데 유용하다
    - 몇 줄의 코드로 데이터를 저장하고 프로젝트 어디서나 접근할 수 있기 때문
    - ex) 디폴트 볼륨값, 디폴트 유저 네임 등..
- 주의!! 절대 데이터베이스로 쓰지 말 것
    - 이 데이터들은 plist에 key-value pair로 저장되어서 한 번에 불러와지기 때문에 각 몇 kb이내의 default data만 저장하는 것이 좋다.

## 참고

- User Defaults data는 어디에 저장될까?

    `AppDelegate.swift`의 `didFinishLaunchingWithOptions` func에 print 찍어보기

    > `NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).last! as String`

    ```swift
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
            
            print(NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).last! as String)
            
            return true
        }
    ```

    → /Users/[USER-NAME]/Library/Developer/CoreSimulator/Devices/141ED371-3CF8-43B8-B09F-702DF14D2912/data/Containers/Data/Application/1949A98D-B948-46BB-B6A1-64D225C4E2BE/Documents

    위 루트에 plist가 위치해 있다.

<br>

- Demo

    ```swift
    import UIKit

    let defaults = UserDefaults.standard

    let dictionaryKey = "myDictionary"

    defaults.set(0.24, forKey: "Volume")
    defaults.set(true, forKey: "MusicOn")
    defaults.set("Tori", forKey: "PlayerName")
    defaults.set(Date(), forKey: "AppLastOpenedByUser")
    let array = [1, 2, 3]
    defaults.set(array, forKey: "myArray")
    let dictionary = ["name": "Tori"]
    defaults.set(dictionary, forKey: "myDictionary")

    // later on

    let volume = defaults.float(forKey: "Volume")
    let appLastOpen = defaults.object(forKey: "AppLastOpenedByUser")
    let myArray = defaults.array(forKey: "myArray") as! [Int]
    let myDictionary = defaults.dictionary(forKey: dictionaryKey)
    ```

    > 위 array, dictionary를 저장하는 예시는 좋은 practice가 아니다.

<br>

---

<br>

Reference

[Apple Developer Documentation on UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults)

<br>

<br>
