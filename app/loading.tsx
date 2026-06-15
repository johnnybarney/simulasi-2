export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto mb-4 h-px w-16 animate-pulse" style={{ background: "linear-gradient(90deg, #0047ff, #00e5ff)" }} />
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20">loading...</p>
      </div>
    </div>
  );
}
