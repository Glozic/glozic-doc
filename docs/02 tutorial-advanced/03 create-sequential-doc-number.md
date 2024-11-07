---
sidebar_position: 3
---

# Sequential Reference Number

By default, each document created in the Glozic platform is assigned a unique 128-bit UUID (Universally Unique Identifier) in RFC 4122 version 4 format. Additionally, a simplified running number is generated for each document.

While these unique identifiers are sufficient for technical identification, many businesses prefer to use custom document numbers, such as invoice numbers, purchase order numbers, or sales order numbers, to align with their specific numbering conventions.

In this tutorial, we will explore techniques to generate and assign these custom document numbers, leveraging the underlying UUID and running number systems provided by the platform.

## Generate Expense Number Endpoint

Follow the steps of [creating an Endpoint](/docs/01%20tutorial-basics/04%20sidenav) from the Basic Tutorial with the following values:

| Field | value |
|--|--|
| Title | Generate Expense Number |
| Name | generate-expense-number |
| Request Method | POST |
| Response Type | JSON |
| Endpoint Scope | Public |
| Description | Generate and return a sequential Expense Number |

Add a variable for the Endpoint with below proposed value

| Field | Value |
|--|--|
| Type | Request |
| Save as variable | request |

Drag and drop a **JS Editor** action to the flow, use the below suggested values for the **JS Editor** configuration

| Field | Value |
|--|--|
| Save as variable | expenseNumber |
| Code | \<refer to js code below\> |
```JS
var str = new Date().getFullYear();
var year = str.toString().match(/\d{2}$/)[0];
var sid = _var.request.body.sid;
year = "EX"+year+sid.toString().padStart(5, '0');
return(year)
```

Drag and drop a **Collection Operation** action to the flow, use the below suggested values for the **Collection Operation** action

| Field | Value |
|--|--|
| Method | Update |
| Select App | \<your app name\> |
| Select Collection | \<Expense\> |
| Fetch Record | documentId, "\{\{request.body.id\}\}" |
| Collection Submission Body | \<refer to below\> |
| Save response to variable | expDoc |

```JSON
{
    "expNumber": "{{expNumber}}"
}
```

## Update Expense Collection

Each newly created document in a Glozic collection is automatically assigned a unique UUID to its `_id` property and a sequential running number to its `sid` property upon saving. To implement custom document numbering (e.g., Expense Number), we'll leverage the `sid` value as a basis and trigger a webhook to generate the desired number.

To achieve this, we'll configure an event on the Expense collection. When a new expense document is created, a **Call Web Service** action will be triggered. This action will invoke a custom endpoint to generate the expense number based on the `sid` value. The generated expense number will then be updated in the expense document.

| Field | Value |
|--|--|
| Save as variable | ExpNumber |
| Method | POST |
| Request URL | \{\{baseurl\}\}/expense/endpoint/generate-expense-number |
| Response Type | Response Body |

Body
```JSON
{
    "id" : "{{document._id}}"
    "sid" : "{{document.sid}}"
}
