import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./condititional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";
import Nav from "../../nav";

function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <hr/>
            <TodoList /><hr/>
            <TodoItem/><hr/>
            <ConditionalOutput/><hr/>
            <Styles/><hr/>
            <Classes/><hr/>
        </div>
    );
}
export default Assignment6;