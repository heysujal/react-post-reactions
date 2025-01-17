import { Reaction, ReactionWrapper } from "./components/ReactionWrapper";
import accurateGif from "./assets/accurate.gif";
import angryGif from "./assets/angry-review.gif";
import financialFreedomGif from "./assets/financial-freedom.gif";
import growthGif from "./assets/growth.gif";
import heartGif from "./assets/heart.gif";
import highFiveGif from "./assets/high-five.gif";
import passionGif from "./assets/passion.gif";

function App() {
  const reactions = [
    { src: heartGif, label: "Heart", value: "heart" },
    { src: accurateGif, label: "Accurate", value: "accurate" },
    { src: passionGif, label: "Passion", value: "passion" },
    { src: highFiveGif, label: "High Five", value: "high-five" },
    { src: financialFreedomGif, label: "Financial Freedom", value: "financial-freedom"},
    { src: angryGif, label: "Angry", value: "angry" },
    { src: growthGif, label: "Growth", value: "growth" },
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <ReactionWrapper
        reactions={reactions}
        onSelect={(icon: Reaction) => {
          console.log(icon);
        }}
      >
        <button className="bg-blue-300 p-1">Hover me and React</button>
      </ReactionWrapper>
    </div>
  );
}

export default App;
