import styles from "./SearchFilmLine.module.css";
import type { SearchFilmLineProps } from "./SearchFilmLine.props";


function SearchFilmLine({children}: SearchFilmLineProps) {
  return (
    <div className={styles["line"]}>
        {children}
    </div>
    
  );
}

export default SearchFilmLine;