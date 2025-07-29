import React from 'react';

export default function WorkWithUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-200">
      {/* Title */}
      <h2 className="text-cyan-600 text-xl font-bold mb-2 border-b-2 border-cyan-400 inline-block">
        WHY WORK WITH US:
      </h2>

      {/* Bullet Points */}
      <ul className="list-disc list-inside mt-4 text-gray-800 leading-relaxed space-y-1">
        <li>We work as a Partner in Providing Solution.</li>
        <li>We Provide customer acquisition as per client requirement.</li>
        <li>Strong Planning, recruitment, Training, Execution.</li>
        <li>Deliver Result against agreed Targets.</li>
        <li>Open for feedback with quick turnaround.</li>
        <li>Strong Leadership.</li>
        <li>Strong Quality & Compliance.</li>
        <li>We believe in our self as a Team.</li>
      </ul>
    </div>
  );
}
