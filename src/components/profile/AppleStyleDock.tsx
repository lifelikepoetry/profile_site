import { Github, Gmail, Twitter, WeChat } from './contact-icon';
  
  import { Dock, DockIcon, DockItem, DockLabel } from '@/components/motion-primitives/dock';
  
  const data = [
    {
      title: 'Gmail',
      icon: (
        <Gmail width={48} height={48} />
      ),
      href: '#',
    },
    {
      title: 'Twitter',
      icon: (
        <Twitter width={48} height={48} />
      ),
      href: '#',
    },
    {
      title: 'Github',
      icon: (
        <Github  width={48} height={48} />
      ),
      href: '#',
    },
    {
      title: 'WeChat',
      icon: (
        <WeChat width={48} height={48} />
      ),
      href: '#',
    },
  ];
  
  export function AppleStyleDock() {
    return (
      <div className="flex gap-4">
        <Dock className='items-end pb-3'>
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className='w-12!'>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    );
  }
  