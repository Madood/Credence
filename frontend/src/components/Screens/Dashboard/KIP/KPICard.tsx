// KPICard.tsx
interface KPICardProps {
  title: string;
  value: string;
  prefix?: string;
  suffix?: string;
  change: number;
}

export function KPICard({ title, value, prefix = '', suffix = '', change }: KPICardProps) {
  return (
    <div className="kpi-card">
      <p className="kpi-title">{title}</p>
      <p className="kpi-value">
        {prefix}{value}{suffix}
      </p>
      <p className={`kpi-change ${change >= 0 ? 'positive' : 'negative'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </p>
    </div>
  );
}