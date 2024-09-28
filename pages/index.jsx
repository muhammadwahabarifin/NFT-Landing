import Loader from "@/components/Loader";
import ArtistInfo from "@/sections/ArtistInfo";
import CollectionInfo from "@/sections/CollectionInfo";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Sponsors from "@/sections/Sponsors";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loader />;

  return (
    <>
      <head>
        <title>NFT Collection Landing</title>
        <meta name="description" content="xxx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Header />
      <Sponsors />
      <CollectionInfo />
      <ArtistInfo />
      <CTA />
      <Footer />
    </>
  );
}
