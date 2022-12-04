import NextAuth from '../lib/next-auth';
import { unstable_getServerSession } from 'next-auth/next';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();

  console.log({ session });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NextAuth session={session}>{children}</NextAuth>
      </body>
    </html>
  );
}
