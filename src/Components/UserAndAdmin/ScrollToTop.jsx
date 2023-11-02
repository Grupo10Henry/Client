// juli
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que cambia la ruta, se desplazará al principio de la página.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
