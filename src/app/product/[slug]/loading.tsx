import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="bg-background py-8 text-foreground md:py-16">
      <Container>
        <div className="grid animate-pulse gap-8 md:grid-cols-2 md:gap-16">
          <div className="aspect-[4/5] bg-surface" />
          <div className="space-y-6">
            <div className="h-4 w-24 bg-surface" />
            <div className="h-12 w-3/4 bg-surface" />
            <div className="h-6 w-24 bg-surface" />
            <div className="h-24 w-full bg-surface" />
            <div className="h-14 w-full bg-surface" />
          </div>
        </div>
      </Container>
    </main>
  );
}
