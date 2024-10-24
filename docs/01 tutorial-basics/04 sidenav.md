---
sidebar_position: 4
---

# SideNav

A Drag-and-Drop Approach to Side Navigation.

In web applications, the **SideNav** (or Sidebar) is a commonly used navigation element that provides a convenient way to access different content areas. Glozic offers a streamlined approach to SideNav design, allowing developers to create custom navigation panels through a simple drag-and-drop interface.

The SideNav designer in Glozic generates a JSON definition that accurately represents the desired layout and configuration. This JSON definition is then used by the Glozic platform to render the SideNav within the application, ensuring a seamless and intuitive user experience.

## Create a SideNav

Visit the **SideNavs** link from the **Studio Console** SideNav as shown in below screen capture, click the **Add SideNav** button to create a new SideNav.

![](/img/SideNav-List.png)

Click the "**Add SideNav**" button to add a new SideNav, enter a **Title** and select the first option for the **Type**,
![](/img/SideNav-Create-1.png)

The **Add SideNav** wizard steps through creating a SideNav will be shown as below screen capture. Click the **Design** action of the SideNav to continue designing the SideNav.
![](/img/SideNav-Create-2.png)

Click the **Trash** of SideNav items to delete unwanted items. Keep only two items as shown in the below screen capture.
![](/img/SideNav-Create-3.png)

Click the **Pencil** icon to edit the SideNav item with the below table of suggested values

| No | Field Name | Value |
| -- | ---------- | ----- |
| 1  | Title      | Expenses |
|    | link route | /collection/expense |
| 2  | Title      | Dashboard |
|    | link route | /page/root/home |
-----------------

Drag the SideNav item up or down to rearrange the order as shown in the below screen capture.
![](/img/SideNav-Create-4.png)

Since we are expecting the Dashboard link to be `/page/root/home`, we're going to reconfig the **Application Landing Page** title from `Application Landing Page` to `Home`. To do so, go to the Pages list of Studio Console, and click **Design** to edit the **Application Landing Page**.
![](/img/Pages-Change-1.png)

We are going to change the Page Title (i.e. including the **path**), and attach the **customSideNav1** to the page. Click the **Cog** icon as shown in the below screen capture to open the Page's setting.
![](/img/Pages-Change-2.png)

Change the values according to the suggested highlighted in the below screen capture.
![](/img/Pages-Change-3.png)

Once done, click elsewhere outside of the **Page Setting** modal dialog area to close the Page Settings. Don't forget to also update the page, and exit the Page designer. 

We will need to do the same for the **Expense** collection to attach the **customSideNav1** SideNav. To do so, go to the Collections list and click **Design** to open the Collection designer to make changes according to the suggestion highlighted in the below screen capture.
![](/img/Collections-Change-1.png)

After you have done changing the Collection settings, update and exit the Collection Designer. Click the **Run** icon as shown in the below screen capture to test the application.
![](/img/Collections-Change-2.png)

The application will be opened in Run mode as how it should look like as being seen by the end users.
![](/img/Collections-Change-3.png)

Congratulations!! You have completed building a simple application on Glozic platform.


