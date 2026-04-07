import Header from './header/Header.tsx'
import Paragraph from './paragraph/Paragraph.tsx'
import Button from './button/Button.tsx' 
import Search from './Search/Search.tsx'
import './App.css'
import SearchFilmLine from './SearchFilmLine/SearchFilmLine.tsx'
import Cards from './Cards/Cards.tsx'
import InputField from './InputField/InputField.tsx';
import { useState, useRef, useContext  } from 'react'
import { UserContext } from './context/name.context.tsx'
import { Routes, Route } from 'react-router'
import Menu from './MenuR/Menu.tsx'
import Login from './LoginR/Login.tsx'
import Movie from './MovieR/Movie.tsx'
import Favorites from './FavoritesR/Favorites.tsx'
import NotFound from './NotFound/NotFound.tsx'
import { RequireAuth } from './helpers/RequireAuth.tsx'


export type Profile = {name: string, isLogined: boolean}[];

function App() {
  const [profiles, setProfiles] = useState<Profile>(() => {
    const saved = localStorage.getItem('profiles');
    return saved ? JSON.parse(saved) : [];
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const { setCurrentUser } = useContext(UserContext);


  const handleLogin = () => {
    if (nameRef.current) {
      const name = nameRef.current.value.trim();
      if (!name) return;

      setCurrentUser(name);

      const existingProfile = profiles.find(p => p.name === name);
      let newProfiles;

      if (existingProfile) {
        // Обновляем статус входа
        newProfiles = profiles.map(p =>
          p.name === name ? { ...p, isLogined: true } : p
        );
      } else {
        // Создаем новый профиль
        newProfiles = [...profiles, { name, isLogined: true }];
      }

      setProfiles(newProfiles);
      localStorage.setItem('profiles', JSON.stringify(newProfiles));
      nameRef.current.value = '';
    }

  };

  const handleLogout = (name: string) => {
    const updatedProfiles = profiles.map(p =>
      p.name === name ? { ...p, isLogined: false } : p
    );
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    setCurrentUser(null);

  };

  const loggedInProfiles = profiles.filter(p => p.isLogined);



  return (
    <>    
    <Routes>
      <Route element={<Header loggedInProfiles={loggedInProfiles} handleLogout={handleLogout}/>}>
        <Route path="/" element={<RequireAuth><Menu /></RequireAuth>
} />
        <Route path="/login" element={<Login nameRef={nameRef} handleLogin={handleLogin}/>} />
        <Route path="/movie/:id" element={<RequireAuth><Movie /></RequireAuth>} />
        <Route path="/favorites" element={<RequireAuth><Favorites /></RequireAuth>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
