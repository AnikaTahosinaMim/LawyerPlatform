// import Hero from "./Hero";
// import LawyerSection from "./LawyerSection";

import Hero from "./homepage/Hero";
import LawyerSection from "./homepage/LawyerSection";

const Homepage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/lawyerData?limit=6`, {
    cache: "no-store",
  });

  const lawyers = await res.json();

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Hero />
      <LawyerSection lawyers={lawyers} />
    </main>
  );
};

export default Homepage;
