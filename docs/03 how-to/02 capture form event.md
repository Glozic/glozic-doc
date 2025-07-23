---
sidebar_position: 2
---

# Listen to form event

Developer may create a Form for Collection with custom Javascript code. With custom Javascript code, we can simply add code to listen to form change event and examine which component value has changed. To do this, simply use the following code sample to capture the "change" event.

```javascript
formio.on('change', function(event) {
  if (event.changed) {
    console.log("event changed",event.changed.component.key)
  }
});
formio.on('componentChanged', function(event) {
    console.log("event rowAdded")
});
```