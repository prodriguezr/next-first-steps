import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Prodrigu's - Contact Page",
  description: 'This is my service contact page',
  keywords: ["Prodrigu's", 'Contact'],
};

export default function ContactPage() {
  return (
    <>
      <span className='text-7xl'>Contact Page</span>
    </>
  );
}
