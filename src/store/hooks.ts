import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from './store';   // тот же тип, что вы раньше вывели

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;