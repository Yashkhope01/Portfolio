import { LampContainer } from "./ui/lamp";

export default function GlowSeparator() {
  return (
    <div className="relative w-full h-[230px] flex items-center justify-center pointer-events-none">
      <LampContainer className="opacity-30 absolute inset-0">
        <div></div>
      </LampContainer>
    </div>
  );
}
