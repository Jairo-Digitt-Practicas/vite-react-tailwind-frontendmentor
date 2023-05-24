import CrossIcon from "./icons/Crossicon";

const TodoItem = () => { 
    return (
        <article className="flex gap-4 border-b-gray-400 border-b-[1.5px]">
          <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
          <p className="text-gray-600 grow">
            Complete online JavaScript curse in bluuweb
          </p>
          <button className="flex-none">
            <CrossIcon/>
          </button>
        </article>
    )
 }

 export default TodoItem;