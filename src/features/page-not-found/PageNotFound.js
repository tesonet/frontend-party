import React from 'react';
import style from './PageNotFound.scss';

export default () => (
  <main className={style.pageNotFound}>
    <section>
      <span>404</span>
      <p>The requested path could not be found</p>
    </section>
  </main>
);
