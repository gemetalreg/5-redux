// pages/Favorites.tsx
import { useMyFavorites } from '../hooks/useFavorites';
import Card from '../Card/Card';
import {type RootState } from '../store/store'; // если у вас типизированный useSelector
import { useSelector } from 'react-redux';

// Если фильмы уже лежат в сторе

export default function Favorites() {
  const ids = useMyFavorites();               // id-шники избранных
  const allFilms = useSelector((s: RootState) => s.films);
  const favFilms = allFilms.filter((f) => ids.includes(f.id));

  if (!favFilms.length)
    return <p style={{ padding: 32 }}>Нет избранных фильмов</p>;

  return (
    <div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}>
      {favFilms.map((film) => (
        <Card key={film.id} film={film} />
      ))}
    </div>
  );
}
