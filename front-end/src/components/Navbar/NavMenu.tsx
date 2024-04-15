'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export interface NavMenuProps {
  icon: IconDefinition;
  menuName: string;
  redirectPath: string;
  show?: boolean;
  className?: string;
}

export default function NavMenu({ icon, menuName, redirectPath, show = true, className }: NavMenuProps) {
  if (!show) return null;

  const pathname = usePathname()

  return (
    <Link href={redirectPath}>
      <div className={`flex justify-start items-center gap-2 rounded-md py-2 px-4 ${pathname === redirectPath && "bg-gray-200"} ${className}`}>
        <FontAwesomeIcon icon={icon} className='h-5 aspect-square' />
        <p className='text-lg text-nowrap'>{menuName}</p>
      </div>
    </Link>
  )
}