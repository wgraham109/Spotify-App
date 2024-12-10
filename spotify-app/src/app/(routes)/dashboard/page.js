import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { getCode } from "@/app/lib/spotify";
import { signOut } from "@/app/auth";
import UserAvatar from "@/app/components/avatar";

export default function Dashboard(){
    return (
        <div className="flex flex-col min-h-screen w-full bg-background_light gap-5">
            <Header/>
            <main>
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
            </main>
            <Footer/>
        </div>
    );
}