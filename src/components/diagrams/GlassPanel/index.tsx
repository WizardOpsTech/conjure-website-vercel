"use client";

import classNames from 'classnames';
import { useDiagramTheme } from '../useTheme';
import { resolveColor } from '../color-map';
import s from './GlassPanel.module.css';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
  const theme = useDiagramTheme();
  const isDark = theme === 'dark';
  const borderColor = resolveColor('primary', theme);

  const panelStyle = {
    backgroundColor: isDark ? 'rgba(14,14,20,0.6)' : 'rgba(255,255,255,0.6)',
    borderColor: isDark ? `${borderColor}4D` : `${borderColor}33`,
  };

  return (
    <div className={classNames(s.panel, className)} style={panelStyle}>
      {children}
    </div>
  );
}
