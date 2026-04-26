import { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  actions?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', actions }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="pill-label">{eyebrow}</span> : null}
      <div className="space-y-4">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy">{description}</p>
      </div>
      {actions}
    </div>
  );
}
