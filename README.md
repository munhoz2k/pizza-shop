<h1>Pizza Shop</h1>
<p>
 <a href="#about">About</a> • 
 <a href="#objective">Objective</a> •
 <a href="#how-to-install">How to install</a> • 
 <a href="#technologies">Technologies</a> • 
</p>

<!-- ![giphy](https://github.com/munhoz2k/github-blog/assets/71861475/13c47d2c-c118-4c12-922c-03d82447cbb6) -->
 
# About
This is a beautiful page built with Shadcn/ui & Tailwind where restaurants can manage their
delivery orders. It can be integrated with an API like iFood to receive and manage orders.

The Pizza Shop dashboard contains financial metrics and two charts. The first is a line chart
showing the total value of orders received on the days selected by the user, with the ability
to select a maximum of 7 days. The second chart is a pie chart that displays the 5 most ordered products.

The page also features an order list where orders can be managed. In this list, you can change
the order status, cancel an order, and view order details to see more information about the order and the customer.

# Objective
This project is a Rocketseat's challenge to the students where they have to develop the app by themselves.
the purpose of this application is to practice my front-end skills building this beautiful page :D

# How to install
### `Installing packages:`
- First, clone the repository to your machine
- After cloning the repository, open the terminal inside the cloned repository directory and type:
```
  npm install
```

### `Run the app:`
- Now you gotta just run it...
```
  npm run dev:test
```
  
### `Optional:`
- You can run the Pizza Shop back-end server locally provided by Rockeseat community.
- You can access the Pizza Shop back-end github on this link: [@pizzashop-api](https://github.com/rocketseat-education/pizzashop-api).
- After cloning the back-end and running it on your machine, you'll have to create a `.env.local` file containing:
```env
  VITE_API_URL="http://localhost:3333"
  VITE_ENABLE_API_DELAY='true'
```  

- With the API running locally, run the application out of test mode:
```
  npm run dev
```  

- API response delay is enabled by default, you can change that by setting it to false
- Also, if you want to change the backend host port, you can do so in the API source code and in the .env file.

# Technologies
- [@react](https://github.com/facebook/react)
- [@styled-components](https://github.com/styled-components/styled-components)
- [@typescript](https://github.com/microsoft/TypeScript)
- [@nodejs](https://github.com/nodejs/node)
- [@vitejs](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@eslint](https://github.com/eslint/eslint)
