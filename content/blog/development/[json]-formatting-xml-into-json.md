---
title: "[JSON] Formatting XML into JSON"
date: 2021-04-05 15:04:92
category: development
thumbnail: { thumbnailSrc }
draft: false
---

There are certain cases where you need to serialize some response into JSON but your desired API only offers XML res.

So here's how you format/convert XML response into JSON.


### First, There is no "one-to-one" relationship between XML and JSON.

<br>

- Then, how to shove XML data into JSON object?

googling returned few ways to do this but you might want to do it as simple as possible

(i.e. online converters, XML → dict → JSON, ... )

<br>

- `xmljson 0.2.0`
    - supports converting XML ↔  JSON
    - available JSON conventions
        - [Abdera](http://wiki.open311.org/JSON_and_XML_Conversion/#the-abdera-convention): Use  for `"attributes"` for attributes,  `"children"` for nodes
        - [BadgerFish](http://www.sklar.com/badgerfish/): Use `"$"` for text content,  `@` to prefix attributes
        - [Cobra](http://wiki.open311.org/JSON_and_XML_Conversion/#the-cobra-convention): Use `"attributes"` for sorted attributes (even when empty),  `"children"` for nodes, values are strings
        - [GData](http://wiki.open311.org/JSON_and_XML_Conversion/#the-gdata-convention): Use `"$t"` for text content, attributes added as-is
        - [Parker](https://developer.mozilla.org/en-US/docs/JXON#The_Parker_Convention): Use tail nodes for text content, ignore attributes
        - [Yahoo](https://developer.yahoo.com/javascript/json.html#xml) : Use `"content"` for text content, attributes added as-is

<br>

### Converting example using BadgerFish convention

XML
```
<employees>
    <person>
        <name value="Alice"/>
    </person>
    <person>
        <name value="Bob"/>
    </person>
</employees>
```
JSON
```
{
    "employees": [{
        "person": {
            "name": {
                "@value": "Alice"
            }
        }
    }, {
        "person": {
            "name": {
                "@value": "Bob"
            }
        }
    }]
}
```

<br>

- In my case, I tried using Abdera first, result turned out with too many "attributes" and "children"
- next tried Yahoo and looked great!

<br>

[example in Python]

```bash
pip install xmljson
```

```python

from xmljson import yahoo

key = [API_SPECIFIC_KEY]
url = [API_URL] + key
request = requests.get(url).text
response = json.dumps(yahoo.data(fromstring(request)), ensure_ascii=False)
try:
    response = json.loads(response)['response']['body']
except KeyError:
    response = {
        'status_code': 200,
        'results': 'temporarily unavailable',
    }
serialized['STRUCTURE_0']['STRUCTURE_1'] = response

serialized = json.dumps(serialized)
```

<br/>
---

<br/>

Reference

[https://pypi.org/project/xmljson/](https://pypi.org/project/xmljson/)


<br/>

<br/>