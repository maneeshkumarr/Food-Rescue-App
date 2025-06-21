import {
  MapPin,
  Phone,
  Calendar,
  PackageCheck,
  CheckCircle,
  ShieldCheck,
  Soup,
} from 'lucide-react';

export default function DonationCard({ data }: { data: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-green-100 p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top Section: Restaurant + Status */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-xl font-bold text-green-700">{data.restaurantName}</h2>
          <p className="text-gray-600 text-sm">{data.foodType}</p>
        </div>
        {data.pickedUp ? (
          <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4" /> Picked Up
          </span>
        ) : (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
            <Soup className="w-4 h-4" /> Available
          </span>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700 mt-2">
        <div className="flex items-center gap-2">
          <PackageCheck className="w-4 h-4 text-green-500" />
          <span><strong>Quantity:</strong> {data.quantity}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-500" />
          <span><strong>Location:</strong> {data.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-500" />
          <span><strong>Contact:</strong> {data.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-green-500" />
          <span><strong>Posted:</strong> {data.postedAt}</span>
        </div>
      </div>

      {/* CTA Button (Optional) */}
      {!data.pickedUp && (
        <div className="mt-6">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
            onClick={() => alert('Pickup Requested')}
          >
            Request Pickup
          </button>
        </div>
      )}
    </div>
  );
}
