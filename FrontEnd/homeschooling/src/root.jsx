import { Outlet } from 'react-router-dom';
import Navbar from './navBar';

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}