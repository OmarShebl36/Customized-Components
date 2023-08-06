import { Fragment, ReactNode } from "react";

export interface Config {
    label: string;
    render: (rowData: any) => ReactNode;
    header?: () => ReactNode;
    sortValue?: (rowData: any) => string | number
}

export interface TableProps {
    data: any;
    config: Config[];
    keyFn: (key: any) => string | number;
}

function Table({ data, config, keyFn }: TableProps) {
    const renderedRows = data.map((rowData: any) => {
        const renderedCells = config.map((column) => {
            return (
                <td className='p-2' key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr key={keyFn(rowData)} className='border-b'>
                {renderedCells}
            </tr>
        );
    });

    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>;
    });

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;
