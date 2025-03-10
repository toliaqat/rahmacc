'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Import moon phase images
import waxingCrescentImg5 from '@/images/moon-phases/new-moon.jpg';
import waxingCrescentImg from '@/images/moon-phases/waxing-crescent.jpg';
import firstQuarterImg from '@/images/moon-phases/first-quarter.jpg';
import waxingGibbousImg from '@/images/moon-phases/waxing-gibbous.jpg';
import fullMoonImg from '@/images/moon-phases/full-moon.jpg';
import waningGibbousImg from '@/images/moon-phases/waning-gibbous.jpg';
import lastQuarterImg from '@/images/moon-phases/third-quarter.jpg';
import waningCrescentImg from '@/images/moon-phases/waning-crescent.jpg';
import waningCrescentImg5 from '@/images/moon-phases/waning-crescent-5.jpg';
import newMoonImg from '@/images/moon-phases/zero-moon.jpg';

import moonPhase000 from '@/images/moons/MoonPhase-000.png';
import moonPhase001 from '@/images/moons/MoonPhase001.png';
import moonPhase002 from '@/images/moons/MoonPhase002.png';
import moonPhase003 from '@/images/moons/MoonPhase003.png';
import moonPhase004 from '@/images/moons/MoonPhase004.png';
import moonPhase005 from '@/images/moons/MoonPhase005.png';
import moonPhase006 from '@/images/moons/MoonPhase006.png';
import moonPhase007 from '@/images/moons/MoonPhase007.png';
import moonPhase008 from '@/images/moons/MoonPhase008.png';
import moonPhase009 from '@/images/moons/MoonPhase009.png';
import moonPhase010 from '@/images/moons/MoonPhase010.png';
import moonPhase011 from '@/images/moons/MoonPhase011.png';
import moonPhase012 from '@/images/moons/MoonPhase012.png';
import moonPhase013 from '@/images/moons/MoonPhase013.png';
import moonPhase014 from '@/images/moons/MoonPhase014.png';
import moonPhase015 from '@/images/moons/MoonPhase015.png';
import moonPhase016 from '@/images/moons/MoonPhase016.png';
import moonPhase017 from '@/images/moons/MoonPhase017.png';
import moonPhase018 from '@/images/moons/MoonPhase018.png';
import moonPhase019 from '@/images/moons/MoonPhase019.png';
import moonPhase020 from '@/images/moons/MoonPhase020.png';
import moonPhase021 from '@/images/moons/MoonPhase021.png';
import moonPhase022 from '@/images/moons/MoonPhase022.png';
import moonPhase023 from '@/images/moons/MoonPhase023.png';
import moonPhase024 from '@/images/moons/MoonPhase024.png';
import moonPhase025 from '@/images/moons/MoonPhase025.png';
import moonPhase026 from '@/images/moons/MoonPhase026.png';
import moonPhase027 from '@/images/moons/MoonPhase027.png';
import moonPhase028 from '@/images/moons/MoonPhase028.png';
import moonPhaseNeg001 from '@/images/moons/MoonPhase--001.png';
import moonPhaseNeg002 from '@/images/moons/MoonPhase--002.png';
import moonPhaseNeg003 from '@/images/moons/MoonPhase--003.png';
import moonPhaseNeg004 from '@/images/moons/MoonPhase--004.png';
import moonPhaseNeg005 from '@/images/moons/MoonPhase--005.png';
import moonPhaseNeg006 from '@/images/moons/MoonPhase--006.png';
import moonPhaseNeg007 from '@/images/moons/MoonPhase--007.png';
import moonPhaseNeg008 from '@/images/moons/MoonPhase--008.png';
import moonPhaseNeg009 from '@/images/moons/MoonPhase--009.png';
import moonPhaseNeg010 from '@/images/moons/MoonPhase--010.png';
import moonPhaseNeg011 from '@/images/moons/MoonPhase--011.png';
import moonPhaseNeg012 from '@/images/moons/MoonPhase--012.png';
import moonPhaseNeg013 from '@/images/moons/MoonPhase--013.png';
import moonPhaseNeg014 from '@/images/moons/MoonPhase--014.png';
import moonPhaseNeg015 from '@/images/moons/MoonPhase--015.png';
import moonPhaseNeg016 from '@/images/moons/MoonPhase--016.png';
import moonPhaseNeg017 from '@/images/moons/MoonPhase--017.png';
import moonPhaseNeg018 from '@/images/moons/MoonPhase--018.png';
import moonPhaseNeg019 from '@/images/moons/MoonPhase--019.png';
import moonPhaseNeg020 from '@/images/moons/MoonPhase--020.png';
import moonPhaseNeg021 from '@/images/moons/MoonPhase--021.png';
import moonPhaseNeg022 from '@/images/moons/MoonPhase--022.png';
import moonPhaseNeg023 from '@/images/moons/MoonPhase--023.png';
import moonPhaseNeg024 from '@/images/moons/MoonPhase--024.png';
import moonPhaseNeg025 from '@/images/moons/MoonPhase--025.png';
import moonPhaseNeg026 from '@/images/moons/MoonPhase--026.png';
import moonPhaseNeg027 from '@/images/moons/MoonPhase--027.png';
import moonPhaseNeg028 from '@/images/moons/MoonPhase--028.png';


