import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

interface Props {
    initialCount: number;
}

function CounterPage({ initialCount }: Props) {
    const { count, increment } = useCounter(initialCount);
    return (
        <div>
            <h1>Count: {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default CounterPage;
