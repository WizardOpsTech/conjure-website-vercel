"use client";

import classNames from 'classnames';
import { useDiagramTheme } from '../useTheme';
import { resolveColor, textColor } from '../color-map';
import DiagramNode from '../DiagramNode';
import type { DiagramGroupData, DiagramNodeData } from '../types';
import s from './DiagramGroup.module.css';

interface DiagramGroupProps extends DiagramGroupData {
  className?: string;
}

export default function DiagramGroup({
  title,
  variant = 'solid',
  nodes,
  footer,
  gridCols,
  className,
}: DiagramGroupProps) {
  const theme = useDiagramTheme();
  const isDark = theme === 'dark';
  const borderToken = variant === 'dashed' ? 'secondary' : 'primary';
  const borderColor = resolveColor(borderToken, theme);

  const renderNode = (node: DiagramNodeData) => {
    const hasChildren = node.children && node.children.length > 0;
    const childBorder = resolveColor(node.color ?? 'secondary', theme);

    return (
      <div key={node.id}>
        <DiagramNode {...node} />
        {hasChildren && (
          <div className={s.childrenWrapper} style={{ borderColor: childBorder }}>
            {node.children!.map((child) => (
              <DiagramNode key={child.id} {...child} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const gridStyle = gridCols
    ? { gridTemplateColumns: `repeat(${gridCols}, 1fr)` }
    : undefined;

  return (
    <div className={className}>
      {title && (
        <div className={s.title} style={{ color: borderColor }}>
          {title}
        </div>
      )}
      <div
        className={classNames(s.container, variant === 'dashed' && s.dashed)}
        style={{
          borderColor: isDark ? `${borderColor}4D` : `${borderColor}66`,
          backgroundColor: `${borderColor}0D`,
        }}
      >
        <div className={gridCols ? s.nodeGrid : s.nodeStack} style={gridStyle}>
          {nodes.map(renderNode)}
        </div>
        {footer && (
          <div
            className={s.footer}
            style={{
              borderColor: isDark ? `${borderColor}33` : `${borderColor}4D`,
              color: borderColor,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
