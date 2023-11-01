import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className='w-1/2 mx-auto'>
        <marquee>Bienvenido al home usando NextJs 14</marquee>
      </p>

    </main>
  )
}
