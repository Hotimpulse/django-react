import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@src/components/ui/card';
import MyButton from '@src/shared/ui/Buttons/MyButton';

import { useNavigate } from 'react-router-dom';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="flex max-w-[600px] justify-center m-auto items-center p-2">
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
