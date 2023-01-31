import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <div>logo</div>
        <h1>Animacje z uśmiechem</h1>
        <nav>
          <h2>O nas</h2>
          <h2>Zamówienie</h2>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <address>
          <p>Jan Kowalski</p>
          <a href="tel:+48123456789">123 456 789</a>
          <a href="mailto:firma@mail.to">firma@mail.to</a>
        </address>
      </footer>
    </div>
  );
};
