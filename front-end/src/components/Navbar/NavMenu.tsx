import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

export interface NavMenuProps {
  icon: IconDefinition;
  menuName: string;
  redirectPath: string;
  show?: boolean;
}

export default function NavMenu({ icon, menuName, redirectPath, show = true }: NavMenuProps) {
  if (!show) return null;

  console.log(menuName)

  return (
    <Link href={redirectPath}>
      <div className="flex justify-start items-center gap-2">
        <FontAwesomeIcon icon={icon} className='h-4 w-4' />
        <h3>{menuName}</h3>
      </div>
    </Link>
  )
}