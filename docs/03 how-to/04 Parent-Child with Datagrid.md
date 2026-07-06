---
sidebar_position: 4
---

# Parent-Child Documents with Datagrid

Parent-child relationship with Journal_Entry to multiple Journal_Line example. Drag and drop a Datagrid component on the Journal Entry form as shown in the diagram below, add a Text Field component to the Datagrid (i.e. name "_id")

![](./img/Journal_Entry_Form.jpg)

Set the Custom Defalt Value of the Text Field with below javascript

```javascript
value = form.ObjectID()
```

![](./img/Text_Field_Custom_Default.jpg)

:::tip Note
This assigns a _id value to every row of the Datagrid. We can create an endpoint to be triggered by the collection event of "when document being added", "when document being updated", and "when document being deleted", to add/update/delete Journal Lines collection using the _id that was manually assigned before a Journal Line document is being created.
:::