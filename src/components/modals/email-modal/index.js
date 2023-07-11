/**
 * @prettier
 */

import React from 'react';

import './styles.scss';
import { Button } from '../../../ui-kit/';

const EmailModal = ({ active, setActive, children, src, alt }) => {
  return (
    <div className={active ? 'background' : null}>
      <div className={active ? 'modal__background active' : 'modal__background'}>
        <div className={active ? 'modal' : null}>
          <img className="modal__img" src={src} alt={alt} />
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {children}
            <div className="modal__btn">
              <Button label="Закрыть" size="medium" onClick={() => setActive(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
