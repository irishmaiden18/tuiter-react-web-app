import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./condititional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";
import {Link} from "react-router-dom";

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <hr/>
            <TodoList /><hr/>
            <TodoItem/><hr/>
            <ConditionalOutput/><hr/>
            <Styles/><hr/>
            <Classes/><hr/>
            <Link to="/bibliography">References</Link>
        </div>
    );
}
export default Assignment6;