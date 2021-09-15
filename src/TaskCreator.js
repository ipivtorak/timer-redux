import React, {useState} from 'react';
import { connect } from "react-redux";
import { addTaskActionCreator } from "./reducer";

let timerID;

function TaskCreator({ tasks, addTask }) {
    const [name, setName] = useState('');
    const [time, setTime] = useState(null);
    const [timerOn, setTimerOn] = useState(false);

    let counter = 0;

    const start = () => {
        if (!timerOn) {
            timerID = setInterval(() => {
                    counter++;
                    setTime(counter);
                }, 1000);
            setTimerOn(true);
        }
    };

    const stop = () => {
        const id = tasks.length ? tasks.length + 1 : 1;
        if (time) addTask(id, name, time);
        clearInterval(timerID);
        counter = 0;
        setTime('');
        setName('');
        setTimerOn(false);
    };

    const handleTimeFocus = () => {
        clearInterval(timerID);
        setTimerOn(false);
    };

    const handleTimeBlur = () => {
        if (time) {
            counter = time;
            start();
        }
    };

    const handleTimeChange = (e) => {
        const { value } = e.target;
        setTime(+value);
    };

    return (
        <div>
            <label>
                Task name
                <input
                    id="taskName"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Time elapsed
                <input
                    id="timeField"
                    type="number"
                    value={time}
                    onChange={handleTimeChange}
                    onFocus={handleTimeFocus}
                    onBlur={handleTimeBlur}
                />
            </label>
            <button id="start" type="button" onClick={start}>START</button>
            <button id="stop" type="button" onClick={stop}>STOP</button>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (id, name, time) => {
            dispatch(addTaskActionCreator(id, name, time));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);
