import Button from "../button/Button";
import Cards from "../Cards/Cards";
import Paragraph from "../paragraph/Paragraph";
import Search from "../Search/Search";
import SearchFilmLine from "../SearchFilmLine/SearchFilmLine";

export default function Menu() {
  return <>
    <Paragraph />
    <SearchFilmLine>
        <Search />
        <Button text="Искать"/>
    </SearchFilmLine>
    <Cards/>
  </>;
}