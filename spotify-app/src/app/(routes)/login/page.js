import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { signIn } from "@/app/auth";

export default function Login(){
    return(
        <div className="flex flex-col min-h-screen w-full bg-background_light gap-5"> 
            <Header loggedIn={true}/>

            <main className="flex flex-col w-full justify-center">
                <div className="bg-highlight rounded-md mx-auto py-5">
                    <h1 className="text-black text-center text-xl font-semibold"> Log in to your account </h1>
                    
                   
                    <form 
                        action={async () => {
                        "use server"
                        await signIn("spotify", {redirectTo: "/dashboard"},
                            { scope: 'user-read-email user-modify-playback-state' }
                        );
                        }}
                        className="space-y-5 bg-col_blue px-5"
                    >
                        <button type="submit" className=""> Sign In with Spotify </button>
                    </form>
                    
                    <div className="flex flex-row gap-2 text-black px-3 mt-5">
                        <p> Don't have an account yet? </p>
                        <Link href="/signup" className="underline"> Sign up here </Link>
                    </div>

                </div>
            </main>

            <Footer/>
        </div>
    );
}