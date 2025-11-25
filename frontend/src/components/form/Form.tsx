import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './form.module.scss';
import MyButton from '@src/shared/ui/Buttons/MyButton';
import { BASE_DB_URL } from '@src/shared/utils/globals';

type TFormProps = {
  route: string;
  method: string;
};

export default function Form({ route, method }: TFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === 'login' ? 'Login' : 'Register';

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (method === 'login') {
        const response = await fetch(`${BASE_DB_URL}/${route}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const { refreshToken, accessToken } = data;
        localStorage.setItem(accessToken, data.access);
        localStorage.setItem(refreshToken, data.access);
        navigate('/');
      } else if (method === 'register') {
        const response = await fetch(`${BASE_DB_URL}/${route}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const { refreshToken, accessToken } = data;
        localStorage.setItem(accessToken, data.access);
        localStorage.setItem(refreshToken, data.access);
        navigate('/');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{name}</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type in your username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type in your password"
        />
      </div>
      <MyButton type={'submit'} buttonText={name} />
    </form>
  );
}
