/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Button, Block } from '../../../../ui-kit';

const Buttons = () => {
  return (
    <>
      <div id="--buttons">
        <Block className="example">
          <p>
            В приложении возможна реализации кнопок с цветной заливкой и без неё. Для использования
            необходимо использовать свойство type.
          </p>
          <div>
            <div>
              <Button type="default" label="Button text" />
            </div>
            <div>
              <Button type="secondary" label="Button text" />
            </div>
          </div>
        </Block>
        <Block className="example">
          <div>
            <Button type="default" label="Button text" />
          </div>
        </Block>
        <Block className="example">
          <div>
            <Button type="default" label="Button text" />
          </div>
        </Block>
        <Block className="example">
          <div>
            <Button type="default" label="Button text" />
          </div>
        </Block>
        <Block className="example">
          <div>
            <Button type="default" label="Button text" />
          </div>
        </Block>
        <Block className="example">
          <div>
            <Button type="default" label="Button text" />
          </div>
        </Block>
        {/* <div className="buttons-description">
          <p>
            В приложении возможна реализации кнопок с цветной заливкой и без неё. Для использования
            необходимо использовать свойство type.
          </p>
          <div>
            <code>{'<Button type="default" label="Button text" />'}</code>
            <code>{'<Button type="secondary" label="Button text" />'}</code>
          </div>
        </div> */}
        {/* <div className="buttons-description">
          <p>
            Возможно отображение внутри компонента текста, текста и иконки или только иконки.
            Внешний вид изменяется при взаимодействием с компонентом.
          </p>
        </div> */}
        {/* <Block className="example">
          <div>
            <div className="buttons">
              <div>
                <Button type="default" label="Button text" />
              </div>
              <div>
                <Button type="default" label="Button text" disabled={true} />
              </div>
            </div>
            <div className="buttons">
              <div>
                <Button type="default" label="Button text" icon="storybook_example" />
              </div>
              <div>
                <Button
                  type="default"
                  label="Button text"
                  disabled={true}
                  icon="storybook_example"
                />
              </div>
            </div>
            <div className="buttons-list-icons">
              <div>
                <Button type="default" icon="storybook_example" />
              </div>
              <div>
                <Button type="default" disabled={true} icon="storybook_example" />
              </div>
            </div>
          </div>
          <div>
            <div className="buttons">
              <div>
                <Button type="secondary" label="Button text" />
              </div>
              <div>
                <Button type="secondary" label="Button text" disabled={true} />
              </div>
            </div>
            <div className="buttons">
              <div>
                <Button type="secondary" label="Button text" icon="storybook_example" />
              </div>
              <div>
                <Button
                  type="secondary"
                  label="Button text"
                  disabled={true}
                  icon="storybook_example"
                />
              </div>
            </div>
            <div className="buttons-list-icons">
              <div>
                <Button type="secondary" icon="storybook_example" />
              </div>
              <div>
                <Button type="secondary" disabled={true} icon="storybook_example" />
              </div>
            </div>
          </div>
        </Block> */}
        {/* <Block className="example"></Block> */}
      </div>
    </>
  );
};

export default Buttons;
