import { Layout } from '@/components/layouts';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return <h1>Cookie master</h1>;
}
