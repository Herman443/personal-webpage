"use client";

import { useEffect, useState } from "react";

interface Data {
  os: any;
  cpuTemp: number;
  cpuUsage: number[];
  memoryUsage: {
    used: number;
    total: number;
  };
}

export default function WebsiteInfo() {
  const [systemInfo, setSystemInfo] = useState<Data>();

  useEffect(() => {
    fetch("https://system.hermanostengen.com/")
      .then((res) => res.json())
      .then((data) => {
        setSystemInfo(data);
      });
  }, []);

  if (systemInfo) {
    return (
      <div className="flex flex-col items-center w-full px-2 py-20">
        <div className="flex flex-col items-center w-fit p-6 gap-12 bg-white rounded-xl border border-black shadow-2xl">
          <p className="text-5xl font-medium">Nettside info</p>
          <div className="flex flex-col items-start text-lg font-light w-full p-6 bg-white border rounded-xl shadow-lg shadow-gray-400">
            <p className="text-3xl font-medium">Oversikt</p>
            <p className="text-lg font-normal" style={{ maxWidth: 800 }}>
              Denne hjemmesiden ble hovedsakelig laget for å teste hosting av en
              nettapplikasjon på egen maskinvare, og den skal fungere som et
              sandbox-miljø for videre testing av interessante teknologier.
            </p>
            <p className="text-lg font-normal pt-1" style={{ maxWidth: 800 }}>
              Kompetanse jeg har forsøkt å demonstrere:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Datakommunikasjon og nettverksadministrasjon ved web deployment
              </li>
              <li>Innsikt i informasjonssikkerhet</li>
              <li>Bruk av sky-tjenester</li>
              <li>Utvikling av brukergrensesnitt og design i front-end</li>
              <li>Generering og uthenting av data i back-end</li>
              <li>Bruk av eksterne API-er</li>
            </ul>
          </div>

          <div className="flex flex-col items-center w-full gap-6">
            <div
              className="flex flex-col w-full items-center p-3 bg-white border rounded-xl shadow-lg shadow-gray-400"
              style={{ maxWidth: "1000px" }}
            >
              <p className="text-3xl font-medium py-2">Arkitektur</p>
              <img src="Website architecture.png" alt="Website Architecture" />
            </div>
            <div
              className="flex flex-col w-full items-start p-6 bg-white border rounded-xl shadow-lg shadow-gray-400 gap-3"
              style={{ maxWidth: "1000px" }}
            >
              <p className="text-3xl font-medium">FAQ</p>

              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  Hvorfor Raspberry Pi som server?
                </p>
                <p>
                  <b className="font-medium">Svar:</b> Jeg hadde én
                  tilgjengelig, det gjorde prosjektet mer unikt, jeg har lært
                  mye nytt, den er en utrolig kompakt maskin, og
                  studentbudsjettet har ikke rom for sky-hosting.
                </p>
              </span>

              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  Hvorfor Statisk Build?
                </p>
                <p>
                  <b className="font-medium">Svar:</b> Det sparer serveren fra å
                  kompilere sidene hver gang de blir besøkt, noe som gjør
                  nettsiden mye raskere og bedre egnet til å håndtere flere
                  brukere. Om deployment hadde vært på en kraftigere maskin
                  eller i skyen, ville et dynamisk build vært kult for å bedre
                  benytte Next.js sine egenskaper.
                </p>
              </span>

              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  Hva gjør Cloudflare?
                </p>
                <p>
                  <b className="font-medium">Svar:</b> I denne web-stacken
                  håndterer Cloudflare DNS-forespørsler knyttet til domenet,
                  filtrerer nettverkstrafikk som HTTP inn mot serveren
                  (brannmur), og knytter applikasjonen til internett via en
                  IPsec-tunnel.
                </p>
              </span>

              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  Hvorfor gå gjennom Cloudflare?
                </p>
                <p>
                  <b className="font-medium">Svar:</b> Takket være
                  IPsec-tunnelen er Raspberry Pi&quot;en tilkoblet Cloudflare
                  sitt nettverk direkte, noe som gjør at jeg slipper å
                  port-forwarde fra hjemmenettverket mitt. Å port-forwarde kan
                  sammenlignes med å installere en hundeluke i inngangsdøren
                  hjemme: veldig behagelig for min egen hund, men også
                  tilgjengelig for andre dyr og skapninger dersom sikkerheten
                  ikke er god nok. Som en bonus kan jeg ta med serveren hvor som
                  helst og starte den opp uten mer konfigurasjon enn tilkobling
                  til internett.
                </p>
              </span>
            </div>

            <div className="flex flex-col w-full px-10 py-5 text-base gap-3 border rounded-xl shadow-lg shadow-gray-400 bg-white">
              <span>
                <p className="text-3xl font-medium">Server tilstand</p>
                <p className="text-sm">(Verdier hentes ved refresh)</p>
              </span>
              <div className="">
                <h3 className="text-2xl font-medium text-foreground">
                  Generelt
                </h3>
                {[
                  ["Plattform", "linux"],
                  ["Arkitektur", "arm64"],
                  ["CPU Temperatur", `${systemInfo.cpuTemp.toFixed(1)}°C`],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col justify-between">
                    <span className="text-muted-foreground">{label}:</span>
                    <span className="text-foreground font-medium pb-2">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="">
                <h3 className="text-2xl font-medium text-foreground">
                  CPU Forbruk
                </h3>
                {systemInfo?.cpuUsage?.map((usage: number, index: number) => (
                  <div key={index} className="space-y-1">
                    <div className="flex flex-col justify-between text-muted-foreground">
                      <span>Core {index}</span>
                      <span className="font-medium pb-2">{usage}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-foreground">Minne</h3>
                <div className="flex flex-col justify-between text-muted-foreground">
                  <span>Used</span>
                  <span className="font-medium">
                    {systemInfo.memoryUsage.used.toFixed(2)} /{" "}
                    {systemInfo.memoryUsage.total.toFixed(2)} GB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <p>Laster systeminformasjon...</p>;
}
