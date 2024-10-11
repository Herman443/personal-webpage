import React from "react";
import LandingPage from "./components/LandingPage";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = `https://web.hermanostengen.com/`;

  return {
    title: "Herman Østengen - Hjemmeside",
    description: "Sjekk ut Herman sin hjemmeside!",
    keywords:
      "Herman, Østengen, student, IT, konsulent, utvikler, cv, hjemmeside, NTNU, taco",
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: "Herman Østengen - Hjemmeside",
      description: "Sjekk ut Herman sin hjemmeside!",
      url: siteUrl,
      type: "website",
      images: [
        {
          url: `${siteUrl}/Profile.jpg`,
          width: 551,
          height: 551,
          alt: "Profile picture",
        },
      ],
      locale: "nb_NO",
      siteName: "Herman Østengen",
    },
  };
}

const page = async () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default page;
