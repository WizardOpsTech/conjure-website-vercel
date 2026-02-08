"use client";

import classNames from 'classnames';
import { useDiagramTheme } from '../useTheme';
import { getIcon } from '../icon-map';
import { resolveColor, textColor } from '../color-map';
import type { ComparisonData } from '../types';
import s from './ComparisonGrid.module.css';

interface ComparisonGridProps {
  comparisons: ComparisonData[];
  className?: string;
}

export default function ComparisonGrid({ comparisons, className }: ComparisonGridProps) {
  const theme = useDiagramTheme();
  const txtColor = textColor(theme);

  return (
    <div className={classNames(s.grid, className)}>
      {comparisons.map((comp, idx) => {
        const borderColor = comp.color ? resolveColor(comp.color, theme) : resolveColor('primary', theme);
        const Icon = comp.icon ? getIcon(comp.icon) : null;

        return (
          <div key={idx} className={s.card} style={{ borderColor, color: txtColor }}>
            <div className={s.cardTitle} style={{ color: borderColor }}>
              {Icon && <Icon className={s.titleIcon} />}
              {comp.title}
            </div>
            {comp.subtitle && <div className={s.subtitle}>{comp.subtitle}</div>}
            <div className={s.itemList}>
              {comp.items.map((item, itemIdx) => (
                <div key={itemIdx} className={s.item}>
                  • {item}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
