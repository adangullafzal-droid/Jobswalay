import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{
    document.body.classList.toggle('dark-mode', dark);
  },[dark]);
  return (
    <button className="theme-btn" onClick={()=>setDark(s=>!s)}>{dark? 'Light' : 'Dark'}</button>
  );
}