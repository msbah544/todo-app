import ItemsInfo from "./ItemsInfo";
import Todo from "./Todo";

function TodosContainer(){

    // eslint-disable-next-line
    {/*let task1 = "From the task1 variable";*/}
    let todos = [
        {
            id:1,
            title:"Take out trash",
            completed: false,
        },
        {
            id:2,
            title:"Five hours study",
            completed: false,
        },
        {
            id:3,
            title:"One hour workout",
            completed: false,
        },
        {
            id:4,
            title:"Three hours software development",
            completed: false,
        },
        {
            id:5,
            title:"Two hours reading Al'Ahdariyyu",
            completed: false,
        },
    ]


    return(
        <div className="todo items-wrapper">
                <div className="todo-items">   
                {/*<Todo task = {task1} />*/}

                {todos.map(function(todos2){
                    return <Todo task = {todos2} />;
                })}
                        
                    <div className="todo-items-info">
                            <ItemsInfo /> 
                    </div>
                </div>    
        </div>
    );
}

export default TodosContainer;
