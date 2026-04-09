// hooks/useFavorites.ts
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {type RootState } from '../store/store';
import { useAppSelector } from '../store/hooks';

export const useMyFavorites = () => {
  const name = useAppSelector(state => state.user.currentUser);
  const fav = useSelector((s: RootState) => s.favorites);
  return useMemo(() => (name ? fav[name] ?? [] : []), [name, fav]);
};
