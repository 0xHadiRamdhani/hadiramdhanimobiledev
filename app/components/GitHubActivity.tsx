"use client";

import { ActivityCalendar } from "react-activity-calendar";
import { Card } from "./ui/Card";
import { useEffect, useState } from "react";
import { Github } from "lucide-react";

export function GitHubActivity() {
    const [data, setData] = useState<any[]>([]); // simplified type
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://github-contributions-api.jogruber.de/v4/0xHadiRamdhani?y=last");
                const json = await res.json();
                // The API returns { contributions: [...] } which works with the component
                if (json.contributions) {
                    setData(json.contributions);
                }
            } catch (error) {
                console.error("Failed to fetch GitHub contributions:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Theme colors: cyan for varying levels of activity
    const theme = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'], // Standard GitHub colors
    };

    // Custom theme matching the portfolio
    // levels: 0 (bg), 1, 2, 3, 4 (max)
    const customTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#121212', '#1a2e35', '#2a4c54', '#3d7e8a', '#00f7ff'], // Dark to Neon Cyan
    };

    if (loading) {
        return (
            <Card className="p-6 bg-black/50 backdrop-blur-md border-white/10 w-full overflow-hidden min-h-[200px] flex items-center justify-center" variant="liquid">
                <span className="text-gray-500 animate-pulse">Loading contributions...</span>
            </Card>
        );
    }

    return (
        <Card className="p-6 bg-black/50 backdrop-blur-md border-white/10 w-full overflow-hidden" variant="liquid">
            <div className="flex items-center gap-3 mb-6">
                <Github className="text-neon-cyan" size={24} />
                <h3 className="text-xl font-bold text-white">GitHub Contributions</h3>
                <span className="text-xs font-mono text-gray-500 ml-auto">@0xHadiRamdhani</span>
            </div>

            <div className="flex justify-center w-full overflow-x-auto pb-2">
                <ActivityCalendar
                    data={data}
                    colorScheme="dark"
                    theme={customTheme}
                    fontSize={12}
                    blockSize={12}
                    blockMargin={5}
                />
            </div>
        </Card>
    );
}
