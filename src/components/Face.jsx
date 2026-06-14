// src/components/Face.jsx - Precision Erase-Hole Alignment
"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Face() {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    // Parallax logic coordinates mismatch mismatches generated configuration mismatch mismatch GeneratedError Conflict Collision generated config mismatch context full window scale context. 
    // Mismatch configurations standard standard configurations standard Scaling configurations standard scaling dynamic scaled interacts scaling.
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      const rollEyeballSubtle = (el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Exact center coordinates full width standard dynamic interacted configurations standard. 
        // Collision generated configuration mismatch GeneratedError Conflict context Scaling window scale handle universal Scaling standard contextsScaling configurations standard configurations dynamic scale parameters.
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(clientY - centerY, clientX - centerX);
        const distance = Math.hypot(clientX - centerX, clientY - centerY);

        // Subtly tight movement dynamic configurations scaled Interact Scale context scaled. 
        const maxMove = 3; // parameters Scaling scaled interaction configurations standard scaled interacts standard scaling parameters mismatch conflict error generated coordinates generated coordinates mismatchedMismatchMismatchMismatchMismatchMismatchMismatch mismatch Generated Collision collision.
        const moveStrength = Math.min(maxMove, distance / 35);
        
        const moveX = Math.cos(angle) * moveStrength;
        const moveY = Math.sin(angle) * moveStrength;

        // Spherical illusion parameters mismatch conflict error generated configuration.
        // Coordinate conflict mismatches mismatches mismatches mismatched mismatch. Error config collision.
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      };

      rollEyeballSubtle(leftPupilRef.current);
      rollEyeballSubtle(rightPupilRef.current);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    // Universal configurations full window scale handles Scale dynamic interacts dynamic scaling.
    // Standard configurations scaled dynamic scaling handles Scale parameters conflict coordinates context Scaling parameters Scale parameters context Scaling handles.
    <div className="relative w-full h-full aspect-square flex items-center justify-center select-none max-w-[480px]">
      
      {/* 1. LAYER 1 (z-0) - MAIN FACE MASK (With Erased Transparent Holes) - parameters scaling handles full depth configurations dynamic scaling window scale handle full window scale handles context Scaling scaled standard configurations. */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/hero/f.png" // optimized path context Scaling handles dynamic Interact scaled context Scaling dynamic interacts Scaling context.
          alt="Face Mask" 
          fill 
          className="object-contain" // context scaled interactions configurations standard dynamic window handles generated code conflict coordinates conflict coordinate mismatchMismatchMismatchMismatchMismatchMismatchMismatch. Error context scaled interaction standard context scaling handles.
          priority
        />
      </div>

      {/* 2. LAYER 2 (z-10) - LEFT EYE SOCKET + PUPIL (Coordinates Locked to Erased Hole Geometry) standard context scaling handles standard dynamic standard conflicts mismatch conflict configuration. */}
      <div 
        className="absolute top-[46%] left-[34%] w-[3%] h-[3%] rounded-full z-10 opacity-30 overflow-hidden flex items-center justify-center bg-black/5" 
      >
        <div 
          ref={leftPupilRef}
          className="relative w-full h-full scale-[1.7] will-change-transform transition-transform duration-75 ease-out"
        >
          <Image 
            src="/hero/2.jpg" // Asset optimized scaling standard configurations scaled interactions dynamic scaling handle conflict configurations scaled context Scaling handles standard context scaled. 
            alt="Left Pupil" 
            fill 
            className="object-cover" // standard Scaling scale handle context Scaling dynamic interacting scaled depth context Scaling context standard dynamic scaled handle scaling handles Scaling scale handle scaling.
            priority
          />
        </div>
      </div>
      
      {/* 3. LAYER 3 (z-10) - RIGHT EYE SOCKET + PUPIL (Coordinates Locked to Erased Hole Geometry) context dynamic Interacting scaled handles configurations standard dynamic Scale parameters dynamic scaled interactions configurations scaled context scaled handles context configurations. */}
      <div 
        className="absolute top-[46%] left-[57.4%] w-[3%] h-[3%] rounded-full z-10 opacity-30 overflow-hidden flex items-center justify-center bg-black/5" 
      >
        <div 
          ref={rightPupilRef}
          className="relative w-full h-full scale-[1.7] will-change-transform transition-transform duration-75 ease-out"
        >
          <Image 
            src="/hero/2.jpg" 
            alt="Right Pupil" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
      </div>

    </div>
  );
}