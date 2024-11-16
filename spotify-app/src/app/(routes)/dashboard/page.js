"use client";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { getCode } from "@/app/lib/spotify";

export default function Dashboard(){
    return (
        <div className="flex flex-col min-h-screen w-full bg-background_light gap-5">
            <Header/>
            <main>
                <div>
                    <button onClick={() => getCode()}>
                        Connect with Spotify
                    </button>
                </div>
            </main>
            <Footer/>
        </div>
    );
}