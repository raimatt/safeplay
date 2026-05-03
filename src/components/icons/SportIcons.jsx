import { Volleyball } from "lucide-react"

export function SafePlayLogo({ className = "" }) {
    return (
        <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="safeplay-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
                </linearGradient>
            </defs>
            <path
                d="M32 4 L56 12 V30 C56 46 44 56 32 60 C20 56 8 46 8 30 V12 Z"
                fill="url(#safeplay-grad)"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M22 28 L29 36 L43 22"
                fill="none"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:stroke-background"
            />
        </svg>
    );
}

export function BasketballIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2v20" />
            <path d="M5 5a14 14 0 0 1 14 14" />
            <path d="M19 5a14 14 0 0 0-14 14" />
        </svg>
    );
}

export function FootballIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M3.5 12c0-4.5 4-8.5 8.5-8.5s8.5 4 8.5 8.5-4 8.5-8.5 8.5S3.5 16.5 3.5 12Z" transform="rotate(-30 12 12)" />
            <path d="M9 12h6" transform="rotate(-30 12 12)" />
            <path d="M10 10v4" transform="rotate(-30 12 12)" />
            <path d="M12 10v4" transform="rotate(-30 12 12)" />
            <path d="M14 10v4" transform="rotate(-30 12 12)" />
        </svg>
    );
}

export function VolleyballIcon({ className = "" }) {
    return <Volleyball className={className} aria-hidden="true" />;
}

export function getSportIcon(sport) {
    const key = String(sport).toLowerCase();
    if (key === "basketball") return BasketballIcon;
    if (key === "football") return FootballIcon;
    if (key === "volleyball") return VolleyballIcon;
    return null;
}
