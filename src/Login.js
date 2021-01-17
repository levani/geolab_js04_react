import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import TextField from '@material-ui/core/TextField';
import UserContext from "./UserContext";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const { saveToken } = useAuth();

  function onSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5001/js04-b4877/us-central1/api/login', {username, password})
      .then(response => {
        const access_token = response.data.access_token;
        saveToken(access_token);
        history.push('/blog');
      })
      .catch(() => {
        alert('Wrong username or password');
      })
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
    </form>
  )
}