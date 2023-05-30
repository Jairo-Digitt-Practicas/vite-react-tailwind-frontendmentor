import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, removeTodo, updateTodo}) => { 
  const {id, title, completed} = todo

    return (
        <article className="flex gap-4 border-b-gray-400 border-b-[1.5px] dark:bg-gray-800 transition-all duration: 1000">
           <button className={`w-5 h-5 flex-none rounded-full border-2 ${completed ? "flex flex-none rounded-full border-2  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center items-center" 
              : "inline-block"}`}
              onClick={() => updateTodo(id)}
              >
                    {completed && <IconCheck />}
              </button>
          <p className={`text-gray-600 dark:text-gray-400 grow ${completed && "line-through"}`}>
            {title}
          </p>
          <button className="flex-none" onClick={() => removeTodo(id)}>
            <IconCross />
          </button>
        </article>
    )
 }

 export default TodoItem;