---
title: "[Swift] CRUD with Core Data"
date: 2020-10-25 23:10:50
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

with `Todoey` 예제

## Create

1. AppDelegate을 object로 불러오기 (context 쓰기 위해서)

    ```swift
    let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    ```

    (참고 : `()` 사이는 singleton)

2. `UIAlertAction` 부분 - newItem append 하는 코드

    ```swift
    let newItem = Item(context: self.context)
    newItem.title = textField.text!
    newItem.done = false
    self.itemArray.append(newItem)
            
    self.saveItems()
    ```

3. `saveItems` func는 간단하게 바꿔줌

    ```swift
    //MARK: - Model Manupulation Methods
        
        func saveItems() {
            
            do {
                try context.save()
            } catch {
                print("Error saving contect \(error)")
            }
            
            self.tableView.reloadData()
        }
    ```


<br>


## Read

1. `loadItems()` 부분 : context에서 fetch하도록 바꿔줌

    ```swift
    func loadItems() {
        let request : NSFetchRequest<Item> = Item.fetchRequest()
        do {
            itemArray = try context.fetch(request)
        } catch {
            print("Error fetching data from context \(error)")
        }
    }
    ```

    - `let request : NSFetchRequest<Item>` : 타입을 꼭 명시해줘야 함
2. `viewDidLoad()` 안에

    ```swift
    loadItems()
    ```


<br>



## Update

이미 `didSelectRowAt` 에서 Update 하고 있음

```swift
itemArray[indexPath.row].done = !itemArray[indexPath.row].done

self.saveItems()
```


<br>




## Delete

```swift
context.delete(itemArray[indexPath.row])
itemArray.remove(at: indexPath.row)

saveItems()
```

매우 중요 : 위 context에서 먼저 지우고 itemArray에서 지워야함!!