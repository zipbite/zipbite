'use client';

import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-screen">
            <div className='flex items-center flex-col'>
                <h1 className="text-7xl font-bold text-zinc-100">404</h1>
                <h2 className="text-2xl font-semibold text-zinc-300">The page you're looking for doesn't exist.</h2>
            </div>
            <button onClick={() => router.back()} className="border-2 border-zinc-100 text-zinc-100 text-sm font-bold uppercase hover:text-zinc-950 hover:bg-zinc-100 transition-all duration-150 ease-linear px-8 py-1.5 rounded">Go Back</button>
        </div>
    )
}