import styles from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";


function Cards() {

    const films = useSelector((state: RootState) => state.films);

  return (
    <div style={{display: "flex", gap: "16px", flexWrap: "wrap"}}>
      {films.map(film => 
        <Card key={film.id} film={film}/>
      )}
    </div>
  );
}

export default Cards;