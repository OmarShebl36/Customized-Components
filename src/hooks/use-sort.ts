import { Config } from "./../components/Table";
import { useState } from "react";

interface Props {
    data: any;
    config: Config[];
}

function useSort({ data, config }: Props) {
    const [sortOrder, setSortOrder] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);

    const setSortColumn = (label: string) => {
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

    return { setSortColumn, sortBy, sortOrder, sortedData };
}

export default useSort;
