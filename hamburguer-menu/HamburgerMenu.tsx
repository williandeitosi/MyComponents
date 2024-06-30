import { List } from '@phosphor-icons/react';
import { useState } from 'react';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className='flex justify-center items-center lg:hidden bg-black rounded-full size-10 hover:bg-[#3d3d3d] transition-colors'
        onClick={handleClick}
      >
        <List size={32} color='#f9f5f5' />
      </button>

      <div
        className={`absolute z-50 top-[90px] right-0 w-full text-center bg-yellow-500 shadow-md rounded-b-lg overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0 hidden'
        }`}
      >
        <ul className='p-2'>
          <li>
            <a className='hover:font-bold' href='#hours'>
              Horários
            </a>
          </li>
          <li>
            <a className='hover:font-bold' href='#services'>
              Serviços
            </a>
          </li>
          <li>
            <a className='hover:font-bold' href='#products'>
              Produtos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
