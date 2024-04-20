import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import SessionsContextProvider from '../store/sessionContext.tsx'

export default function Root() {
  return (
    <SessionsContextProvider>
      <Header />
      <Outlet />
    </SessionsContextProvider>
  );
}
