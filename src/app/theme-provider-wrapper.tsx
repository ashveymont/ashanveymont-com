'use client';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: "#0A0A0A",
    secondary: "#1A1A1A",
    accent: "#00D4FF",
    accentHover: "#00B8E6",
    text: "#FFFFFF",
    textSecondary: "#A0A0A0",
    background: "#000000",
    surface: "#111111",
    border: "#333333",
  },
  fonts: {
    primary: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
};

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
} 