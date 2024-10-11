"use client";

import { useEffect, useState } from "react";

interface data {
  os: any;
  cpuTemp: number;
  cpuUsage: [];
  memoryUsage: any;
}

export default function WebsiteInfo() {
  const [systemInfo, setSystemInfo] = useState<data>();

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
          <p className="text-5xl font-medium">Website Info</p>
          <div className="flex flex-col items-start text-lg font-light w-full p-6 bg-white border rounded-xl shadow-lg shadow-gray-400">
            <p className="text-3xl font-medium">Outline</p>
            <p className="text-lg font-normal" style={{ maxWidth: 800 }}>
              This website was primarily created to test the hosting of web
              applications on my own hardware and will serve as a sandbox
              environment for further testing of interesting technologies.
            </p>
            <p className="text-lg font-normal pt-1" style={{ maxWidth: 800 }}>
              Skills I have attempted to demonstrate:
            </p>
            <li>
              Data communication and network administration through web
              deployment
            </li>
            <li>Understanding of information security</li>
            <li>Use of cloud services</li>
            <li>Development of user interfaces and design in the front-end</li>
            <li>Data generation and retrieval in the back-end</li>
            <li>Use of external APIs</li>
          </div>
          <div className="flex flex-col items-center w-full gap-6">
            <div
              className="flex flex-col w-full items-center p-3 bg-white border rounded-xl shadow-lg shadow-gray-400"
              style={{ maxWidth: "1000px" }}
            >
              <p className="text-3xl font-medium py-2">Architecture</p>
              <img src="../Website architecture.png" />
            </div>
            <div
              className="flex flex-col w-full items-start p-6 bg-white border rounded-xl shadow-lg shadow-gray-400 gap-3"
              style={{ maxWidth: "1000px" }}
            >
              <p className="text-3xl font-medium">FAQ</p>
              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  Why Raspberry Pi as a server?
                </p>
                <p>
                  <b className="font-medium">Answer:</b> I had one available, it
                  made the project more unique, I&apos;ve learned a lot of new
                  things, it&apos;s an incredibly cute machine, and my student
                  budget doesn&apos;t allow for cloud hosting.
                </p>
              </span>
              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  Why use a Static Build?
                </p>
                <p>
                  <b className="font-medium">Answer:</b> It saves{" "}
                  <i
                    className="hover:cursor-help"
                    title="Still just a Raspberry Pi"
                  >
                    the server
                  </i>{" "}
                  from compiling the pages every time they are visited, making
                  the website much faster and capable of handling more users. If
                  the server were a more powerful machine or in the cloud, a
                  dynamic build would be neat for testing the full potential of
                  Next.js&apos;s abilities.
                </p>
              </span>
              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  What does Cloudflare do?
                </p>
                <p>
                  <b className="font-medium">Answer:</b> In this web stack, they
                  handle DNS requests linked to the domain, filter network
                  traffic such as HTTP into the server (firewall), and connect
                  the application to the internet via an IPsec tunnel.
                </p>
              </span>
              <span style={{ maxWidth: 800 }}>
                <p className="text-lg font-medium border-b border-black w-fit">
                  Why go through Cloudflare?
                </p>
                <p>
                  <b className="font-medium">Answer:</b> Thanks to the IPsec
                  tunnel, it&apos;s as if the Raspberry Pi is connected directly
                  to Cloudflare&apos;s network, which means I don&apos;t have to
                  port forward from my home network. Doing so could be compared
                  to installing a pet door in my home: very convenient for my
                  own dog, but also accessible to other animals and creatures if
                  the security isn&apos;t good enough. As a bonus, I can take
                  the server anywhere and start it up without more configuration
                  than connecting it to the internet.
                </p>
              </span>
            </div>
            <div className="flex flex-col w-full px-10 py-5 text-base gap-3 border rounded-xl shadow-lg shadow-gray-400 bg-white">
              <span>
                <p className="text-3xl font-medium">Server Status</p>
                <p className="text-sm">(Values update on refresh)</p>
              </span>
              <div className="">
                <h3 className="text-2xl font-medium text-foreground">
                  General
                </h3>
                {[
                  ["Platform", "linux"],
                  ["Architecture", "arm64"],
                  ["CPU Temperature", `${systemInfo.cpuTemp.toFixed(1)}°C`],
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
                  CPU Usage
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
                <h3 className="text-2xl font-medium text-foreground">Memory</h3>
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
}
