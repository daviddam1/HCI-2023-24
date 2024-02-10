import { Header } from "./components/header";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className=' bg-slate-600' style={{ backgroundImage: 'url(../assets/images/header-wallpaper.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
            <Header />
            <div className="pt-40 px-6 md:pt-40 flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
                    Oops! Page Not Found - Error 404
                </h1>
                <p className="text-lg md:text-xl text-white mt-4 text-center">
                    We&apos;re sorry, but the page you&apos;re looking for couldn&apos;t be found.
                </p>
                <Link href="/">
                    <button className='w-28 py-2 md:w-48 my-2 md:my-8 px-2 md:px-8 md:py-2 bg-[#F2E863] rounded-lg text-[#081C31] text-[11px] md:text-[16px] font-bold hover:scale-110'>Home</button>
                </Link>
            </div>
        </div>
    );
}
