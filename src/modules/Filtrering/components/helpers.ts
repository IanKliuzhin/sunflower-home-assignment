import { TempScaleKind } from '../types';

export const tempUnitsMap: Record<TempScaleKind, string> = {
    [TempScaleKind.CELSIUS]: '°C',
    [TempScaleKind.FAHRENHEIT]: '°F',
};
