"use client";

import { useEffect, useRef } from "react";

interface Bolt {
    x: number;
    y: number;
    segments: { x: number; y: number }[];
    life: number;
    color: string;
}

export function MouseParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const boltsRef = useRef<Bolt[]>([]);
    const lastPosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        resize();

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Helper to create lightning path
        const createLightningSegments = (x1: number, y1: number, x2: number, y2: number, roughness: number) => {
            const segments = [{ x: x1, y: y1 }];
            const dx = x2 - x1;
            const dy = y2 - y1;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const steps = Math.floor(dist / 10); // One segment every 10px

            let currentX = x1;
            let currentY = y1;

            for (let i = 1; i < steps; i++) {
                const progress = i / steps;
                const targetX = x1 + dx * progress;
                const targetY = y1 + dy * progress;

                // Add randomness perpendicular to the path
                const offset = (Math.random() - 0.5) * roughness;
                currentX = targetX + offset * (dy / dist) * 50;
                currentY = targetY + offset * (-dx / dist) * 50;

                segments.push({ x: currentX, y: currentY });
            }
            segments.push({ x: x2, y: y2 });
            return segments;
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            // Only spawn bolts if mouse moved significantly
            const distMoved = Math.hypot(
                mouseRef.current.x - lastPosRef.current.x,
                mouseRef.current.y - lastPosRef.current.y
            );

            if (distMoved > 5) {
                // Determine direction
                const angle = Math.atan2(
                    mouseRef.current.y - lastPosRef.current.y,
                    mouseRef.current.x - lastPosRef.current.x
                );

                // Spawn a bolt trailing behind
                const tailLength = Math.min(distMoved * 2, 100);
                const startX = mouseRef.current.x - Math.cos(angle) * tailLength;
                const startY = mouseRef.current.y - Math.sin(angle) * tailLength;

                const segments = createLightningSegments(
                    startX, startY,
                    mouseRef.current.x, mouseRef.current.y,
                    1.5 // Roughness
                );

                boltsRef.current.push({
                    x: mouseRef.current.x,
                    y: mouseRef.current.y,
                    segments: segments,
                    life: 1.0,
                    color: Math.random() > 0.5 ? "0, 243, 255" : "189, 0, 255" // Cyan or Violet
                });

                lastPosRef.current = { ...mouseRef.current };
            }

            // Update and draw bolts
            for (let i = 0; i < boltsRef.current.length; i++) {
                const bolt = boltsRef.current[i];
                bolt.life -= 0.1; // Lightning disappears quickly

                if (bolt.life > 0) {
                    ctx.beginPath();
                    ctx.moveTo(bolt.segments[0].x, bolt.segments[0].y);

                    for (let j = 1; j < bolt.segments.length; j++) {
                        // Jitter segments slightly every frame for "electric" feel
                        const jitterX = (Math.random() - 0.5) * 2;
                        const jitterY = (Math.random() - 0.5) * 2;
                        ctx.lineTo(bolt.segments[j].x + jitterX, bolt.segments[j].y + jitterY);
                    }

                    ctx.strokeStyle = `rgba(${bolt.color}, ${bolt.life})`;
                    ctx.lineWidth = 2;
                    ctx.shadowColor = `rgba(${bolt.color}, 0.8)`;
                    ctx.shadowBlur = 15;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                } else {
                    boltsRef.current.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
            style={{ mixBlendMode: "screen" }}
        />
    );
}
