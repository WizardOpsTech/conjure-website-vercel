"use client";

import { ArrowRight } from 'lucide-react';
import { useDiagramTheme } from '../useTheme';
import { textColor, resolveColor } from '../color-map';
import type { DiagramConnectorData } from '../types';
import s from './DiagramConnector.module.css';

interface DiagramConnectorProps extends DiagramConnectorData {
  className?: string;
}

export default function DiagramConnector({
  label,
  icon = false,
  className,
}: DiagramConnectorProps) {
  const theme = useDiagramTheme();
  const txtColor = textColor(theme);
  const accentColor = resolveColor('accent', theme);

  if (icon || !label) {
    return (
      <div className={s.iconWrapper}>
        <ArrowRight className={s.arrowIcon} style={{ color: accentColor }} />
      </div>
    );
  }

  return (
    <div className={s.textWrapper}>
      <div className={s.textLabel} style={{ backgroundColor: accentColor, color: txtColor }}>
        {label}
      </div>
    </div>
  );
}
