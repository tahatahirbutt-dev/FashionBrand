type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
};

export default function SectionHeading({
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-heading text-3xl md:text-4xl">{title}</h2>
    </div>
  );
}
