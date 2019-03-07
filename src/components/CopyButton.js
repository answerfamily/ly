import React, { useRef, useEffect } from 'react';
import cogoToast from 'cogo-toast';
import ClipboardJS from 'clipboard';

import { BorderedButton } from 'components/buttons';

function CopyButton({ onCopy, text }) {
  const copyBtnRef = useRef(null);
  const clipboardInstance = useRef(null);

  useEffect(() => {
    if (clipboardInstance.current) {
      clipboardInstance.current.destroy();
    }

    // Copy button clipboard.js setup
    clipboardInstance.current = new ClipboardJS(copyBtnRef.current, {
      text: () => text,
    });
    clipboardInstance.current.on('success', () => {
      cogoToast.success(`「${text.slice(0, 10)}⋯⋯」已複製到剪貼簿`, {
        position: 'bottom-center',
      });
      onCopy();
    });
    return () => {
      if (clipboardInstance.current) {
        clipboardInstance.current.destroy();
      }
    };
  }, [copyBtnRef, onCopy, text, clipboardInstance]);

  return <BorderedButton ref={copyBtnRef}>複製</BorderedButton>;
}

export default CopyButton;
