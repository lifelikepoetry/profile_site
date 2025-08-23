'use client'; // 确保客户端渲染（Next.js 13+ app目录）

import { useEffect, useRef } from 'react';

export default function VantaFog() {
  const vantaRef = useRef(null);

  useEffect(() => {
    // 动态创建 script 标签加载 THREE 和 VANTA
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    threeScript.onload = () => {
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.birds.min.js';
      vantaScript.onload = () => {
        if ((window as any).VANTA) {
          (window as any).vantaEffect = (window as any).VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
          });
        }
      };
      document.body.appendChild(vantaScript);
    };
    document.body.appendChild(threeScript);

    // 卸载时销毁效果
    return () => {
      if ((window as any).vantaEffect) {
        (window as any).vantaEffect.destroy();
        (window as any).vantaEffect = null;
      }
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh' }} className="fixed top-0 left-0 z-0" />;
}
