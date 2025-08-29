import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      {/* Rotating Floating Coin */}
      <a
        href="#whitepaper"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <img
          src="/coin.png" // put your coin image in the public folder and rename it coin.png
          alt="Coin"
          className="w-48 h-48 animate-spin-slow hover:scale-110 transition-transform duration-300"
        />
      </a>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
}
