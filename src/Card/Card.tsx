import styles from "./Card.module.css";
import type { CardProps } from "./Card.props";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addFavorite, removeFavorite } from '../store/favorite.slice';


function Card({film}: CardProps) {

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.user.currentUser);

  const user = currentUser ?? '';                               // string

  const ids = useAppSelector(s =>
    currentUser ? s.favorites[currentUser] ?? [] : []
  );
  const isFav = ids.includes(film.id);

  // 2. Переключаем состояние
  const toggle = () => {
    if (!currentUser) return; // guarded by RequireAuth, but TS wants a check
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