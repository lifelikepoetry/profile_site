import { Tilt } from '@/components/motion-primitives/tilt';
import { motion } from 'motion/react';

export function TiltCard() {
  return (
    <Tilt rotationFactor={13} isRevese>
      <motion.div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
        whileHover={{
          scale: 1.1,
          y: -10,
          transition: { duration: 0.2 }
        }}
      >
        <img
          src='/coder-zh.jpg'
          alt='coder-zh.jpg'
          className='h-full w-full object-cover'
        />
      </motion.div>
    </Tilt>
  );
}
