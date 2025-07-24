import { useContext } from "react";
import {
  EmotionContext,
  EmotionContextProvider,
} from "./contexts/EmotionContext";

function EmotionComponent() {
  const { emotion, dispatch, isSelected, setIsSelected } =
    useContext(EmotionContext);
  const bgColors = {
    happy: "yellow",
    sad: "blue",
    angry: "red",
  };
  const message = {
    happy: "지금 나는 😊 행복해요!",
    sad: "지금 나는 😥 슬퍼요...",
    angry: "지금 나는 🤬 화났어요.",
  };

  return (
    <div
      style={{
        backgroundColor: bgColors[emotion],
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>오늘의 기분 등록하기</h1>
      <h2>{message[emotion]}</h2>
      <div>
        <button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "HAPPY" });
            setIsSelected(true);
          }}
        >
          😊
        </button>
        <button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "SAD" });
            setIsSelected(true);
          }}
        >
          😢
        </button>
        <button
          disabled={isSelected}
          onClick={() => {
            dispatch({ type: "ANGRY" });
            setIsSelected(true);
          }}
        >
          🤬
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <EmotionContextProvider>
      <EmotionComponent />
    </EmotionContextProvider>
  );
}

export default App;
