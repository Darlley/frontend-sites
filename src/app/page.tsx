import Link from "next/link";

export default function Home() {
  return (
    <main className="h-svh w-full flex items-center justify-center">
      <ol className="flex flex-col gap-4 text-center">
        <Link href="/site01">Site de agencia</Link>
        <Link href="/site02">Site like Resend</Link>
      </ol>
    </main>
  );
}
