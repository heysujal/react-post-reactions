import { Reaction } from "./ReactionWrapper";

const ReactionsBar = ({
  className,
  reactions,
}: {
  className: string;
  reactions: Reaction[];
}) => {
  return (
    <div
      className={`h-12 px-2 w-auto min-w-[400px] bg-white flex justify-between items-center gap-2 border border-gray-400 rounded-full absolute top-[-45px] left-[-60px] z-20 ${className}`}
    >
      {reactions?.map((icon, index) => {
        return (
          <img 
            key={icon?.value + index} 
            className="w-8 h-8 p-1 border border-gray-600 hover:scale-150
            hover:cursor-pointer
            hover:bg-gray-200
            hover:border-gray-400
            hover:border-2
            hover:shadow-lg
            hover:shadow-gray-400
            hover:rounded-full
            hover:p-0
            hover:m-0
            transition rounded-full" 
            src={icon.src} 
            alt={icon.label}
          />
        )
      })}
    </div>
  );
};

export { ReactionsBar };
