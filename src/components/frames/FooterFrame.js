import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

const FooterFrame = (footerClicked) => (
  <Frame class='footerBox' head={
      <link type='text/css' href='../css/HeaderBox.css' />
      }>
    <FrameContextConsumer>
      {
        // Callback is invoked with iframe's window and document instances
        ({document, window}) => {
          document.addEventListener("click", footerClicked, false);
          document.designMode = 'On';
          // Render Children
        }
      }
    </FrameContextConsumer>
  </Frame>
);

export default FooterFrame
