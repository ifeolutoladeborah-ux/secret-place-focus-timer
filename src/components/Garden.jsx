import React from 'react';

const GARDEN_STAGES = [
  { name: 'Prepared Ground', days: 7, color: '#8B7355' },
  { name: 'First Signs of Life', days: 14, color: '#9CB380' },
  { name: 'Early Growth', days: 21, color: '#7FB069' },
  { name: 'Vegetation', days: 42, color: '#6BA368' },
  { name: 'Budding', days: 54, color: '#E8A87C' },
  { name: 'First Blossoms', days: 76, color: '#F4A6D7' },
  { name: 'Full Bloom', days: 100, color: '#FF9ECD' },
  { name: 'Fruit Appears', days: 150, color: '#E07A5F' },
  { name: 'Mature Garden', days: Infinity, color: '#3D5A80' }
];

const Garden = ({ stage }) => {
  const stageInfo = GARDEN_STAGES[stage];
  
  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
      <img 
        src={`/gardens/stage-${stage}.png`}
        alt={stageInfo.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback if image doesn't load
          e.target.style.display = 'none';
          e.target.parentElement.style.background = `linear-gradient(180deg, #87CEEB 0%, ${stageInfo.color} 100%)`;
        }}
      />
    </div>
  );
};

export default Garden;
export { GARDEN_STAGES };