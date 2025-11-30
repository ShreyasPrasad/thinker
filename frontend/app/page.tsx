import { Header, Footer } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <Header />
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <div className="flex-1 flex flex-col gap-6 px-4 items-center justify-center min-h-[60vh]">
            <p className="text-2xl md:text-3xl text-center mb-8">
              Do you remember life without AI? When we used to think for ourselves?
            </p>
            <Button size="lg" className="text-lg px-8 py-6 font-black">
              Start thinking
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

