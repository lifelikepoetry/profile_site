import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';
import { PlusIcon } from 'lucide-react';

export function MorphingDialogBasic() {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
            }}
        >
            <MorphingDialogTrigger
                style={{
                    borderRadius: '12px',
                }}
                className='flex max-w-[330px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
            >
                <MorphingDialogImage
                    src='/EXAMPLE.jpg'
                    alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                    className='h-48 w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                    <div>
                        <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                            PEN-PATH
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                            A social platform that allows daily sharing of diary.
                        </MorphingDialogSubtitle>
                    </div>
                    <span
                        // type='button'
                        className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                        aria-label='Open dialog'
                    >
                        <PlusIcon size={12} />
                    </span>
                </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent
                    style={{
                        borderRadius: '24px',
                    }}
                    className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                    <MorphingDialogImage
                        src='/EXAMPLE.jpg'
                        alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                        className='h-full w-full'
                    />
                    <div className='p-6'>
                        <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                            PEN-PATH
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                            A social platform that allows daily sharing of diary.
                        </MorphingDialogSubtitle>
                        <MorphingDialogDescription
                            disableLayoutAnimation
                            variants={{
                                initial: { opacity: 0, scale: 0.8, y: 100 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.8, y: 100 },
                            }}
                        >
                            <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                                一款基于React/Nestjs/Postgres构建的日记分享社交平台
                            </p>
                            <p className='text-zinc-500'>
                                点击下方链接进入体验
                            </p>
                            <a
                                className='mt-2 inline-flex text-zinc-500 underline'
                                href='http://penpath.coder-zh.top/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                PEN-PATH
                            </a>
                        </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    );
}
