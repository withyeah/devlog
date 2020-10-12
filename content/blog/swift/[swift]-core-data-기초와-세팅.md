---
title: "[Swift] Core Data 기초와 세팅"
date: 2020-10-12 12:10:62
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

## Core Data Fundamentals

![1](https://user-images.githubusercontent.com/45819975/95703263-b1ebb700-0c89-11eb-85d0-4a8f192abb2a.png)

## Configure & Setup Core Data

1. 프로젝트 처음 시작할 때 `Use Core Data` 체크박스 체크

    ![2](https://user-images.githubusercontent.com/45819975/95703261-b1532080-0c89-11eb-81c5-47ef45e5b840.png)


2. 프로젝트 중간에 넣고 싶다면?

    `File` - `New` - `File` - `Data Model`

    ![3](https://user-images.githubusercontent.com/45819975/95703259-b0ba8a00-0c89-11eb-9375-9be1564b0ff5.png)


    AppDelegate.swift 에 `import CoreData` 한 후 아래에 Core Data 템플릿 복붙하기

    ```swift
    // MARK: - Core Data stack

        lazy var persistentContainer: NSPersistentContainer = {
            /*
             The persistent container for the application. This implementation
             creates and returns a container, having loaded the store for the
             application to it. This property is optional since there are legitimate
             error conditions that could cause the creation of the store to fail.
            */
            let container = NSPersistentContainer(name: "[FILE-NAME]")
            container.loadPersistentStores(completionHandler: { (storeDescription, error) in
                if let error = error as NSError? {
                    // Replace this implementation with code to handle the error appropriately.
                    // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
                     
                    /*
                     Typical reasons for an error here include:
                     * The parent directory does not exist, cannot be created, or disallows writing.
                     * The persistent store is not accessible, due to permissions or data protection when the device is locked.
                     * The device is out of space.
                     * The store could not be migrated to the current model version.
                     Check the error message to determine what the actual problem was.
                     */
                    fatalError("Unresolved error \(error), \(error.userInfo)")
                }
            })
            return container
        }()

        // MARK: - Core Data Saving support

        func saveContext () {
            let context = persistentContainer.viewContext
            if context.hasChanges {
                do {
                    try context.save()
                } catch {
                    // Replace this implementation with code to handle the error appropriately.
                    // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
                    let nserror = error as NSError
                    fatalError("Unresolved error \(nserror), \(nserror.userInfo)")
                }
            }
        }

    }
    ```

    (appWillTerminate에 self.saveContext() 넣어주기?.? 불확실)

3. set up

    ![4](https://user-images.githubusercontent.com/45819975/95703258-b021f380-0c89-11eb-8ae0-3431afd58285.png)


    - Module : Global이 아닌 Current Product Module로 선택하자
    - Codegen
        - Class Definition : class를 만드는 것과 같은 효과 (뒤에 code generation 다 됨)
        - Category/Extension : 직접 Entitiy와 같은 이름의 class를 만들면 Xcode가 자동으로 link (custom class 쓰고 싶을 때)
        - Manual/None : 아무 code generating을 해주지 않음!

## Terminology

![5](https://user-images.githubusercontent.com/45819975/95703255-ad270300-0c89-11eb-8b58-5b9e8de6b811.png)

- Entitiy : Class (Table)
- Attributes : Properties

(참고) Codable

```swift
import Foundation

class Item: Codable {
    var title : String = ""
    var done : Bool = false
}
```

Core Data

![6](https://user-images.githubusercontent.com/45819975/95703250-abf5d600-0c89-11eb-8e92-22d4a4e3572c.png)

<br>
<br>

---

<br>

Reference

사진출처 Photo Credit : 

[Udemy iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp](https://www.udemy.com/course/ios-13-app-development-bootcamp/)