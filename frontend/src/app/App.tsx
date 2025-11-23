import { RouterProvider } from "react-router";
import useCustomRouter from '@src/app/router/useCustomRouter';

function App() {
  const routes = useCustomRouter();
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
