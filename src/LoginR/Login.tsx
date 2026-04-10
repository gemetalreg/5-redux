import Button from "../button/Button";
import InputField from "../InputField/InputField";
import type { LoginProps } from "./Login.props";

export default function Login({nameRef, handleLogin}: LoginProps) {
  return <>
  <div style={{display: "flex", flexDirection:"column", rowGap: "27px", alignItems: "flex-start"}}>
        <span className='enter'>Вход</span>
        <InputField ref={nameRef}/>
        <Button text="Войти в профиль" onClick={handleLogin} />
      </div>
  </>;
}