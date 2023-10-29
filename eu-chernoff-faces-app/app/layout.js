import './globals.css';
import { Inter } from 'next/font/google';
import { AppContextProvider } from './contexts/appContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '(Chernoff) Faces of European Union',
  description: 'EU Data mapped to Chernoff Faces',
  openGraph: {
    title: '(Chernoff) Faces of European Union',
    description: 'EU Data mapped to Chernoff Faces',
    url: 'https://chernoff-faces-of-european-union.vercel.app/',
    images: [
      {
        url: 'https://raw.githubusercontent.com/MatheusFreitag/chernoff-faces-of-european-union/main/eu-chernoff-faces-app/public/og_image.png',
        width: 1200,
        height: 600,
        alt: 'European Union Map with Chernoff Faces on top of each country.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '(Chernoff) Faces of European Union',
    description: 'EU Data mapped to Chernoff Faces',
    images: [
      'https://raw.githubusercontent.com/MatheusFreitag/chernoff-faces-of-european-union/main/eu-chernoff-faces-app/public/og_image.png',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
