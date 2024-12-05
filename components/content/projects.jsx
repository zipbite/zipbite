'use client'

export default function Projects() {
    return (
        <div className="col-span-4 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className='flex items-center gap-2'>
                <p className="text-zinc-100 font-semibold">Zipbyte</p>
                <span className='bg-zinc-900 rounded text-[0.65rem] uppercase font-bold tracking-wide px-3 py-0.5 text-amber-500'>In Development</span>
              </div>
              <p className="text-sm">My personal portfolio, the current site you're visiting!</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className='flex items-center gap-2'>
                <p className="text-zinc-100 font-semibold">Lain</p>
                <span className='bg-zinc-900 rounded text-[0.65rem] uppercase font-bold tracking-wide px-3 py-0.5 text-amber-500'>In Development</span>
              </div>
              <p className="text-sm">Multipurpose discord bot with plenty of features.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className='flex items-center gap-2'>
                <p className="text-zinc-100 font-semibold">Animux</p>
                <span className='bg-zinc-900 rounded text-[0.65rem] uppercase font-bold tracking-wide px-2 py-0.5 text-rose-500'>TBA</span>
              </div>
              <p className="text-sm">Anime forums where you can meet likeminded people and participate in community activities & more!</p>
            </div>
          </div>
        </div>
    )
}