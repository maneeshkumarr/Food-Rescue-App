'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddDonationForm from '../../components/AddDonationForm';
import DonationCard from '../../components/DonationCard';
import { Leaf, LoaderCircle, HandHeart } from 'lucide-react';

export default function DonatePage() {
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

  const handleAddDonation = (donation: any) => {
    axios
      .post('http://localhost:5000/api/food', donation)
      .then(res => {
        setDonations([res.data, ...donations]);
      })
      .catch(err => {
        console.error('Error submitting donation:', err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-100 text-green-800">
      {/* Top Heading */}
      <header className="text-center py-12 px-4 space-y-4">
        <div className="flex justify-center items-center gap-2 text-green-600 font-semibold uppercase text-sm tracking-wide">
          <Leaf className="w-5 h-5" />
          Donate Surplus Food
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Help Us Feed More. Waste Less.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Add available food from your restaurant or home. We’ll make sure it reaches those in need.
        </p>
      </header>

      {/* Donation Form */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-white border border-green-200 rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
            <HandHeart className="w-6 h-6" />
            Add a New Donation
          </h2>
          <AddDonationForm onAdd={handleAddDonation} />
        </div>
      </section>

      {/* Donation List */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Available Donations
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
        <h3 className="text-xl font-semibold">Together, we can eliminate food waste and feed more people.</h3>
        <p className="text-green-100 mt-2">Thank you for supporting the cause 💚</p>
      </footer>
    </div>
  );
}