// Function to determine moon image based on illumination percentage (-100 to 100)
// const getMoonImageByIllumination = (illumination) => {
  
  
//   const isZeroIllumination = illumination === 0 || 
//     illumination === -0 ||
//     Math.abs(illumination) < 0.05;

//   // Handle edge case of zero illumination
//   if (isZeroIllumination) {
//     return newMoonImg;
//   }
  
//   // Get absolute value for threshold checks
//   const absIllumination = Math.abs(illumination);
//   // Determine if waxing (positive) or waning (negative)
//   const isWaxing = illumination > 0;
  
//   if (absIllumination < 5) return isWaxing ? waxingCrescentImg5 : waningCrescentImg5;
//   if (absIllumination < 45) return isWaxing ? waxingCrescentImg : waningCrescentImg;
//   if (absIllumination < 55) return isWaxing ? firstQuarterImg : lastQuarterImg;
//   if (absIllumination < 95) return isWaxing ? waxingGibbousImg : waningGibbousImg;
//   return fullMoonImg;
// };

const getMoonImageByIllumination = (illumination) => {
  // Handle edge case of zero illumination
  if (Math.abs(illumination) < 0.5) {
    return moonPhase000;
  }
  
  // Normalize illumination to 0-28 range for positive values (waxing)
  // and -1 to -28 for negative values (waning)
  if (illumination > 0) {
    // Waxing phases (positive illumination)
    const phaseIndex = 1 + Math.round((illumination / 100) * 27);
    
    switch (phaseIndex) {
      case 1: return moonPhase001;
      case 2: return moonPhase002;
      case 3: return moonPhase003;
      case 4: return moonPhase004;
      case 5: return moonPhase005;
      case 6: return moonPhase006;
      case 7: return moonPhase007;
      case 8: return moonPhase008;
      case 9: return moonPhase009;
      case 10: return moonPhase010;
      case 11: return moonPhase011;
      case 12: return moonPhase012;
      case 13: return moonPhase013;
      case 14: return moonPhase014;
      case 15: return moonPhase015;
      case 16: return moonPhase016;
      case 17: return moonPhase017;
      case 18: return moonPhase018;
      case 19: return moonPhase019;
      case 20: return moonPhase020;
      case 21: return moonPhase021;
      case 22: return moonPhase022;
      case 23: return moonPhase023;
      case 24: return moonPhase024;
      case 25: return moonPhase025;
      case 26: return moonPhase026;
      case 27: return moonPhase027;
      case 28: return moonPhase028;
      default: return moonPhase014; // Default to full moon
    }
  } else {
    // Waning phases (negative illumination)
    const phaseIndex = 28 - Math.round((Math.abs(illumination) / 100) * 27);
    
    switch (phaseIndex) {
      case 1: return moonPhaseNeg001;
      case 2: return moonPhaseNeg002;
      case 3: return moonPhaseNeg003;
      case 4: return moonPhaseNeg004;
      case 5: return moonPhaseNeg005;
      case 6: return moonPhaseNeg006;
      case 7: return moonPhaseNeg007;
      case 8: return moonPhaseNeg008;
      case 9: return moonPhaseNeg009;
      case 10: return moonPhaseNeg010;
      case 11: return moonPhaseNeg011;
      case 12: return moonPhaseNeg012;
      case 13: return moonPhaseNeg013;
      case 14: return moonPhaseNeg014;
      case 15: return moonPhaseNeg015;
      case 16: return moonPhaseNeg016;
      case 17: return moonPhaseNeg017;
      case 18: return moonPhaseNeg018;
      case 19: return moonPhaseNeg019;
      case 20: return moonPhaseNeg020;
      case 21: return moonPhaseNeg021;
      case 22: return moonPhaseNeg022;
      case 23: return moonPhaseNeg023;
      case 24: return moonPhaseNeg024;
      case 25: return moonPhaseNeg025;
      case 26: return moonPhaseNeg026;
      case 27: return moonPhaseNeg027;
      case 28: return moonPhaseNeg028;
      default: return moonPhaseNeg014; // Default to full moon
    }
  }
};

