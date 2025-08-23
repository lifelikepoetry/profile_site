import { Tilt } from '@/components/motion-primitives/tilt';
import { motion } from 'motion/react';

export function TiltCard({ children, borderRadius="12px", rotationFactor=13, scale=1.1, y=-10 }: { children: React.ReactNode, borderRadius?: string, rotationFactor?: number, scale?: number, y?: number }) {
  return (
    <Tilt rotationFactor={rotationFactor} isRevese>
      <motion.div
        style={{
          borderRadius: borderRadius,
        }}
        className='overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
        whileHover={{
          scale: scale,
          y: y,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.div>
    </Tilt>
  );
}
