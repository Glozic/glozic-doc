---
sidebar_position: 5
---

# Endpoints

**Endpoints in Glozic**: The Building Blocks of API Interactions

In Glozic, Endpoints are synonymous with APIs. They represent specific addresses or HTTPS URLs that serve as entry points for data exchange. Clients can interact with these endpoints to fetch data, send requests, or trigger actions within the Glozic platform.

Glozic Endpoints adhere to the REST API standard, employing common HTTP methods like GET, POST, PUT (or UPDATE), DELETE, and more. This standardized approach ensures interoperability and ease of use for developers.

When interacting with an endpoint, clients can expect responses in various formats, such as JSON, TEXT, or even binary data like images. This flexibility allows for seamless integration with different applications and data types.

## Creating your first Endpoint

Go to the Endpoints list from the Studio Console menu as shown in the below screen capture. To create an Endpoint, click the "**New Endpoint**" button.
![](/img/Endpoint-List.png)

Fill in the values as suggested in the below screen capture, and "Submit" to create the Endpoint.
![](/img/Endpoint-Create-1.png)

We have just defined an Endpoint with URL `https://<tenant>.glozic.dev/<initial>-expense/endpoint/expenses` with GET HTTPS request method. This is presented in the **Settings** of the Endpooint designer as shown in the below screen capture. Since this endpoint intends to return list of **Expenses** records, we will use a **Variable** to get the data for rendering the return.
![](/img/Endpoint-Create-2.png)

As thie Endpoint is to return the list of Expense records, we going to add a Variable to get data from the **Expense** collection, this variable will be used as content to be rendered. **Add Variable** and fill in the variable configuration as suggested in the below screen capture.
![](/img/Endpoint-Create-3.png)

Click "Submit" once done, noticed the variable is added as shown in the below screen capture, proceed to the "**Action**" tab as highlighted to start creating the endpoint flow.
![](/img/Endpoint-Create-4.png)

Drag the **Render Web Content** action on the the flow canvas as shown in the below screen capture. Click the **Render Web Content** action and fill in values as suggested in the screen capture below.
![](/img/Endpoint-Create-5.png)

Click **Save** to save changes made on the **Render Web Content** action, click elsewhere on the area outside of the Action configuration modal box to close the modal box, click **Update** followed by **Exit** button to update the endpoint design and exit from the endpoint designer.

## Test the Endpoint
Copy the URL of the endpoint, and try it out from either using Postman or Web browser, you should be getting the result similar to the below screen capture.
![](/img/Endpoint-Create-6.png)


