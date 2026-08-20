'use client';

import SmoothScroll from './SmoothScroll';
import Cursor from './Cursor';
import Nav from './Nav';
import GridMap from './GridMap';

export default function Shell({ children }) {
  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <GridMap />
      <main className="grain">{children}</main>
    </SmoothScroll>
  );
}
