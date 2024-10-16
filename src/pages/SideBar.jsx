import React from 'react';
import '../styles/SideBar.css';

function SideBar({ show }) {
  return (
    <aside className={show ? "sidebar active" : "sidebar "}>
      <ul>
        <li><a href="#link1">Link 1</a></li>
        <li><a href="#link2">Link 2</a></li>
        <li><a href="#link3">Link 3</a></li>
      </ul>
    </aside>
  );
}

export default SideBar;
