---
sidebar_position: 3
---

# Function Variable

A form scope function can be defined with collection form's variable.

Create a JsExpression variable type, assign a name of the variable (e.g. ObjectID)

Paste the following Javascript Example to define a function that returns a UUID

```javascript
const ObjectID = bsonObjectid
const objectId = () => {
  return  ObjectID().toHexString();
}
return(objectId)
```