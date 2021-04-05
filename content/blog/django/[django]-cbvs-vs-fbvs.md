---
title: "[Django] CBVs vs FBVs"
date: 2021-04-05 15:04:70
category: django
thumbnail: { thumbnailSrc }
draft: false
---
> The most import takeaway from this post
>
> CBVs and FBVs don’t replace each other

## Comparison


|                           | CBVs                                    | FBVs                                               |
| ------------------------- | --------------------------------------- | -------------------------------------------------- |
| Code Flow                 | Implicit                                | Explicit                                           |
| Readability               | Harder                                  | Easy                                               |
| Reusability               | Great                                   | Hard                                               |
| Specialized Functionality | No but can use generic CBVs             | Handling of HTTP methods via conditional branching |
| Usage of Decorators       | Require extra import or method override | Straightforward                                    |
| Code Duplication          | DRY                                     | A lot                                              |
| Extendability             | Easy using Mixins                       | Hard                                               |



## Conclusion

It’s hard to say which is better. 

It highly depends on the context.

If you need to implement let’s say a list view, it’d be better with CBVs where you can just subclass the `ListView` and override the attributes.

On the other hand if you want to make a complicated operation or handle multiple forms at the same time, FBVs will be better.

---

### [Introduction to class-based views](https://docs.djangoproject.com/en/2.2/topics/class-based-views/intro/)

```python
from django.http import HttpResponse

def my_view(request):
    if request.method == 'GET':
        # <view logic>
        return HttpResponse('result')
```

```python
from django.http import HttpResponse
from django.views import View

class MyView(View):
    def get(self, request):
        # <view logic>
        return HttpResponse('result')
```
<br>

---

<br>

<U>Reference</U>


[Django : Class Based Views vs Function Based Views](https://medium.com/@ksarthak4ever/django-class-based-views-vs-function-based-view-e74b47b2e41b)

[https://docs.djangoproject.com/en/2.2/topics/class-based-views/intro/](https://docs.djangoproject.com/en/2.2/topics/class-based-views/intro/)

<br>

<br>