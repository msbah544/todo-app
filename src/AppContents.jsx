import Header from "./Header";
import TodosContainer from "./TodosContainer";
import Form from "./Form";
import Football from "./Football";
function AppContents(){
    return (

        <div className="container" >
            <div>
                <Header />
            </div>
            <div>
                <Form />
            </div>
            <div className="todo-items-wrapper">
                <TodosContainer />
            </div>
            <Football />
        </div>
    );
}

export default AppContents;