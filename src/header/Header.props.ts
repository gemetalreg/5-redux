import type { Profile } from "../App";


export interface HeaderProps {
    loggedInProfiles: Profile; 
    handleLogout: (name: string) => void;
}