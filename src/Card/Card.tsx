import styles from "./Card.module.css";
import type { CardProps } from "./Card.props";
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { UserContext } from '../context/name.context';
import { useAppSelector } from '../store/hooks';
import { addFavorite, removeFavorite } from '../store/favorite.slice';


function Card({film}: CardProps) {

  const dispatch = useDispatch();
  const { currentUser } = useContext(UserContext)!;

const rawUser = useContext(UserContext)?.currentUser;   // string | null
const user = rawUser ?? '';                               // string

const ids = useAppSelector(s => s.favorites[user] ?? []);
const isFav = ids.includes(film.id);

  // 2. Переключаем состояние
  const toggle = () => {
    if (isFav) {
      dispatch(removeFavorite({ user, filmId: film.id }));
    } else {
      dispatch(addFavorite({ user, filmId: film.id }));
    }
  };


  if (!currentUser) return null; // RequireAuth уже защитил


  return (
<div className={styles["card"]}>
  <div className={styles["marker"]}><img src="/star.svg" alt="star" /><span>{film.choiceCount}</span></div>
  <img src={film.imgName} alt={film.imgAlt} className={styles["card-img-top"]}/>
  <div className={styles["card-body"]}>
    <h4 className={styles["card-text"]}><b>{film.cardName}</b></h4>
    <button onClick={toggle} className={styles["card-choice"]}>{isFav ? 'Удалить из избранного' : 'Добавить в избранное'}</button>
  </div>
</div>
  );
}


export default Card;