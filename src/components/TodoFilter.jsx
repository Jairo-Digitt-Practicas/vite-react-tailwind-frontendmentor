const TodoFilter = () => { 
    return (
        <section className="container mx-auto mt-8">
            <div className="bg-white p-4 flex justify-center gap-4 rounded-md">
              <button className="text-blue-600">All</button>
              <button className="hover:text-blue-600">Active</button>
              <button className="hover:text-blue-600">Complete</button>
            </div>
          </section>
      
    )
 }

 export default TodoFilter;