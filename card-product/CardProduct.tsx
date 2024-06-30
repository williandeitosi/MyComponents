import style from './Card.module.css';

interface ProductsProp {
  title: string;
  price: string;
  img: string;
  description: string;
  className?: string;
}

export function CardProduct({
  title,
  price,
  img,
  description,
  className,
}: ProductsProp) {
  return (
    <div
      className={`${className} bg-white p-4 flex flex-col gap-5 ${style.myBoxShadow} rounded-xl hover:scale-105 transition-transform`}
    >
      <div className='flex gap-2'>
        <img className='w-full object-cover rounded-md' src={img} alt='' />
      </div>
      <div className='text-center flex flex-col gap-2'>
        <p className='text-xl font-bold'>{title}</p>
        <p>{description}</p>
        <span className='text-center font-bold text-gray-400'>{price}</span>
      </div>
    </div>
  );
}
