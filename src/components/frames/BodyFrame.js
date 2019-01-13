import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

const BodyFrame = (bodyClicked) => (
  <Frame class='bodyBox' head={
      <link type='text/css' href='../css/HeaderBox.css' />
      }>
    <FrameContextConsumer>
      {
        // Callback is invoked with iframe's window and document instances
        ({document, window}) => {
          document.addEventListener("click", bodyClicked, false);
          document.designMode = 'On';
          // Render Children
        }
      }
    </FrameContextConsumer>
  </Frame>
);

export default BodyFrame
