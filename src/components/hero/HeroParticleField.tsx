import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

/**
 * GPU-driven particle field. Renders a Points cloud with additive
 * blending and a subtle drift. Cursor proximity creates a soft
 * repulsion. Reduced-motion users get a static dust.
 */
function Particles({ count = 1200 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3 - 1;
    }
    return arr;
  }, [count]);

  const velocities = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 0.002;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return arr;
  }, [count]);

  const mouse = useRef<{ x: number; y: number }>({ x: 999, y: 999 });
  useMemo(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    const m = meshRef.current;
    if (!m) return;
    const arr = (m.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] += velocities[i3];
      arr[i3 + 1] += velocities[i3 + 1];
      arr[i3 + 2] += velocities[i3 + 2];

      // Cursor repulsion (approximate in normalized space)
      const dx = arr[i3] / 4 - mouse.current.x;
      const dy = arr[i3 + 1] / 2.5 - mouse.current.y;
      const d = Math.hypot(dx, dy);
      if (d < 0.25) {
        const f = (1 - d / 0.25) * 0.02;
        arr[i3] += dx * f;
        arr[i3 + 1] += dy * f;
      }

      // Wrap edges
      if (arr[i3] > 4) arr[i3] = -4;
      if (arr[i3] < -4) arr[i3] = 4;
      if (arr[i3 + 1] > 2.5) arr[i3 + 1] = -2.5;
      if (arr[i3 + 1] < -2.5) arr[i3 + 1] = 2.5;
    }

    (m.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    m.rotation.z += 0.0003;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color={new THREE.Color('#d4a751')}
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function HeroParticleField() {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(212,167,81,0.10), transparent 50%), radial-gradient(circle at 70% 60%, rgba(74,154,143,0.06), transparent 55%)',
        }}
        aria-hidden="true"
      />
    );
  }
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <Particles count={Math.min(1200, Math.floor(window.innerWidth * window.innerHeight / 1200))} />
      </Canvas>
    </div>
  );
}
