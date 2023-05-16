import React, { useCallback, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { io, Socket } from 'socket.io-client';

function Editor() {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  useEffect(() => {
    const s = io('http://localhost:3001');
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        if (source !== 'user') return;
        socket.emit('send-changes', delta);
      });
    }
  }, [quill, socket]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill(editor, { theme: 'snow' });
    setQuill(q);
  }, []);

  return <div ref={wrapperRef} className='sticky top-7'></div>;
}

export default Editor;
