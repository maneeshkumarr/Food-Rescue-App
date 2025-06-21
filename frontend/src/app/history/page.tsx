'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DonationCard from '../../components/DonationCard';
import { Clock, LoaderCircle } from 'lucide-react';

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/food')
      .then(res => {
        setHistory(res.data.reverse());
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading history:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-100 text-green-800 py-12 px-4">
      {/* Header Section */}
      <header className="text-center mb-12 space-y-4">
        <div className="flex justify-center items-center gap-2 text-green-600 font-semibold uppercase text-sm tracking-wide">
          <Clock className="w-5 h-5" />
          Donation History
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Your Donation History
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Review your past contributions and see how you’ve helped reduce food waste.
        </p>
      </header>

      {/* History List Section */}
      <section className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center text-gray-500">
            <LoaderCircle className="w-6 h-6 animate-spin mr-2" />
            Loading history...
          </div>
        ) : history.length === 0 ? (
          <p className="text-center text-gray-600">No donation history found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {history.map((item, index) => (
              <DonationCard key={index} data={item} />
            ))}
          </div>
        )}
      </section>

      {/* Footer Section */}
      <footer className="bg-green-700 text-white py-10 text-center mt-16 rounded-t-3xl shadow-inner">
        <h3 className="text-xl font-semibold max-w-xl mx-auto">
          Thank you for making a difference.
        </h3>
        <p className="text-green-100 mt-2 text-sm">
          Together, we can continue to fight food waste 💚
        </p>
      </footer>
    </div>
  );
}
