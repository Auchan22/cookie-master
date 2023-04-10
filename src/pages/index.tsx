import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return <h1 style={nunito.style}>Hello world</h1>;
}
