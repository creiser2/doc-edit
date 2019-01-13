import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

const HeaderFrame = (headerClicked) => (
  <Frame class='headerBox' head={
      <link type='text/css' href='../css/HeaderBox.css' />
      }>
    <FrameContextConsumer>
      {
        // Callback is invoked with iframe's window and document instances
        ({document, window}) => {
          document.addEventListener("click", headerClicked, false);
          document.designMode = 'On';
          // Render Children
        }
      }
    </FrameContextConsumer>
  </Frame>
);

export default HeaderFrame
