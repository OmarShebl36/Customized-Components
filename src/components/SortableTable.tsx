import useSort from "../hooks/use-sort";
import Table, { TableProps } from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

interface Props extends TableProps {
    [key: string]: any;
}

function getIcons(
    label: string,
    sortBy: string | null,
    sortOrder: string | null
) {
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
    const { config, data } = props;
    const { sortedData, sortBy, sortOrder, setSortColumn } = useSort({
        data,
        config,
    });

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () => (
                <>
                    <th
                        className='cursor-pointer hover:bg-gray-100'
                        onClick={() => setSortColumn(column.label)}
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

    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
