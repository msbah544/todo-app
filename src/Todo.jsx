function Todo({task}) {
   
    return (<div className="todo-item">
                <div className="check">
                    <div className="check-mark">
                        <img src="./icons/icon-check.svg" alt="" />
                    </div>
                </div>
                <div className="todo-text">
                {task.title}
                </div>
            </div>);
            }

export default Todo;            