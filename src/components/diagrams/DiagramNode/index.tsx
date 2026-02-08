"use client";

import classNames from 'classnames';
import { useDiagramTheme } from '../useTheme';
import { getIcon } from '../icon-map';
import { resolveColor, textColor } from '../color-map';
import type { DiagramNodeData } from '../types';
import s from './DiagramNode.module.css';

interface DiagramNodeProps extends DiagramNodeData {
  className?: string;
}

export default function DiagramNode({
  label,
  icon,
  color = 'primary',
  size = 'default',
  className,
}: DiagramNodeProps) {
  const theme = useDiagramTheme();
  const isDark = theme === 'dark';
  const Icon = icon ? getIcon(icon) : null;
  const resolved = resolveColor(color, theme);
  const txtColor = textColor(theme);

  return (
    <div
      className={classNames(s.node, size === 'small' && s.nodeSmall, className)}
      style={{
        backgroundColor: isDark ? `${resolved}1A` : `${resolved}0D`,
        borderColor: isDark ? resolved : `${resolved}99`,
        color: txtColor,
      }}
    >
      {Icon && (
        <Icon
          className={classNames(
            s.icon,
            size === 'small' ? s.iconSmall : s.iconDefault
          )}
          style={{ color: resolved }}
        />
      )}
      <span className={s.label}>{label}</span>
    </div>
  );
}
