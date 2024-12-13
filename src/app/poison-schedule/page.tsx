import type { Metadata } from 'next'
import PoisonScheduleSearch from '@/components/PoisonScheduleSearch';

export const metadata: Metadata = {
  title: 'Poison Schedule Search - Farmasi Alde',
  description: 'Search through Malaysia\'s First Schedule Poisons List - Professional Pharmacy Services & Health Solutions',
  keywords: "poison schedule, Malaysia, healthcare, pharmacy, medicine, Farmasi Alde, poison list, racun berjadual, jadual racun, racun kkm, group A poison, KKM",

}

export default function PoisonSchedulePage() {
  return (
    <main className="flex-1">
      <PoisonScheduleSearch />
    </main>
  );
}