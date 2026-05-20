'use client';

import React, { memo } from 'react';

const MetricCard = memo(function MetricCard({ icon: Icon, label, value, className = '' }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-sm ${className}`}>
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-2xl font-bold text-gray-900 tabular-nums">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
});

export default MetricCard;