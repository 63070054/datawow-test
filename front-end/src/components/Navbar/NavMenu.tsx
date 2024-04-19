'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'


export interface NavMenuProps {
  icon: IconDefinition;
  menuName: string;
  redirectPath: string;
  show?: boolean;
  className?: string;
  onClick?: (...args: any[]) => void;
}

export default function NavMenu({ icon, menuName, redirectPath, show = true, className, onClick }: NavMenuProps) {
  if (!show) {
    const router = useRouter();
    router.push("/")
    return null;
  }

  const pathname = usePathname()

  return (
    <Link href={redirectPath} onClick={onClick} >
      <div className={`flex justify-start items-center gap-2 rounded-md py-2 px-4 ${pathname === redirectPath && "bg-gray-200"} ${className}`}>
        <FontAwesomeIcon icon={icon} className='h-5 aspect-square' />
        <p className='text-lg text-nowrap'>{menuName}</p>
      </div>
    </Link>
  )
}