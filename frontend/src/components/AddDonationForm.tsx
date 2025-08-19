'use client';
import { useState } from 'react';
import {
  Utensils,
  Package,
  MapPin,
  Phone,
  Building2,
  Loader2,
  Info,
  HelpingHand,
} from 'lucide-react';
import { Donation } from '@/types/donation';

export default function AddDonationForm({ onAdd }: { onAdd: (data: Donation) => void }) {
  // form state excludes pickedUp since we set it on submit
  const [form, setForm] = useState<Omit<Donation, 'pickedUp'>>({
    restaurantName: '',
    foodType: '',
    quantity: '',
    location: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload: Donation = {
      ...form,
      pickedUp: false,
    };

    try {
      await onAdd(payload);
      // reset form
      setForm({
        restaurantName: '',
        foodType: '',
        quantity: '',
        location: '',
        phone: '',
      });
    } catch (err) {
      console.error('❌ Error submitting donation:', err);
      alert('Failed to submit donation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-lime-50 via-white to-green-50">
      {/* Intro Section */}
      <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-extrabold text-green-700">🍛 Donate Surplus Food</h2>
        <p className="text-gray-600 text-lg">
          Your excess food can fill empty stomachs. Join our movement to eliminate food waste and hunger. It only takes a minute.
        </p>
        <div className="flex justify-center gap-4 text-green-600 text-sm">
          <div className="flex items-center gap-2">
            <HelpingHand className="w-4 h-4" /> Supports community hunger relief
          </div>
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4" /> Easy and fast process
          </div>
        </div>
        <hr className="w-24 mx-auto border-green-500" />
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-4xl mx-auto p-10 rounded-3xl shadow-2xl border border-gray-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Restaurant Name */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-medium text-gray-700">
              <Building2 className="w-5 h-5 text-green-600" /> Restaurant Name
            </label>
            <input
              type="text"
              value={form.restaurantName}
              onChange={e => setForm(f => ({ ...f, restaurantName: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E.g. Green Garden Hotel"
            />
          </div>

          {/* Food Type */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-medium text-gray-700">
              <Utensils className="w-5 h-5 text-green-600" /> Type of Food
            </label>
            <input
              type="text"
              value={form.foodType}
              onChange={e => setForm(f => ({ ...f, foodType: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E.g. Rice & Curry"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-medium text-gray-700">
              <Package className="w-5 h-5 text-green-600" /> Quantity
            </label>
            <input
              type="text"
              value={form.quantity}
              onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E.g. 10 plates"
            />
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-medium text-gray-700">
              <MapPin className="w-5 h-5 text-green-600" /> Pickup Location
            </label>
            <input
              type="text"
              value={form.location}
              onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E.g. Indiranagar, Bangalore"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-1 font-medium text-gray-700">
              <Phone className="w-5 h-5 text-green-600" /> Contact Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E.g. +91 9876543210"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-white font-bold py-3 rounded-lg hover:shadow-xl transition-all flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Submitting...
              </>
            ) : (
              <>🚀 Submit Donation</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
