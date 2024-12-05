'use client'

import Link from 'next/link'
import { LuArrowRight } from 'react-icons/lu'

export default function Posts() {
    return (
        <div className="flex flex-col gap-6">
            <Link href="/post" className="flex flex-col gap-2 group">
                <div className='flex items-center gap-2'>
                    <h3 className="text-sm uppercase font-bold text-zinc-100">Blog Post #1</h3>
                    <LuArrowRight size={20} className='text-zinc-100 group-hover:translate-x-2 transition-all duration-150 ease-linear' />
                </div>
                <p className="text-sm max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non enim at porro perferendis vero aliquid aliquam eius maxime minima animi sit, ipsam quos quaerat quibusdam velit eos est quis sint!</p>
            </Link>
            <Link href="/post" className="flex flex-col gap-2 group">
                <div className='flex items-center gap-2'>
                    <h3 className="text-sm uppercase font-bold text-zinc-100">Blog Post #2</h3>
                    <LuArrowRight size={20} className='text-zinc-100 group-hover:translate-x-2 transition-all duration-150 ease-linear' />
                </div>
                <p className="text-sm max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non enim at porro perferendis vero aliquid aliquam eius maxime minima animi sit, ipsam quos quaerat quibusdam velit eos est quis sint!</p>
            </Link>
            <Link href="/post" className="flex flex-col gap-2 group">
                <div className='flex items-center gap-2'>
                    <h3 className="text-sm uppercase font-bold text-zinc-100">Blog Post #3</h3>
                    <LuArrowRight size={20} className='text-zinc-100 group-hover:translate-x-2 transition-all duration-150 ease-linear' />
                </div>
                <p className="text-sm max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non enim at porro perferendis vero aliquid aliquam eius maxime minima animi sit, ipsam quos quaerat quibusdam velit eos est quis sint!</p>
            </Link>
        </div>
    )
}