// Determine moon phase name based on illumination percentage
const getMoonPhaseName = (illumination) => {
  if (Math.abs(illumination) < 0.05) return 'New Moon';
  
  // If illumination is negative, it's a waning phase
  if (illumination < 0) {
    const absIllumination = Math.abs(illumination);
    if (absIllumination < 45) return 'Waning Crescent';
    if (absIllumination < 55) return 'Last Quarter';
    if (absIllumination < 95) return 'Waning Gibbous';
    return 'Full Moon';
  } else {
    // Positive illumination means waxing phase
    if (illumination < 45) return 'Waxing Crescent';
    if (illumination < 55) return 'First Quarter';
    if (illumination < 95) return 'Waxing Gibbous';
    return 'Full Moon';
  }
};

export default function MoonPhaseInfo() {
  const [moonData, setMoonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoonData = async () => {
      try {
        const response = await fetch('/api/moon-data');
        
        if (!response.ok) {
          throw new Error('Failed to fetch moon data');
        }
        
        const data = await response.json();
        console.log(data);
        setMoonData(data);
      } catch (err) {
        console.error('Error fetching moon data:', err);
        setError('Unable to load moon phase information');
      } finally {
        setLoading(false);
      }
    };

    fetchMoonData();
  }, []);

  if (loading) {
    return <div className="text-white/70 text-sm text-center mt-2">Loading moon data...</div>;
  }

  if (error) {
    return <div className="text-white/70 text-sm text-center mt-2">{error}</div>;
  }

  // Format the moon phase to be more readable
  const formatMoonPhase = (phase) => {
    if (!phase) return 'Unknown Phase';
    
    // Convert WAXING_GIBBOUS to "Waxing Gibbous"
    return phase
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // const isZeroIllumination = moonData?.moon_illumination_percentage === 0 || 
  //   moonData?.moon_illumination_percentage === -0 ||
  //   Math.abs(moonData?.moon_illumination_percentage) < 0.01;


  //   const moonImage = isZeroIllumination
  //     ? zeroCrescentImg 
  //     : (moonPhaseImages[formattedPhase] || fullMoonImg);

  // Get the appropriate moon image based on illumination
  const formattedPhase = moonData?.moon_phase ? formatMoonPhase(moonData.moon_phase) : 'Unknown Phase';
  
  // Get the appropriate moon image based on illumination
  const illumination = moonData?.moon_illumination_percentage || 0;
  const moonImage = getMoonImageByIllumination(illumination);
  
  // Get the phase name based on illumination
  const phaseName = getMoonPhaseName(illumination);
  
  return (
    <div className="text-white text-center mt-3 mb-4">
      <div className="w-80 h-80 relative mx-auto mb-3">
        <Image 
          src={moonImage} 
          alt={formattedPhase}
          fill
          className="object-contain rounded-full filter drop-shadow-lg"
          style={{ 
            filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.9))',
            transition: 'all 0.3s ease'
          }}
          priority
        />
      </div>
      {/* <p className="font-semibold">{phaseName}</p> */}
      <p className="text-sm mb-1">Moon Phase at Mill Creek (47.8601, -122.2043)</p>
      <p className="font-semibold">
        {moonData?.moon_illumination_percentage ? `${moonData.moon_illumination_percentage}% Illuminated` : ''}
      </p>      
    </div>
  );
}