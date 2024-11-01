export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div>
      <code className={className}>{children}</code>
    </div>
  );
}
