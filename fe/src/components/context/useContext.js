import { ThemeContext, ThemeProvider } from './themeContext';
import { useContext } from 'react';
import Paragraph from './paragraph';
import '../../App.css'

// ComA => (theme) CompB => ComC
// 1 create context
// 2 provider
// 3 consumer

const UseContext = () => {
  const context = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Theme</button>
      <Paragraph />
    </div>
  );
}

export default UseContext;