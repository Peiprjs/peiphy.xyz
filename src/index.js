import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import cn from 'classnames';
import styles from './Frontpage.module.scss';

function Frontpage(props) {
  return (
    <div
      className={cn(styles.root, 'frontpage')}
      style={{ '--src': `url(${require('assets/2e2b869a097e07a376cd4a9b3aab5b8e.png')})` }}
    />
  );
}

export default Frontpage;

