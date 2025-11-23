import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@src/components/ui/card';
import MyButton from '@src/shared/ui/Buttons/MyButton';
import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router';
import styles from './error404.module.scss';

export default function Error404() {
  const navigate = useNavigate();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.wrapper}>
        <Card className="w-full mt-52 text-center">
          <h1>
            {error.status} – {error.statusText}
          </h1>
          <p>{error.data?.message}</p>
          <CardHeader>
            <CardTitle>Кажется, вы заблудились...</CardTitle>
            <CardDescription>Что делать?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 align-middle place-items-center text-center grid-cols-2">
              <MyButton buttonText={'Войти'} onClick={() => navigate('/login')} />
              <MyButton buttonText={'На главную'} onClick={() => navigate('/')} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex max-w-[600px] justify-center m-auto items-center p-2">
      <p>{String(error)}</p>
      <Card className="w-full mt-52 text-center">
        <CardHeader>
          <CardTitle>Кажется, вы заблудились...</CardTitle>
          <CardDescription>Что делать?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 align-middle place-items-center text-center grid-cols-2">
            <MyButton buttonText={'Войти'} onClick={() => navigate('/login')} />
            <MyButton buttonText={'На главную'} onClick={() => navigate('/')} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
