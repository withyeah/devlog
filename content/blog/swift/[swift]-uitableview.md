---
title: "[Swift] UITableView"
date: 2020-09-06 22:09:15
category: swift
thumbnail: { thumbnailSrc }
draft: false
---

## Table View vs Table View Cell

### Table View

> Displays data in a list

- Coordinates with a data source and delegate to display a scrollable list of rows. Each row in a table view is a UITableViewCell object.
- The rows can be grouped into sections, and the sections can optionally have headers and footers.
- The user can edit a table by inserting, deleting, and reordering table cells.

<br/>

### Table View Cell

> Single row of a table view

- Defines the attributes and behavior of cells in a table view. You can set a table cell's selected-state appearance, support editing functionality, display accessory views (such as a switch control), and specify background appearance and content indentation.

<br/>

<br/>

## UITableViewDataSource


requires 2 delegate methods

![1](https://user-images.githubusercontent.com/45819975/92326455-65f79200-f08d-11ea-9088-098b91ce1397.png)

- 첫 번째에서는 디스플레이할 총 셀 갯수를 리턴 (Int)
- 두 번째에서는 각 index에서 디스플레이할 셀을 리턴 (UITableViewCell)
    - 그래서 사용하는 method가 dequeueReusableCell

        > Returns a reusable table-view cell object for the specified reuse identifier and adds it to the table.

<br/>

## Customizing Cells in a UITableView


- Creating .xib file

    create Cocoa Touch Class file under `Views` folder

    ![2](https://user-images.githubusercontent.com/45819975/92326454-642dce80-f08d-11ea-89f3-18962f84758d.png)

- Register Customized Cell
    - `ChatViewController.swift` 의 `viewDidLoad()` 안에서

        ```swift
        tableView.register(UINib(nibName: K.cellNibName, bundle: nil), forCellReuseIdentifier: K.cellIdentifier)
        ```

    - extend한 코드에서 `as! MessageCell` 추가

        ```swift
        extension ChatViewController: UITableViewDataSource {
            func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
                return messages.count
            }
            
            func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
                let cell = tableView.dequeueReusableCell(withIdentifier: K.cellIdentifier, for: indexPath)
                    as! MessageCell
                cell.label.text = messages[indexPath.row].body
                return cell
            }
        }
        ```

<br/>