
interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight text-foreground/90">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
