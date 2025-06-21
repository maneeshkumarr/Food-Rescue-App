'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DonationCard from '../../components/DonationCard';
import { Leaf, LoaderCircle } from 'lucide-react';

export default function BrowsePage() {
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/food')
      .then(res => {
        setDonations(res.data.reverse());
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching donations:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-100 text-green-800">
      {/* Top Heading */}
      <header className="text-center py-12 px-4 space-y-4">
        <div className="flex justify-center items-center gap-2 text-green-600 font-semibold uppercase text-sm tracking-wide">
          <Leaf className="w-5 h-5" />
          Browse Donations
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          See What's Available Near You
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore fresh surplus meals listed by generous restaurants and individuals.
        </p>
      </header>

      {/* Donations List Section */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Available Food Donations
        </h2>

        {loading ? (
          <div className="flex justify-center items-center text-gray-500">
            <LoaderCircle className="w-6 h-6 animate-spin mr-2" />
            Loading food donations...
          </div>
        ) : donations.length === 0 ? (
          <p className="text-center text-gray-600">No donations available yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {donations.map((donation, i) => (
              <DonationCard key={i} data={donation} />
            ))}
          </div>
        )}
      </section>

      {/* Footer Banner */}
      <footer className="bg-green-700 text-white py-10 text-center mt-8">
        <h3 className="text-xl font-semibold">Let’s reduce waste and serve meals to those in need.</h3>
        <p className="text-green-100 mt-2">Together, we can create a sustainable future 💚</p>
      </footer>
    </div>
  );
}
