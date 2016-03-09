# prefix-keys
Take all the key-value pairs in an object and return a new object with the keys prefixed.

Useful for updating nested documents in MongoDB

## install

```
    npm install --save prefix-keys
```

## Use

```javascript
"use strict";
var prefixKeys = require("prefix-keys");

var data = {
    country: "CA",
    province: "ON"
};

var update = {
    $set: prefixKeys("location.", data)
};

var query = {
    _id: userId
};

db.users.update(query, update);
```
