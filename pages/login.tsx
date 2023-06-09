import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react"
function login() {
    const [login, setLogin] = useState(false)
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center
        md:justify-center md:bg-transparent">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image
                src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt=""
                className="-z-10 !hidden opacity-60 sm:!inline"
                fill
                objectFit="cover"
            />
            <img
                src="https://rb.gy/ulxxee"
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                width={150}
                height={150}
            />
            <form className="relative mt-20 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
                <h1 className='text-4xl font-semibold'>Sign In</h1>
                <div className="space-y-4">
                    <label className="inline-block w-full">
                        <input type="email" placeholder="Email" className="input" />
                    </label>
                    <label className="inline-block w-full">
                        <input type="email" placeholder="Password" className="input" />
                    </label>
                    <button className="w-full rounded bg-[#e50914] py-3 font-semibold"> Sign In</button>
                    <div className='text-[gray]'>
                        New to Netflix? {' '}
                        <button type="submit" className="text-white hover:underline">Sign up  now</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default login