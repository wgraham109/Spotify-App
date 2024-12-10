<<<<<<< HEAD
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { getCode } from "@/app/lib/spotify";
import { signOut } from "@/app/auth";
import UserAvatar from "@/app/components/avatar";
=======
'use client'

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { getToken } from "@/app/lib/spotify";

const SpotifyComponent = dynamic(() => import('@/app/components/spotifyLogin'), { ssr: false });

>>>>>>> 2290f2d6af6f939429c277d48cabd5458d6c2efd

export default function Dashboard(){


    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const token = getToken(code);

    


    return (
        <div className="flex flex-col min-h-screen w-full bg-background_light gap-5">
            <Header/>
            <main>
<<<<<<< HEAD
                <div>
                    {/* <button onClick={() => getCode()}>
                        Connect with Spotify
                    </button> */}
                    <UserAvatar/>
                    <form
                        action={async () => {
                            "use server"
                            await signOut()
                        }}
                    >
                        <button type="submit">Sign Out</button>
                    </form>
                </div>
=======
                <SpotifyComponent/>
>>>>>>> 2290f2d6af6f939429c277d48cabd5458d6c2efd
            </main>
            <Footer/>
        </div>
    );
}