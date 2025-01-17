
import { Reaction } from "./ReactionWrapper";

interface ReactionBarProps {
  className?: string;
  reactions: Reaction[];
  onSelect?: (reaction: Reaction) => void;
  setShowReactionsBar: (shouldShow: boolean) => void;
  // setIsTransitioning: (isTransitioning: boolean) => void;
}

const ReactionsBar = ({
  className,
  reactions,
  onSelect,
  setShowReactionsBar,
  // setIsTransitioning
}: ReactionBarProps) => {

  const handleClick  = (selectedIcon : Reaction) => {
    // Hide the reactionBar
    console.log(selectedIcon);
    if(onSelect){
      onSelect(selectedIcon);
    }
    // TODO: Do a animation where emoji jumps back to the bar that we created
    const emojiElement = document.querySelector(`[src="${selectedIcon.src}"]`);
    if (emojiElement) {
    // setIsTransitioning(true)
    const rect = emojiElement.getBoundingClientRect();
    const clone = emojiElement.cloneNode(true) as HTMLElement;
    clone.style.position = "fixed";
    clone.style.left = `${rect.left}px`;
    clone.style.top = `${rect.top}px`;
    clone.style.transition = "all 0.5s ease-in-out";
    document.body.appendChild(clone);
    setShowReactionsBar(false);
    setTimeout(() => {
      document.body.removeChild(clone);
      // setIsTransitioning(false);
    }, 500);
  }
  }

  return (
    <div
    className={`flex items-center justify-between bg-white border border-gray-400 rounded-full 
    absolute bottom-[50%] left-[50%] translate-x-[-50%] 
    shadow-lg ${className}`}
  >
    {reactions?.map((icon, index) => (
      <img
        key={icon?.value + index}
        className={`transition-transform duration-300 m-2 hover:scale-125 cursor-pointer rounded-full
        border border-gray-300
        w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`}
        src={icon.src}
        alt={icon.label}
        onClick={() => handleClick(icon)}
      />
        // <span className="absolute bottom-[50%] left-[50%] translate-x-[-50%]">{icon.label}</span>
      
    ))}
  </div>
  );
};

export { ReactionsBar };
