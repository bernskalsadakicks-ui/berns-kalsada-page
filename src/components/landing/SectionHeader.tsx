type Props = {
  title: string;
  action?: string;
  onAction?: () => void;
};

export function SectionHeader({ title, action, onAction }: Props) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-7">
      <div className="flex items-center gap-2.5 text-[13px] font-black uppercase tracking-[1.5px] text-white">
        <span className="h-4 w-[3px] rounded-sm bg-neon" />
        {title}
      </div>
      {action && (
        <button
          onClick={onAction}
          className="text-[11px] font-bold tracking-[0.5px] text-neon transition hover:opacity-80"
        >
          {action}
        </button>
      )}
    </div>
  );
}
