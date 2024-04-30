import { useRef } from 'react';
import classes from './Input.module.scss';

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & { clear: () => void };

export const Input = (props: Props) => {
    const { clear, ...inputProps } = props;
    const ref = useRef<HTMLInputElement>(null);
    const clearWithSavingFocus = () => {
        clear();
        ref.current?.focus();
    };
    return (
        <div className={classes.input_wrapper}>
            <input {...inputProps} ref={ref} />
            {!!clear && !!inputProps.value && (
                <div
                    onClick={clearWithSavingFocus}
                    className={classes.reset_input}
                />
            )}
        </div>
    );
};
