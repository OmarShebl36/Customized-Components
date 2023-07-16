type Option = {
    label: string;
    value: string;
}

interface Props {
    options: Option[];
}

function Dropdown({options}: Props) {
    return ( 
        <div>
            <h1>Dropdown</h1>
        </div>
    );
}

export default Dropdown;