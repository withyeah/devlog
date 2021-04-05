---
title: "[Redis] Django + Redis + ElastiCache"
date: 2020-02-05 17:04:74
category: development
thumbnail: { thumbnailSrc }
draft: false
---

Let's find out how to attach Redis on Django (+ElastiCache)

## Get Redis

- install redis

    ```bash
    brew install redis
    ```

- check if it works

    ```bash
    ❯ redis-server
    75120:C 05 Feb 2020 13:53:59.853 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
    75120:C 05 Feb 2020 13:53:59.853 # Redis version=5.0.7, bits=64, commit=00000000, modified=0, pid=75120, just started
    75120:C 05 Feb 2020 13:53:59.853 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
    75120:M 05 Feb 2020 13:53:59.856 * Increased maximum number of open files to 10032 (it was originally set to 256).
                    _._
               _.-``__ ''-._
          _.-``    `.  `_.  ''-._           Redis 5.0.7 (00000000/0) 64 bit
      .-`` .-```.  ```\/    _.,_ ''-._
     (    '      ,       .-`  | `,    )     Running in standalone mode
     |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
     |    `-._   `._    /     _.-'    |     PID: 75120
      `-._    `-._  `-./  _.-'    _.-'
     |`-._`-._    `-.__.-'    _.-'_.-'|
     |    `-._`-._        _.-'_.-'    |           http://redis.io
      `-._    `-._`-.__.-'_.-'    _.-'
     |`-._`-._    `-.__.-'    _.-'_.-'|
     |    `-._`-._        _.-'_.-'    |
      `-._    `-._`-.__.-'_.-'    _.-'
          `-._    `-.__.-'    _.-'
              `-._        _.-'
                  `-.__.-'

    75120:M 05 Feb 2020 13:53:59.857 # Server initialized
    75120:M 05 Feb 2020 13:53:59.857 * DB loaded from disk: 0.000 seconds
    75120:M 05 Feb 2020 13:53:59.858 * Ready to accept connections
    ```

    on different terminal window

    ```bash
    ❯ redis-cli ping
    PONG
    ```

    → it means it's working

## Specific Use for Django

```bash
pip install django-redis
```

```bash
# settings/base.py

CACHES = {  
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}
```

## Use Case as Caching

```python
from django.core.cache import cache

cache.set('key', 'value')
foo = cache.get('key')
```

```bash
foo
'value'
```

## Use ElastiCache + Redis

follow ElastiCache documentation ([https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/GettingStarted.html](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/GettingStarted.html))

> Configure everything same with ec2 instance you're using

[Subnet Group]

[Availability zone(s)]

- You might want to recreate the `cluster` because the default can be different from what you already have.

[Security groups]

- Also make sure you select same `security group/vpc` as in your instance



<br/>

---

<br/>

Reference

[https://nachwon.github.io/redis/](https://nachwon.github.io/redis/)

[https://jupiny.com/2018/02/27/caching-using-redis-on-django/](https://jupiny.com/2018/02/27/caching-using-redis-on-django/)


<br/>

<br/>
