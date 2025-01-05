import React, {useState} from "react"
import { ReactionsBar } from "./ReactionBar";

// As a dev, 
// mujhe bas emojis ke array pass krna pde 
// aur mai apne wrapper mei apna component de du(DONE)
// is button ke hover pe wo reactions dikhne chahiye!

export interface Reaction{
    src: string; //TODO: This should support url, svg and simple images and emojis
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

const ReactionWrapper = ({children, className, reactions}):ReactionWrapperProps => {

    const [showReactionsBar, setShowReactionBar] = useState(false);
    // This children can be any react component
    return ( <div
            onMouseOver = {() => setShowReactionBar(true)}
            onMouseOut = {() => setShowReactionBar(false)}
            className="inline-block relative reaction-wrapper-bar border border-black top-[100px] left-[100px]">
            {showReactionsBar && <ReactionsBar className={className} reactions={reactions}/>}
            {children}
        </div>)
}

export  {ReactionWrapper};