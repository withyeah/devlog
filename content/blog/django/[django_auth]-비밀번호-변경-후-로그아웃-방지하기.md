---
title: "[Django_Auth] 비밀번호 변경 후 로그아웃 방지하기"
date: 2021-02-25 17:02:40
category: django
thumbnail: { thumbnailSrc }
draft: false
---

> django auth에서 user의 password를 변경하면 자동으로 로그아웃처리가 된다.
> 
> 이를 방지하기 위해 `update_session_auth_hash()`를 사용하는 방법을 알아보자.

<br>

password를 변경하는 코드의 예시를 들어보겠다.

```python
def password_change(request):
    if request.method == 'POST':
        form = PasswordChangeForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
    else:
        ...
```

<br>

![passwordchangeform](https://user-images.githubusercontent.com/45819975/109126603-ca6bf200-7790-11eb-934a-fc57d2c62941.png)

위 코드는 PasswordChangeForm을 사용해 user의 password를 변경해준다.

password를 변경해보면 바로 로그인 상태가 풀린다.

변경한 새로운 password로 로그인해보면 변경 로직은 잘 작동한 것을 확인할 수 있다.

> 로그아웃된 이유는 password가 변경되면서 기존 세션과의 user정보가 일치하지 않게 되었기 때문이다.

이러한 문제를 막기 위해 `update_session_auth_hash()`를 사용할 수 있다.

<br>

* 참고 : Django에 기본적으로 포함된 기본 password 변경 view(`PasswordChangeView`, `user_change_password view`)는 새로운 password 해시로 세션을 업데이트하기 때문에 로그아웃되지 않는다. 본 작성글의 경우처럼 custom password 변경 view를 사용하면서 로그아웃을 방지하기 원할 때 `update_session_auth_hash()`를 사용한다.
https://docs.djangoproject.com/ko/3.1/topics/auth/default/#session-invalidation-on-password-change

<br>


`update_session_auth_hash(request, user)` 함수는 현재 `request`와 (새로운 session hash가 만들어질) `업데이트된 user object`를 가져와서 session hash를 적절하게 업데이트 해준다.

즉, 현재 사용자의 인증 세션이 무효화되는 것을 막고 세션을 유지한 상태로 user object를 업데이트한다.

<br>

사용방법은 다음과 같다. 

두 번째 인자로 `user`를 받는 점을 유의한다.

```python
from django.contrib.auth import update_session_auth_hash

def password_change(request):
    if request.method == 'POST':
        form = PasswordChangeForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
    else:
        ...
```


<br>

---

<br>

<U>Reference</U>

https://docs.djangoproject.com/ko/3.1/topics/auth/default/#session-invalidation-on-password-change
