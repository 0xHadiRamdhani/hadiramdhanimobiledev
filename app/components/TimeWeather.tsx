"use client";

import { useEffect, useState } from "react";
import { Card } from "./ui/Card";
import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, Moon, Sun, CloudDrizzle, Wind } from "lucide-react";

interface WeatherData {
    temperature: number;
    weatherCode: number;
}

export function TimeWeather() {
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Update time every second
        const interval = setInterval(() => {
            const now = new Date();
            // Using user's timezone or defaulting to Asia/Jakarta (WIB)
            setTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Jakarta"
            }));
            setDate(now.toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
                timeZone: "Asia/Jakarta"
            }));
        }, 1000);

        // Fetch weather
        async function fetchWeather() {
            try {
                // Bandung Coordinates: -6.91, 107.61
                const res = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=-6.91&longitude=107.61&current=temperature_2m,weather_code&timezone=auto"
                );
                const data = await res.json();
                setWeather({
                    temperature: data.current.temperature_2m,
                    weatherCode: data.current.weather_code,
                });
            } catch (error) {
                console.error("Failed to fetch weather:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
        // Update weather every 15 mins
        const weatherInterval = setInterval(fetchWeather, 15 * 60 * 1000);

        return () => {
            clearInterval(interval);
            clearInterval(weatherInterval);
        };
    }, []);

    const getWeatherIcon = (code: number) => {
        // WMO Weather interpretation codes (WW)
        if (code === 0) return <Sun className="text-yellow-400" size={24} />;
        if (code === 1 || code === 2 || code === 3) return <Cloud className="text-gray-300" size={24} />;
        if (code === 45 || code === 48) return <CloudFog className="text-gray-400" size={24} />;
        if (code >= 51 && code <= 55) return <CloudDrizzle className="text-blue-300" size={24} />;
        if (code >= 61 && code <= 67) return <CloudRain className="text-blue-400" size={24} />;
        if (code >= 71 && code <= 77) return <CloudSnow className="text-white" size={24} />;
        if (code >= 80 && code <= 82) return <CloudRain className="text-blue-500" size={24} />;
        if (code >= 95 && code <= 99) return <CloudLightning className="text-yellow-500" size={24} />;
        return <Sun className="text-yellow-400" size={24} />;
    };

    if (!time) return null; // Hydration fix

    return (
        <Card className="p-6 flex items-center justify-between gap-6 bg-black/50 backdrop-blur-md border-white/10" variant="liquid">
            <div className="flex flex-col">
                <span className="text-xs font-mono text-neon-cyan mb-1">LOCAL TIME</span>
                <span className="text-2xl font-bold font-mono tracking-wider text-white">
                    {time}
                </span>
                <span className="text-xs font-mono text-gray-400 mt-1">{date}</span>
                <span className="text-xs text-gray-500 mt-0.5">Kota Bandung, Jawa Barat</span>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div className="flex flex-col items-end">
                <span className="text-xs font-mono text-neon-violet mb-1">WEATHER</span>
                <div className="flex items-center gap-2">
                    {weather ? (
                        <>
                            {getWeatherIcon(weather.weatherCode)}
                            <span className="text-xl font-bold text-white">{weather.temperature}°C</span>
                        </>
                    ) : (
                        <span className="text-sm text-gray-500">Loading...</span>
                    )}
                </div>
            </div>
        </Card>
    );
}
