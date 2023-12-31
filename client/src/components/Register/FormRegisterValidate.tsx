import React from 'react';
import mail from '../../../public/assets/register/mail.svg';
import contact from '../../../public/assets/register/contact.svg';
import phone from '../../../public/assets/register/phone.svg';
import atom from '../../../public/assets/register/atom.svg';
import terms from '../../../public/assets/register/terms.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function FormRegisterValidate() {
  return (
    <>
      <div className=' w-[625px] h-[491px] bg-primary rounded-lg  shadow-[0px_1px_4px_2px_#00000025] px-5 py-7'>
        {/* Sección principal */}
        <section className='flex justify-start origin-top-left rotate-[0.55deg] text-center text-black text-2xl font-semibold mb-5'>
          Completa los datos para crear tu cuenta
        </section>
        {/* Primer artículo */}
        <article className=' w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2'>
          <header className=' p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex'>
            <div className=' origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal'>
              Valida tu e-mail
            </div>
          </header>
          <section className=' p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex'>
            <span className=' origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal'>
              Recibirás información de tu cuenta.
            </span>
          </section>
          <figure className=' w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex'>
            <Image
              src={mail}
              alt='mail'
              className=' w-6 h-6 relative flex-col justify-start items-start flex'
            />
          </figure>
          <Link
            href={'/register/email'}
            className=' w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2 inline-flex hover:bg-tertiaryDark transition-all duration-700'
          >
            <div className=' origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal'>
              Validar
            </div>
          </Link>
        </article>
        {/* Segundo artículo */}
        <article className=' w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0]  mb-2'>
          <div className=' p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex'>
            <section className=' origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal'>
              Valida tu Identidad
            </section>
          </div>
          <header className=' p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex'>
            <div className=' origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal'>
              Nadie más podrá crear una cuenta a tu nombre.
            </div>
          </header>
          <figure className=' w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex'>
            <Image
              src={contact}
              alt='mail'
              className=' w-6 h-6 relative flex-col justify-start items-start flex'
            />
          </figure>
          <Link
            href={'/'}
            className='hidden w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2'
          >
            <div className=' origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal'>
              Validar
            </div>
          </Link>
        </article>
        {/* Tercer artículo */}
        <article className=' w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0]  mb-2'>
          <div className=' p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex'>
            <section className=' origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal'>
              Valida tu teléfono
            </section>
          </div>
          <header className=' p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex'>
            <div className=' origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal'>
              Lo usarás para ingresar a tu cuenta.
            </div>
          </header>
          <figure className=' w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex'>
            <Image
              src={phone}
              alt='phone'
              className=' w-6 h-6 relative flex-col justify-start items-start flex'
            />
          </figure>
          <Link
            href={'/'}
            className='hidden w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2 '
          >
            <div className=' origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal'>
              Validar
            </div>
          </Link>
        </article>
        {/* Cuarto artículo */}
        <article className='w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2'>
          <header className='p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex'>
            <div className='origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal'>
              Regulaciones vigentes
            </div>
          </header>
          <section className='p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex'>
            <div className='origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal'>
              Completa algunos datos regulatorios.
            </div>
          </section>
          <figure className='w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex'>
            <Image
              src={atom}
              alt='atom'
              className='w-6 h-6 relative flex-col justify-start items-start flex'
            />
          </figure>
          <Link
            href={'/'}
            className='hidden w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2'
          >
            <div className='origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal'>
              Validar
            </div>
          </Link>
        </article>
        {/* Quinto artículo */}
        <article className='w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2'>
          <header className='p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex'>
            <div className='origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal'>
              Términos y Condiciones
            </div>
          </header>
          <section className='p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex'>
            <div className='origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal'>
              Acéptalos para poder crear tu cuenta.
            </div>
          </section>
          <figure className='w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex'>
            <Image
              src={terms}
              alt='terms'
              className='w-6 h-6 relative flex-col justify-start items-start flex'
            />
          </figure>
          <Link
            href={'/'}
            className='hidden w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2'
          >
            <div className='origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal'>
              Validar
            </div>
          </Link>
        </article>
      </div>
    </>
  );
}
