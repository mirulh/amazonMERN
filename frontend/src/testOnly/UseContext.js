import React, { createContext, useContext } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Provide a value
const App = () => {
  const theme = 'dark';

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Toolbar />
        <Toolbox />
      </ThemeContext.Provider>
      <p>
        The theme is the parent components (ThemeContext.Provider) but is
        accessible to all of its children (Toolbar, Toolbox)
      </p>
    </>
  );
};

// Step 3: Access the context value
const Toolbar = () => {
  const theme = useContext(ThemeContext);
  return <div>Toolbar theme: {theme}</div>;
};

const Toolbox = () => {
  const theme = useContext(ThemeContext);
  return <div>Toolbox theme: {theme}</div>;
};

export default App;

/* 

What is provider in react?

A provider is a component used to pass data to its descendant components. It allows you to propagate data down the component tree without having to explicitly pass props through every level of nesting


The 'Provider' component is typically paired with the 'useContext' hook to provide the context value to its descendant components. When you wrap a portion of your component tree with a 'Provider', any component with that subtree can access the provided value using 'useContext'

*/
