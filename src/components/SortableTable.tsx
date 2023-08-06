import { useState } from "react";
import Table, { TableProps } from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

interface Props extends TableProps {
    [key: string]: any;
}

function getIcons(label: string, sortBy: string | null, sortOrder: string | null) {
    const both = (
        <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    );
    if (label !== sortBy) return both;

    if (sortOrder === null) {
        return both;
    } else if (sortOrder === "asc") {
        return <GoArrowSmallUp />;
    } else if (sortOrder === "desc") {
        return <GoArrowSmallDown />;
    }
}

function SortableTable(props: Props) {
    const [sortOrder, setSortOrder] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);
    const { config, data } = props;

    const handleClick = (label: string) => {
        if (label !== sortBy) {
            setSortOrder("asc");
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () => (
                <>
                    <th
                        className='cursor-pointer hover:bg-gray-100'
                        onClick={() => handleClick(column.label)}
                    >
                        <div className='flex items-center'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                        </div>
                    </th>
                </>
            ),
        };
    });

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy)!;
        if (sortValue) {
            sortedData = [...data].sort((a: any, b: any) => {
                const valueA: string | number = sortValue(a);
                const valueB: string | number = sortValue(b);

                const reverseOrder = sortOrder === "asc" ? 1 : -1;

                if (typeof valueA === "string" && typeof valueB === "string") {
                    return valueA.localeCompare(valueB) * reverseOrder;
                } else if (
                    typeof valueA === "number" &&
                    typeof valueB === "number"
                ) {
                    return (valueA - valueB) * reverseOrder;
                } else return Number(valueA) - Number(valueB);
            });
        }
    }

    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
