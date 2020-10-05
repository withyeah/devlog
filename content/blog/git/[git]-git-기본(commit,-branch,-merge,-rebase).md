---
title: "[git] git 기본(commit, branch, merge, rebase)"
date: 2020-09-28 14:09:93
category: git
thumbnail: { thumbnailSrc }
draft: false
---

## git 기본


### 1. Git 커밋

커밋 = 디렉토리에 있는 모든 파일에 대한 스냅샷을 Git 저장소에 기록하는 것

Git은 가능한 한 커밋을 가볍게 유지하고자 하기 때문에 이전 버전과 다음 버전의 변경 내역 (`delta`) 을 저장

→ 대부분의 커밋은 해당 커밋 위의 부모 커밋을 가리킨다

```bash
git commit
```

> Git 커밋은 매우 가볍고 전환도 매우 빠르다!

<br>

### 2. Git 브랜치

브랜치는 특정 커밋에 대한 참조(reference) → 브랜치도 매우 가볍다

브랜치를 많이 만들어도 메모리나 디스크 공간에 부담이 되지 않는다

> 브랜치는 하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역

```bash
git branch [브랜치명]    //브랜치 만들기 
git checkout [브랜치명]  //새 브랜치로 이동
```

<br>


### 3. Git Merge

브랜치를 합치는 방법에는 몇 가지가 있다. `merge`는 그 중 하나

`git merge` : 두 개의 부모(parent)를 가리키는 특별한 커밋을 만들어 낸다

- 두 부모의 모든 작업, 그리고 그 두 부모의 모든 부모들의 작업내역을 포함

- 예시

    ![1](https://user-images.githubusercontent.com/45819975/94395518-dd0adc80-019a-11eb-80b8-5cb495be69ca.png)

    ```bash
    git merge bugFix
    ```

    ![2](https://user-images.githubusercontent.com/45819975/94395511-daa88280-019a-11eb-9f74-44ecdb85855d.png)

    ```bash
    git checkout bugFix
    git merge master
    ```

    ![3](https://user-images.githubusercontent.com/45819975/94395508-d9775580-019a-11eb-8b2b-ecd22f4c16c5.png)

    - `bugfix`가 `master`의 부모쪽에 있었기 때문에 간단히 `bugfix`를 `master`가 붙어있는 커밋으로 이동시킴
    - 두 브랜치가 모두 저장소의 모든 작업내역을 포함하게 됨

<br>


### 4. Git 리베이스(Rebase)

브랜치를 합치는 두 번째 방법은 리베이스!

`리베이스` : 커밋들을 모아서 복사한 뒤, 다른 곳에 떨궈 놓는 것

- 장점 : 커밋들의 흐름을 보기 좋게 한 줄로 만들 수 있다 → 저장소의 커밋 로그와 이력이 깨끗해짐
- 예시

    ![4](https://user-images.githubusercontent.com/45819975/94395505-d8462880-019a-11eb-9de4-6c417297d47e.png)


    - 목표 : `bugFix` 브랜치에서의 작업을 `master` 브랜치 위로 직접 옮기기
    - 효과 : 실제로는 두 기능을 따로 개발했지만 순서대로 개발한 것 처럼 보이게 됨

    ```bash
    git rebase master
    ```

    ![5](https://user-images.githubusercontent.com/45819975/94395501-d714fb80-019a-11eb-8a82-420ad2caa68b.png)


    여기서 `C3` 커밋은 아직 어딘가에 남아있고 (그림에서 흐려짐), `C3'`는 `master`위에 올려놓은 복사본

    `master`는 아직 그대로라는 문제가 있음

    ![6](https://user-images.githubusercontent.com/45819975/94395499-d5e3ce80-019a-11eb-9d5d-307f105a7c34.png)


    `master` 브랜치를 선택한 상태로

    ```bash
    git rebase bugFix
    ```

    ![7](https://user-images.githubusercontent.com/45819975/94395490-d0868400-019a-11eb-9009-bad50bdb4c5f.png)


    `master`가 `bugFix`의 부모쪽에 있었기 때문에, 단순히 그 브랜치를 더 앞쪽의 커밋을 가리키게 이동


<br>

---

<br>

Reference

[Learn Git Branching](http://learngitbranching.js.org)

<br>
<br>