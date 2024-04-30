import { TempScaleKind } from 'modules/Filtrering/types';
import { useBoundStore } from 'store';
import { tempUnitsMap } from '../helpers';
import { Selector } from '../Selector';
import classes from './TempScaleSelector.module.scss';

export const TempScaleSelector = () => {
    const { tempScale, updateTempScale } = useBoundStore();

    return (
        <div className={classes.temp_selector_container}>
            Units
            <Selector
                options={Object.values(TempScaleKind).map((kind) => ({
                    value: kind,
                    text: tempUnitsMap[kind],
                }))}
                currentValue={tempScale}
                onChange={(kind) => updateTempScale(kind as TempScaleKind)}
            />
        </div>
    );
};
