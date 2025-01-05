import { useState } from "react";
import { IconType, PostReactions } from "./components/PostReactions";
import {ReactionWrapper} from "./components/ReactionWrapper";
import accurateGif from "./assets/accurate.gif";
import angryGif from "./assets/angry-review.gif"
import financialFreedomGif from "./assets/financial-freedom.gif"
import growthGif from "./assets/growth.gif"
import heartGif from "./assets/heart.gif"
import highFiveGif from "./assets/high-five.gif"
import passionGif from "./assets/passion.gif";

console.log(accurateGif);
function App() {
  // const icons: IconType[] = [
  //   {
  //     src: "https://img.icons8.com/?size=100&id=Li62CRyJSreB&format=png&color=000000",
  //     alt: "link-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=6nc0mE9ICHsC&format=png&color=000000",
  //     alt: "share-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  //     alt: "chatgpt-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=18515&format=png&color=000000",
  //     alt: "fire-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  //     alt: "chatgpt-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=18515&format=png&color=000000",
  //     alt: "fire-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  //     alt: "chatgpt-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=18515&format=png&color=000000",
  //     alt: "fire-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  //     alt: "chatgpt-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=18515&format=png&color=000000",
  //     alt: "fire-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  //     alt: "chatgpt-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=18515&format=png&color=000000",
  //     alt: "fire-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  //     alt: "chatgpt-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=18515&format=png&color=000000",
  //     alt: "fire-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  //     alt: "chatgpt-icon",
  //   },
  //   {
  //     src: "https://img.icons8.com/?size=100&id=18515&format=png&color=000000",
  //     alt: "fire-icon",
  //   },
  // ];

  const [showPostReaction, setShowPostReaction] = useState(false);
  const reactions = [
    { src: accurateGif, label: "Accurate", value: "accurate" },
    { src: angryGif, label: "Angry", value: "angry" },
    { src: financialFreedomGif, label: "Financial Freedom", value: "financial-freedom" },
    { src: growthGif, label: "Growth", value: "growth" },
    { src: heartGif, label: "Heart", value: "heart" },
    { src: highFiveGif, label: "High Five", value: "high-five" },
    { src: passionGif, label: "Passion", value: "passion" },
  ];

  return (<ReactionWrapper reactions={reactions}>
            <button
            className="p-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit"
            >Hover Me
            </button>
          </ReactionWrapper>
    // <>
    //   <button
    //     type="button"
    //     onMouseEnter={() => setShowPostReaction(true)}
    //     onMouseLeave={() => setShowPostReaction(false)}
    //     className="ml-80 mt-48 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    //   >
    //     Hover Me!
    //   </button>
    //   {showPostReaction && (
    //     <PostReactions
    //       icons={icons}
    //       className="mx-auto mt-48"
    //       iconHeight={50}
    //       iconWidth={50}
    //     />
    //   )}
    // </>
  );
}

export default App;


