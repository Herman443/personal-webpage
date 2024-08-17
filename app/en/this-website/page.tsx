import { getSystemDetails } from "@/lib/system";

export default async function Thiswebsite() {
  const systemInfo = await getSystemDetails();

  return (
    <div className="flex flex-col items-start w-full px-16 py-32 gap-16">
      <p className="text-6xl pb-2 border-b-2 border-black w-full">
        Stats about the hosting Raspberry Pi
      </p>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col px-10 py-5 text-2xl gap-6 border border-black rounded-xl shadow-xl">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-foreground">General</h3>
            {[
              ["Hostname", systemInfo.os.hostname()],
              ["Platform", systemInfo.os.platform()],
              ["Architecture", systemInfo.os.arch()],
              ["CPU Temperature", `${systemInfo.cpuTemp.toFixed(1)}°C`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-12">
                <span className="text-muted-foreground">{label}:</span>
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-foreground">
              CPU Usage
            </h3>
            {systemInfo.cpuUsage.map((usage, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-muted-foreground">
                  <span>Core {index}</span>
                  <span>{usage}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-foreground">
              Memory Usage
            </h3>
            <div className="flex justify-between text-muted-foreground">
              <span>Used</span>
              <span>
                {systemInfo.memoryUsage.used.toFixed(2)} /{" "}
                {systemInfo.memoryUsage.total.toFixed(2)} GB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
