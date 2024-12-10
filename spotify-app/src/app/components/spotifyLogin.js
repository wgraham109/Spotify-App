"use client"

import { getCode } from "@/app/lib/spotify";


export default function SpotifyLogin(){
    

    return (
        <div>
            <button onClick={() => getCode()}>
                Connect with Spotify
            </button>
        </div>
    );
}