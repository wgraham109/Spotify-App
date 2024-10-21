import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background_light gap-5">
      <Header/>
      <main>
        <Link href="/login"> Login </Link>
      </main>   
      <Footer/>
    </div>
  );
}
