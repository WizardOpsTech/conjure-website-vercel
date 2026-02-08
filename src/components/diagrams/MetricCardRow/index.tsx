"use client";

import classNames from 'classnames';
import { useDiagramTheme } from '../useTheme';
import { resolveColor, textColor } from '../color-map';
import type { MetricData } from '../types';
import s from './MetricCardRow.module.css';

interface MetricCardRowProps {
  metrics: MetricData[];
  className?: string;
}

export default function MetricCardRow({ metrics, className }: MetricCardRowProps) {
  const theme = useDiagramTheme();
  const txtColor = textColor(theme);

  const gridStyle = {
    gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
  };

  return (
    <div className={classNames(s.grid, className)} style={gridStyle}>
      {metrics.map((metric, idx) => {
        const borderColor = metric.color ? resolveColor(metric.color, theme) : resolveColor('primary', theme);
        return (
          <div
            key={idx}
            className={s.card}
            style={{ borderColor, color: txtColor }}
          >
            <div className={s.value} style={{ color: borderColor }}>{metric.value}</div>
            <div className={s.label}>{metric.label}</div>
          </div>
        );
      })}
    </div>
  );
}
