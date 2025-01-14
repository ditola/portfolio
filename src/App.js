/**
 * @component App
 * @description Root component of the application that serves as the main layout container
 * and routing configuration. Implements error boundaries and theme context for better
 * user experience and maintainability.
 * 
 * Features:
 * - Error Boundary implementation for graceful error handling
 * - Theme context provider for consistent styling
 * - Responsive layout container
 * 
 * @author Diego Torres
 * @version 1.1.0
 */

import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import './styles/animations.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Theme Context
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`${theme}-theme min-h-screen`}>
          <Portfolio />
        </div>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

export default App;