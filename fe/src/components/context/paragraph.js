import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Paragraph = () => {
  const context = useContext(ThemeContext);

  return (
    <p className={context.theme}>
      Đây là đoạn text
    </p>
  );
} 

export default Paragraph;