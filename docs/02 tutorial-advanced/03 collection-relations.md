---
sidebar_position: 3
---

# Modeling Relationships

**Modeling Relationships in Glozic**

Glozic offers two primary techniques to model relationships between data:

1. Embedding:

- Subdocuments are directly embedded within a parent document. This approach is ideal for closely related data that is frequently accessed together.
- When you add components like DataGrid or EditGrid to a form, their data is typically stored as embedded subdocuments within the parent document.

2. Referencing:

- A reference (e.g., object ID) to a related document is stored. This is suitable for less tightly coupled relationships where child documents can be accessed independently.

In this tutorial, we will explore how to create a separate collection for subdocuments and establish a has-many relationship between the parent and child collections. This approach provides more flexibility and scalability, especially for large datasets or complex relationships.

## Create a Expense Items collection

## Create Belongs-to relationship in Expense Items

## Force saving Expense Items to Expense Items collection

## Display referenced document property in view