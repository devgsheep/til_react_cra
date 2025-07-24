import { createContext, useEffect, useReducer } from "react";
// 1. 초기값 설정
const initialState = "light";
// 2. 리듀서 함수 생성
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const nowTheme = state === "light" ? "dark" : "light";
      // 글자보관
      localStorage.setItem("theme", nowTheme);
      return nowTheme;
    case "INIT":
      return action.payload || "light";
    default:
      return state;
  }
}

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  // 3. state 생성
  const [theme, dispatch] = useReducer(reducer, initialState);
  // 최초로 LocalStorage에서 값 읽어들임

  useEffect(() => {
    const result = localStorage.getItem("theme");
    dispatch({ type: "INIT", payload: result });
  }, []);
  // jsx
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
