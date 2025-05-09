
import supabase from "./config/supabaseClient"


export default function Home() {
  console.log('supabase')
  console.log(supabase)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-3xl">
        Home page
      </h1>
    </div>
  );
}
