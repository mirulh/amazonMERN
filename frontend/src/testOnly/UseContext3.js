import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function UseContext3() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Layout1 />
        <Layout2 />
      </ThemeContext.Provider>
      <div>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </div>
    </>
  );
}

const Layout1 = () => {
  const theme = useContext(ThemeContext);

  return <div>Layout 1 Theme: {theme}</div>;
};

const Layout2 = () => {
  const theme = useContext(ThemeContext);

  return <div>Layout 2 Theme: {theme}</div>;
};

export default UseContext3;
