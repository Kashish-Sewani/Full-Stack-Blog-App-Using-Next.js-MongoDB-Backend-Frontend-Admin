import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='flex flex-col'>
            <Link href={"/"} className='px-2 sm:pl-14 py-3 border border-black bg-white'>
                <Image src={assets.logo} width={120} height={40} alt='Logo' />
            </Link>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black bg-slate-100'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.add_icon} alt='' width={28} /><p>Add blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className=' mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.blog_icon} alt='' width={28} /><p>Blog lists</p>
                    </Link>
                    <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                        <Image src={assets.email_icon} alt='' width={28} /><p>Subscriptions</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;