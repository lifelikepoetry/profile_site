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

interface VantaBaseOptions {
  el: HTMLElement | null;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
}

interface VantaFogOptions extends VantaBaseOptions {
  color?: number;
  highlightColor?: number;
  midtoneColor?: number;
  lowlightColor?: number;
  baseColor?: number;
  blurFactor?: number;
  speed?: number;
  zoom?: number;
}

interface VantaWavesOptions extends VantaBaseOptions {
  color?: number;
  shininess?: number;
  waveHeight?: number;
  waveSpeed?: number;
}

declare global {
  interface Window {
    VANTA?: {
      FOG: (options: VantaFogOptions) => { destroy(): void };
      WAVES: (options: VantaWavesOptions) => { destroy(): void };
    };
    vantaEffect?: { destroy(): void } | null;
  }
}
