type Props = {
  title: string;
  action?: string;
  onAction?: () => void;
};

export function SectionHeader({ title, action, onAction }: Props) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-7">
      <div className="flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-wide text-foreground">
        <span className="h-[3px] w-[18px] rounded-sm bg-neon" />
        {title}
      </div>
      {action && (
        <button
          onClick={onAction}
          className="text-[11px] font-semibold uppercase tracking-wider text-neon transition hover:opacity-80"
        >
          {action}
        </button>
      )}
    </div>
  );
}
