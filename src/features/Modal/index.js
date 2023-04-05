/**
 * @prettier
 */

import React from 'react';

import './styles.scss';
import { Button } from '../../ui-kit';

export const Modal = ({ active, setActive, children, src, alt }) => {
  return (
    <div className={active ? 'modal__background' : null}>
      <div className={active ? 'modal active' : 'modal'}>
        <div className="modal__close" onClick={() => setActive(false)}>
          <div className="close__btn" />
        </div>
        <img className="modal__img" src={src} alt={alt} />
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
          <div className="modal__btn">
            <Button label="Закрыть" size="medium" onClick={() => setActive(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};
