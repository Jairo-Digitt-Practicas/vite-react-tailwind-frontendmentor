const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 duration-1000">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all dark:bg-gray-800 ">
                <button
                    className={`${
                        filter === "all"
                            ? "text-gray-400 hover:text-blue-500"
                            : "text-blue-500 hover:text-gray-400"
                            
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;