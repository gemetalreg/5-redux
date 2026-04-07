// hooks/useFavorites.ts
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {type RootState } from '../store/store';
import { useContext } from 'react';
import { UserContext } from '../context/name.context';

export const useMyFavorites = () => {
  const name = useContext(UserContext).currentUser;
  const fav = useSelector((s: RootState) => s.favorites);
  return useMemo(() => (name ? fav[name] ?? [] : []), [name, fav]);
};
