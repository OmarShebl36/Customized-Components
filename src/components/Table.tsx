interface Props {
  data: {
		name: string;
		color: string;
		score: number;
	}[];
};

function Table({ data }: Props) {
    return (
        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
    );
}

export default Table;
