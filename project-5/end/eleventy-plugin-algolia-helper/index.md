---
layout: "base.html"
data: 
  html: <h1 class="myClass">Test</h1><p>Test</p>
  date: "2020-01-01"
---

# Eleventy Plugin Algolia Helper Test

## Remove HTML
### Raw data
```
  {{ data.html }}
```

### Using | htmlStrip

```
  {{ data.html | htmlStrip }}
```

## jsDate
### Raw data
```
  {{ data.date }}
```
### Using | jsDate

```
  {{ data.date | jsDate }}
```


## jsonify

### Raw data

```
  {{ data }}
```

### Using | jsonify

```
  {{ data | jsonify }}
```

## search

```
  {{ "test" | search | jsonify }}
```
