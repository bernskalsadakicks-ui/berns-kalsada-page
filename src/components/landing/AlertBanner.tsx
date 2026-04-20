type Props = {
  text: string;
};

export function AlertBanner({ text }: Props) {
  return (
    <div
      className="border-y px-5 py-3.5 text-center shadow-[inset_0_1px_0_oklch(0.66_0.24_28/0.15),inset_0_-1px_0_oklch(0.66_0.24_28/0.15)]"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.66 0.24 28 / 0.12) 0%, oklch(0.66 0.24 28 / 0.04) 50%, oklch(0.66 0.24 28 / 0.12) 100%)",
        borderColor: "oklch(0.66 0.24 28 / 0.28)",
      }}
    >
      <p className="text-[12px] font-bold leading-snug tracking-[0.3px] text-danger/95">
        <span className="text-danger">⚠</span> {text}
      </p>
    </div>
  );
}
