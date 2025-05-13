import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-6 mx-auto my-16 md:flex md:grid-cols-4">
      {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
        <div
          key={id}
          className={`relative ${lineRight ? "md:border-r border-white/20 pr-4" : ""} ${
            lineRightMobile ? "border-r border-white/20" : ""
          }`}
        >
          <p className="flex items-baseline gap-1 mb-2 text-3xl font-extrabold md:text-5xl text-secondary">
            + <CountUp end={endCounter} start={0} duration={3} />
          </p>
          <p className="text-sm uppercase tracking-wide text-white/70 max-w-[100px]">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CounterServices;
