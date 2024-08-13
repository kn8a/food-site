## React-Vite food manufacturer's website

![Cagefepture](https://github.com/user-attachments/assets/f70fe81e-fb84-4234-a380-b055fb2ae41c)

This project is a React-based web application built with Chakra UI and React Router. It provides an interactive user experience for exploring products, learning about the company, and managing a shopping cart.

## Features

- **Responsive Design:** The application is fully responsive, using Chakra UI to ensure a seamless experience across all devices.
- **Routing:** Implemented using `react-router-dom` to provide smooth navigation between pages.
- **Shopping Cart:** Users can add, remove, and update quantities of products in the shopping cart.
- **Theming:** Custom theme integration with Chakra UI for consistent styling.
- **Dynamic Content:** Various pages including Home, About, Products, Global Reach, and Contact Us.

## Project Structure

- **`src/components`:** Contains reusable components such as `Header`, `Footer`, and `CartDrawer`.
- **`src/pages`:** Contains page components such as `Home`, `About`, `Products`, `GlobalReach`, and `ContactUs`.
- **`src/theme`:** Custom Chakra UI theme configuration.
- **`src/App.js`:** The main application component that integrates all pages and components with routing and state management.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hummus-salads.git
   cd hummus-salads
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   
## Usage

- **Navigating the App:** The app includes several pages such as Home, About, Products, Global Reach, and Contact Us. Navigate using the header links.
- **Adding Products to Cart:** On the Products page, users can add items to the cart by selecting the desired size and quantity.
- **Managing Cart Items:** The cart can be accessed via the cart icon in the header. Users can toggle the cart drawer, remove items, and update quantities.
- **Theming:** The app uses a custom Chakra UI theme located in the src/theme directory. Feel free to customize the theme to fit your needs.
