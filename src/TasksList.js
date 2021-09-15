import React from 'react';
import { connect } from "react-redux";

function TasksList({ tasks }) {
    return (
        <div>
            <p id='total'>{tasks.reduce((sum, task) => sum + task.time, 0)}</p>
            <ul>
                {tasks.slice(0).reverse().map(({id, name, time}) =>
                    <li className='task' key={id}>
                        <span className='id'>{id} </span>
                        <span className='name'>{name} </span>
                        <span className='time'>{time} </span>
                    </li>
                )}
            </ul>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
};

export default connect(mapStateToProps)(TasksList);
