type Theme = 'dark' | 'light';

const colors = {
  primary:   { dark: '#5A3FC0', light: '#A678E2' },
  secondary: { dark: '#3FE0D0', light: '#89F0D8' },
  accent:    { dark: '#FFD76B', light: '#FFE399' },
} as const;

const text = {
  dark: '#EAEAEA',
  light: '#3B2F2F',
};

const bg = {
  dark: '#0E0E14',
  light: '#F6F1E9',
};

export function resolveColor(color: 'primary' | 'secondary' | 'accent', theme: Theme): string {
  return colors[color][theme];
}

export function textColor(theme: Theme): string {
  return text[theme];
}

export function bgColor(theme: Theme): string {
  return bg[theme];
}
