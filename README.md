# E-Commerce Web Application
This is a modern, dynamic, and responsive e-commerce web application built using React and Vite. The application provides users with a seamless shopping experience with features such as product listing, cart management, and toast notifications for user actions. The application leverages React's component-based architecture for maintainability and scalability.

## Features

- Product Listing: Displays all available products dynamically.
- Add to Cart: Allows users to add items to the cart and manage them.
- Empty Cart: Allows users to empty their cart by clicking the trah button just once.
- Toast Notifications: Provides feedback for user actions (e.g., "Item added to cart").
- Lazy Loading: Optimized image loading using the react-lazy-load-image-component library.
- Responsive Design: The application is fully responsive, dynamic and works across all screen sizes.
- Shopping Cart : Allows users to view their cart at any time along with total cart value and no of items in the cart.

## Project Structure

src/
|-- components/         # Reusable React components
|-- pages/              # Page-level components
|-- app/                # Redux store and slices
|-- assets/             # Static assets like images and icons
|-- styles/             # Global and component-specific styles
|-- utils/              # Utility functions
|-- main.jsx            # routing setup for the application 
|-- App.jsx             # Entry point for the React application

## Technologies Used

- Frontend: React, Vite
- State Management: Redux Toolkit
- Styling: Tailwind CSS
- Optimizations: Lazy-loading images with react-lazy-load-image-component

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or later)
- vite 
- npm or yarn package manager

## Setup

### 1. Clone the Repository:

Clone the repository to your local machine:
git clone <repository-url>
cd <repository-folder>
cd <project-name> in this case project name is :- Ecomproduct

### 2. Install dependencies:
npm install
# or
yarn install

Note:- run below command in case you don't have vite installed on your system as this project is created using vite.
npm install vite
# or
npm install -D vite

### 3. Start the development server:
npm run dev
# or
yarn dev

### 4. Open the application:
The application will be available at http://localhost:5173 in your browser.

## Additional Notes
- Customization: The application uses Tailwind CSS, which allows easy customization of styles via the tailwind.config.js file.
- Performance: Vite ensures fast builds and optimized production assets.

## Acknowledgments
- React and its amazing ecosystem
- Vite for its super-fast bundling
- Tailwind CSS for simplifying styling

Feel free to fork and contribute to this project! Happy coding!







