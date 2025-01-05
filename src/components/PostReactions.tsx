// TODO: Add animation for hover on icon => Scale on hover smoothly and scale down on exit
// TODO: Add support for Lottie animations like facebook did
// TODO: Animate some more icons
// TODO: Add sound when the icon pops up


export interface IconType  {
    src: string;
    alt: string;
}
export interface ReactionTypes {
    className?: string;
    icons: IconType[];
    iconHeight?: number;
    iconWidth?: number;
}


const PostReactions = function({className, icons, iconHeight, iconWidth}: ReactionTypes){
    return <div className={`flex justify-between border border-gray-400 rounded-full w-[20%] p-2 ${className}` } >
        {
            icons.map((icon) => {
                return (<div className="border border-gray-400 rounded-full p-2 mx-4 bg-white hover:scale-150 ">
                        <img src={icon.src} alt={icon.alt} height={iconHeight} width={iconWidth}/>
                    </div>)
            })
        }

    </div>
}

export {PostReactions};



