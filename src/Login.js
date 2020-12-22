import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import UserContext from "./UserContext";

export default function Login() {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();

  function onSubmit() {
    // axios.post('/login', {username, password})
    //   .then(response => {
    //     setCurrentUser({
    //       username: response.user.username,
    //       name: response.user.name,
    //       email: response.user.email,
    //     });
    //   })
    //   .catch(() => {
    //     alert('Wrong username or password');
    //   })

    if (username === 'test' && password === 'qwerty') {
      setCurrentUser({
        username: 'test',
        name: 'Giorgi'
      });
    } else {
      alert('Wrong username or password');
    }
  }

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <p>
        <input 
          type="text" 
          name="username"
          placeholder={t('username')}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          placeholder={t('password')}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">{t('login')}</button>
      </p>
      <p>
        <button type="button" onClick={() => changeLanguage('en')}>en</button>
        <button type="button" onClick={() => changeLanguage('ka')}>ka</button>
      </p>
    </form>
  )
}