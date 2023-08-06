import React, { ChangeEvent, FormEvent, useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

interface Props {
    initialCount: number;
}

enum CountActionKind {
    INCREASE = 'increment',
    DECREASE = 'decrement',
    SET_VALUE_TO_ADD = 'change-value-to-add',
    ADD_VALUE_TO_COUNT = 'add-value-to-add',
}

interface ReducerAction {
    type: CountActionKind;
    payload?: number;
}

const reducer = (
    state: { count: number; valueToAdd: number },
    action: ReducerAction
) => {
    const { count } = state;
    switch (action.type) {
        case CountActionKind.INCREASE:
            return {
                ...state,
                count: count + 1,
            };
        case CountActionKind.DECREASE:
            return {
                ...state,
                count: count - 1,
            };
        case CountActionKind.ADD_VALUE_TO_COUNT:
            return {
                // we don't remove this line for letting the option of adding more states to the component
                ...state,
                count: count + state.valueToAdd,
                valueToAdd: 0,
            };
        case CountActionKind.SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload ?? 0,
            };
        default:
            return state;
    }
};

function CounterPage({ initialCount }: Props) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });

    const increment = () => {
        dispatch({ type: CountActionKind.INCREASE });
    };

    const decrement = () => {
        dispatch({ type: CountActionKind.DECREASE });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({ type: CountActionKind.SET_VALUE_TO_ADD, payload: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch({ type: CountActionKind.ADD_VALUE_TO_COUNT });
    };

    return (
        <Panel className='m-1'>
            <h1 className='text-lg'>Count: {state.count}</h1>
            <div className='flex gap-3 flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ''} // || is used to set empty value instead of 0.
                    onChange={handleChange}
                    type='number'
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
