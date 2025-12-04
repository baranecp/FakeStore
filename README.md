# FakeStore
![FakeStore Preview](./public/preview.png)

A React-based e-commerce application that fetches products from the [Fake Store API](https://fakestoreapi.com/) and allows users to browse products and manage a shopping cart.

## Features

- Browse products from the Fake Store API
- Add and remove items from shopping cart
- Adjust item quantities in cart
- View cart total
- Responsive UI with Chakra UI

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Chakra UI** - Component library
- **React Router** - Client-side routing
- **Fake Store API** - Product data

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/baranecp/FakeStore.git
   cd FakeStore
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
├── context/        # React context for state management
├── services/       # API and data fetching hooks
├── App.jsx         # Main application component
└── main.jsx        # Application entry point
```

## License

This project is for educational purposes.
