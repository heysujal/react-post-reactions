import React, {useState} from "react"
import { ReactionsBar } from "./ReactionBar";

export interface Reaction{
    src: string; //TODO: This should support url, svg and simple images and emojis and lottie
    label: string; // TODO: use it for alt and showing on hover
    value: string; // TODO: use it for the onSelect
}

interface ReactionWrapperProps {
    children: React.ReactNode;
    className?: string; // To style the wrapper bar
    reactions: Reaction[];
    // I was thinking this onSelect would go on to every icon instead of the wrapper
    onSelect?: (reaction: Reaction) => void; // print the reaction chosen
    
}



const ReactionWrapper: React.FC<ReactionWrapperProps> = ({children, className, reactions, onSelect}) => {
    const [showReactionsBar, setShowReactionsBar] = useState(false);
    // const [isTransitioning, setIsTransitioning] = useState(false);
    const handleMouseOver = () => {
        // if(isTransitioning) return;
        setShowReactionsBar(true);
    }
    const handleMouseOut = () => {
        // if(isTransitioning) return;
        setShowReactionsBar(false);
    }
    // This children can be any react component

    //TODO: Somehow eliminate this usage of extra div and use children
    // as a component directly
    return ( <div
            onMouseOver = {handleMouseOver}
            onMouseOut = {handleMouseOut}
            >
            {showReactionsBar && <ReactionsBar 
            className={`transition ${className}`} 
            reactions={reactions}
            onSelect={onSelect}
            setShowReactionsBar={setShowReactionsBar}
            // setIsTransitioning={setIsTransitioning}  
            />}
            {children}
        </div>)
}

export {ReactionWrapper};