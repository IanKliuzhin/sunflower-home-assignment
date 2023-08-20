import cn from 'classnames';
import classes from './Selector.module.scss';

type Props = {
  options: { value: string; text: string }[];
  currentValue: string;
  onChange: (value: string) => void;
};

export const Selector = ({ options, currentValue, onChange }: Props) => {
  return (
    <div className={classes.selector_container}>
      {options.map(({ value, text }, index) => (
        <>
          <span
            className={cn(
              classes.selector_value,
              currentValue === value && classes.chosen,
            )}
            key={value}
            onClick={() => onChange(value)}
          >
            {text}
          </span>
          {index < options.length - 1 && ' | '}
        </>
      ))}
    </div>
  );
};
