import { createContext, useContext } from 'react';

const ThemeContext = createContext();
function UseContext2() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
const Toolbar = () => {
  const theme = useContext(ThemeContext);

  return <div>Theme: {theme}</div>;
};

export default UseContext2;
