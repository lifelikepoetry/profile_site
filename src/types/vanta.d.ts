declare module 'vanta/dist/vanta.waves.min' {
  interface VantaEffect {
    destroy(): void;
  }

  interface VantaOptions {
    el: HTMLElement | null;
    mouseControls?: boolean;
    touchControls?: boolean;
    color?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
  }

  const WAVES: (options: VantaOptions) => VantaEffect;
  export default WAVES;
}

declare global {
  interface Window {
    VANTA?: {
      FOG: (options: any) => { destroy(): void };
      WAVES: (options: any) => { destroy(): void };
    };
    vantaEffect?: { destroy(): void } | null;
  }
}
