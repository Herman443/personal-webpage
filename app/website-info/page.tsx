import { getSystemDetails } from "@/lib/system";

export default async function WebsiteInfo() {
  const systemInfo = await getSystemDetails();

  const getTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${day}.${month}.${year} at ${hours}:${minutes}.`;
  };

  return (
    <div className="flex flex-col items-center w-full px-2 py-20">
      <div className="flex flex-col items-center w-fit p-6 gap-12 bg-white rounded-xl border border-black shadow-2xl">
        <p className="text-5xl font-medium">Nettside info</p>
        <div className="flex flex-col items-center w-full gap-6">
          <div
            className="flex flex-col w-full items-center p-3 bg-white border rounded-xl shadow-lg shadow-gray-400"
            style={{ maxWidth: "1000px" }}
          >
            <p className="text-3xl font-medium py-2">Arkitektur</p>
            <img src="Website architecture.png" />
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
                <b className="font-medium">Svar:</b> Jeg hadde én tilgjengelig,
                prosessen er et morsomt prosjekt, jeg har lært mye nytt, det er
                en utrolig søt maskin og studentbudskjettet har ikke rom for
                sky-hosting.
              </p>
            </span>
            <span style={{ maxWidth: 800 }}>
              <p className="text-lg font-medium border-b border-black w-fit">
                Hvorfor Statisk Build?
              </p>
              <p>
                <b className="font-medium">Svar:</b> Det sparer{"  "}
                <i
                  className="hover:cursor-help"
                  title="Fortsatt bare en Raspberry Pi"
                >
                  serveren
                </i>
                {"  "}
                fra å kompilere sidene hver gang de blir besøkt, som gjør
                nettsiden mye raskere og egnet til å håndtere flere brukere. Om
                serveren hadde vært en kraftigere maskin eller i sky ville et
                dynamisk build vært kult for muligheten til å samhandle i
                sanntid med data på serveren (som for eksempel tilstanden under)
                uten å sette opp et API.
              </p>
            </span>
            <span style={{ maxWidth: 800 }}>
              <p className="text-lg font-medium border-b border-black w-fit">
                Hva gjør Cloudflare?
              </p>
              <p>
                <b className="font-medium">Svar:</b> I denne web-stacken
                håndterer de DNS-requests knyttet til mitt domene, filtrerer
                nettverkstrafikk som HTTP inn mot serveren (brannmur) og knytter{" "}
                {"  "}
                <i
                  className="hover:cursor-help"
                  title="Fortsatt bare en Raspberry Pi"
                >
                  serveren
                </i>
                {"  "}
                til internett via en IPsec-tunnel. Utover det gjør de også det
                meste innenfor sky-tjenester.
              </p>
            </span>
            <span style={{ maxWidth: 800 }}>
              <p className="text-lg font-medium border-b border-black w-fit">
                Hvorfor gå gjennom Cloudflare?
              </p>
              <p>
                <b className="font-medium">Svar:</b> Takket være IPsec-tunnelen
                er det som om Raspberry Pi&apos;en er tilkoblet Cloudflare sitt
                nettverk direkte, som gjør at jeg slipper å port-forwarde fra
                hjemmenettverket mitt. Det kan sammenlignes med å installere en
                hundeluke i inngangsdøren: veldig behagelig for min egen hund
                men også tilgjengelig for andre dyr og skapninger om sikkerheten
                ikke er god nok. Som en bonus kan jeg ta med {"  "}
                <i
                  className="hover:cursor-help"
                  title="Fortsatt bare en Raspberry Pi"
                >
                  serveren
                </i>
                {"  "}
                hvor som helst og starte den opp uten mer konfigurasjon enn
                tilkobling til internett.
              </p>
            </span>
          </div>
          <div
            className="flex flex-col w-full px-10 py-5 text-base gap-3 border rounded-xl shadow-lg shadow-gray-400 bg-white"
            style={{ maxWidth: "400px" }}
          >
            <span>
              <p className="text-3xl font-medium">Server tilstand</p>
              <p className="text-sm">(Verdier oppdateres ved reboot)</p>
            </span>
            <div className="">
              <h3 className="text-2xl font-medium text-foreground">Generelt</h3>
              {[
                ["Hostname", systemInfo.os.hostname()],
                ["Plattform", systemInfo.os.platform()],
                ["Arkitektur", systemInfo.os.arch()],
                ["CPU Temperatur", `${systemInfo.cpuTemp.toFixed(1)}°C`],
                ["Forrige Reboot", `${getTime()}`],
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
              {systemInfo.cpuUsage.map((usage, index) => (
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
                  {systemInfo.memoryUsage.used.toFixed(2)} /
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
