import React from 'react';
import { useEffect, useRef } from 'react';
import './Animation.js';

export default function BannerAnimated() {
  const gradient = new Animation();
  const ref = useRef();

  const divStyle = {
    '--gradient-color-1': '#c3e4ff',
    '--gradient-color-2': '#6ec3f4',
    '--gradient-color-3': '#eae2ff',
    '--gradient-color-4': '#b9beff',
  };

  useEffect(() => {
    if (ref.current) {
      gradient.initGradient(ref.current);
    }
  }, [ref]);

  return (
    <canvas
      style={divStyle}
      className="absolute w-full h-full opacity-50 bg-slate-600"
      ref={ref}
      data-transition-in
    ></canvas>
  );
}
