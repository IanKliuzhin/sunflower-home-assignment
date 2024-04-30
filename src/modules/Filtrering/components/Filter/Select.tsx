import classes from './Select.module.scss';

type Props = {
    options: { value: string; name: string }[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
};

export const Select = ({ options, defaultValue, value, onChange }: Props) => {
    return (
        <select
            className={classes.select_wrapper}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value={defaultValue}></option>
            {options.map(({ value, name }) => (
                <option value={value} key={value}>
                    {name}
                </option>
            ))}
        </select>
    );
};
