type Props = {
  text: string;
};

export function AlertBanner({ text }: Props) {
  return (
    <div
      className="border-y px-5 py-3 text-center"
      style={{
        background:
          "linear-gradient(90deg, oklch(0.66 0.24 28 / 0.07), oklch(0.66 0.24 28 / 0.04), oklch(0.66 0.24 28 / 0.07))",
        borderColor: "oklch(0.66 0.24 28 / 0.18)",
      }}
    >
      <p className="text-[12px] font-bold leading-snug tracking-[0.3px] text-danger/90">
        <span className="text-danger">⚠</span> {text}
      </p>
    </div>
  );
}
