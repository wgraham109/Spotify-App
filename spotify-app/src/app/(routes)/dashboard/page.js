'use client'

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { getToken } from "@/app/lib/spotify";

const SpotifyComponent = dynamic(() => import('@/app/components/spotifyLogin'), { ssr: false });


export default function Dashboard(){


    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const token = getToken(code);

    


    return (
        <div className="flex flex-col min-h-screen w-full bg-background_light gap-5">
            <Header/>
            <main>
                <SpotifyComponent/>
            </main>
            <Footer/>
        </div>
    );
}