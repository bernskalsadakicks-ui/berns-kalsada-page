type Props = {
  title: string;
  action?: string;
  onAction?: () => void;
};

export function SectionHeader({ title, action, onAction }: Props) {
  return (
    <div className="flex items-center justify-between px-6 pb-3 pt-8">
      <div className="flex items-center gap-2 text-base font-bold text-foreground sm:text-lg">
        <span className="h-2 w-2 rounded-full bg-neon shadow-neon-soft" />
        {title}
      </div>
      {action && (
        <button
          onClick={onAction}
          className="text-xs font-medium text-neon transition hover:opacity-80"
        >
          {action}
        </button>
      )}
    </div>
  );
}
