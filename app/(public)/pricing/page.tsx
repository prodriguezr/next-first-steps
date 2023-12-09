import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Prodrigu's - Pricing Page",
  description: 'Pricin Page',
  keywords: ["Prodrigu's", 'Pricing'],
};

export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>Pricing Page</span>
    </>
  );
}
