import React, { useCallback, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { io } from "socket.io-client";

function Editor() {
  const wrapperRef = useCallback((wrapper: any) => {
    if (wrapper == null) return;
    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    new Quill(editor, { theme: 'snow' });
  }, []);


  useEffect(() => {
   const socket =  io("http://localhost:3001");
   return () => {
    socket.disconnect()
   }
  }, [])
  

  return <div ref={wrapperRef} className='sticky top-7'></div>;
}

export default Editor;
