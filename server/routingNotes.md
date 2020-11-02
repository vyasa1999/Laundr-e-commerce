# Lina's Routing Notes

- On the front end we'll have a button stored in a form with an action routing to something like "/productMethod" and method="POST"
`<form action="/productMethod" method="POST">[form content]</form>`
- This triggers a request to the corresponding backend route, similar to what's in cart.router.js `router.post("/productMethod", function())` calling, for example, an update in the quantity of the cart
- For any request that involves grabbing data from a front end form, perhaps like the credit card information, you should be able to call those info variables from req.body instead of req.params, because the route connections made by the forms should take care of the passing of that data. 
