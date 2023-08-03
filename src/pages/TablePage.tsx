import { ReactNode } from "react";
import Table from "../components/Table";

export interface Fruit {
    name: string;
    color: string;
    score: number;
}

export interface Config {
    label: string;
    render: (rowData: any) => ReactNode;
    header?: () => ReactNode;
}

function TablePage() {
    const data: Fruit[] = [
        {
            name: "Orange",
            color: "bg-orange-500",
            score: 5,
        },
        {
            name: "Apple",
            color: "bg-red-500",
            score: 3,
        },
        {
            name: "Banana",
            color: "bg-yellow-500",
            score: 1,
        },
        {
            name: "Lime",
            color: "bg-green-500",
            score: 4,
        },
    ];

    const config: Config[] = [
        { label: "Name", render: (fruit: Fruit) => fruit.name },
        {
            label: "Color",
            render: (fruit: Fruit) => (
                <div className={`m-2 p-3 ${fruit.color}`}></div>
            ),
        },
        { label: "Score", render: (fruit: Fruit) => fruit.score },
    ];

    const keyFn = (key: Fruit) => {
        return key.name;
    };

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;
