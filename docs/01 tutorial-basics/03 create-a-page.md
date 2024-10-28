---
sidebar_position: 3
---

# Pages

A Versatile Tool for Web Page Creation

**Pages** provide a powerful platform for designing and developing dynamic web pages. They serve as a canvas for rendering information, capturing user input, and triggering actions within the **Glozic** ecosystem. Like form design, Pages offer a flexible layout system that accommodates various components, including forms, text, images, and more.

## Key features

- **Data Capture**: Efficiently collect user data through forms, inputs, and other interactive elements.
- **Action Triggers**: Initiate actions based on user interactions, such as fetching additional data using action connectors or storing information in collections.
- **Customizability**: Leverage JavaScript, CSS, and external libraries to tailor page appearance and behavior.
- **Design Efficiency**: Import and export page designs to streamline development and collaboration.

With **Pages**, developers can create engaging and interactive web experiences that align with their specific application requirements.

## List of pages

By default, **Application Landing Page** will be added automatically as the first page when an Application is created. Pages can be access from the **Studio Console**'s Pages menu as shown in the below screen capture.

![](/img/Pages-List.png)

## Modify an existing page

Click the **Design** of the **Applicaation Landing Page** from the Pages view. Edit the **HTML** component as highlighted in the below screen capture.
![](/img/Pages-Design-1.png)

Replace the `{{form.applicationName}}` with `{{form.applicationName.toLowerCase().replace(/\b(\s\w|^\w)/g, function (txt) { return txt.toUpperCase(); })}}` and save the updated HTML component, update the page, and check the outcome to confirm changes.
![](/img/Pages-Design-1.png)

:::tip Note
Noticed the support of [lodash templating](https://lodash.com/docs) languague on Page design. Similarly, **Page** supports other features such as loading of data via the Variables, external Javascript libraries, CSS, etc.
:::
