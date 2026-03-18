import type {Metadata} from 'next';
import { Nunito } from 'next/font/google';
import './globals.css'; // Global styles

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'KI-Assistenz für Pflegekräfte',
  description: 'KI-gestützte Assistenzplattform für internationale Pflegekräfte in Deutschland.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${nunito.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
