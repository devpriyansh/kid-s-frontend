import React from 'react';

export const CardSkeleton = () => (
  <div className="glass-card p-4 sm:p-6 flex flex-col items-center animate-pulse border border-white/40 shadow-sm min-h-[150px]">
    <div className="w-20 h-20 rounded-2xl bg-kid-primary/20 mb-4" />
    <div className="w-3/4 h-6 rounded-full bg-kid-primary/10 mb-2" />
    <div className="w-1/2 h-4 rounded-full bg-gray-200/50" />
  </div>
);

export const ListSkeleton = ({ rows = 5 }) => (
  <div className="w-full animate-pulse space-y-4 mt-4">
    {[...Array(rows)].map((_, i) => (
      <div key={i} className="flex items-center justify-between p-4 bg-white/40 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 w-1/2">
          <div className="w-12 h-12 rounded-xl bg-kid-purple/20" />
          <div className="space-y-2 w-full">
            <div className="h-4 bg-gray-200/60 rounded-full w-3/4" />
            <div className="h-3 bg-gray-200/40 rounded-full w-1/2" />
          </div>
        </div>
        <div className="w-16 h-6 bg-kid-green/20 rounded-full" />
      </div>
    ))}
  </div>
);

export const DashboardCardSkeleton = () => (
  <div className="glass-card p-6 text-center animate-pulse border border-white/40 min-h-[180px] flex flex-col justify-center">
    <div className="w-16 h-16 rounded-full bg-kid-yellow/30 mx-auto mb-4" />
    <div className="w-24 h-8 rounded-full bg-gray-200/60 mx-auto mb-2" />
    <div className="w-20 h-4 rounded-full bg-gray-200/40 mx-auto" />
  </div>
);

export const GraphSkeleton = () => (
  <div className="glass-card p-4 w-full h-[300px] animate-pulse border border-white/40 flex flex-col">
    <div className="w-48 h-6 bg-gray-200/60 rounded-full mb-6" />
    <div className="flex-1 flex items-end gap-4 justify-around px-4">
      {[40, 70, 45, 90, 60, 30, 80].map((h, i) => (
        <div key={i} className="w-12 bg-kid-primary/20 rounded-t-xl" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

export const ProfileCardSkeleton = () => (
  <div className="snap-center shrink-0 w-64 glass-card p-8 text-center border-4 border-slate-200 animate-pulse bg-white/40 shadow-sm flex flex-col items-center min-h-[250px]">
    <div className="w-24 h-24 rounded-full bg-slate-200/80 mb-6" />
    <div className="w-32 h-8 rounded-full bg-slate-200/80 mb-4" />
    <div className="w-24 h-10 rounded-xl bg-kid-yellow/20" />
  </div>
);

export const GameSkeleton = () => (
  <div className="absolute inset-0 z-[100] bg-kid-bg flex flex-col items-center justify-center overflow-hidden animate-pulse">
    <div className="absolute top-4 left-4 z-[60] w-24 h-10 bg-white/50 rounded-2xl" />
    
    <div className="h-full w-full flex flex-col max-w-6xl mx-auto p-4 z-10 pt-16">
      <div className="flex-none flex justify-center mb-6">
        <div className="w-64 h-12 bg-white/60 rounded-xl" />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 justify-center">
        {/* Sidebar Left */}
        <div className="hidden lg:flex flex-col gap-4 w-48">
          <div className="w-full h-48 bg-white/40 rounded-3xl" />
          <div className="w-full h-32 bg-white/40 rounded-3xl" />
        </div>

        {/* Center Main Area */}
        <div className="flex-1 max-w-[500px] max-h-[500px] w-full bg-white/50 rounded-[3rem] border-[4px] border-white/60 mx-auto" />

        {/* Sidebar Right */}
        <div className="w-full lg:w-48 flex lg:flex-col flex-wrap gap-4 justify-center items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-20 h-20 bg-white/50 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  </div>
);
