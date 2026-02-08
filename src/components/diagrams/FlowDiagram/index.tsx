"use client";

import React from 'react';
import GlassPanel from '../GlassPanel';
import DiagramGroup from '../DiagramGroup';
import DiagramConnector from '../DiagramConnector';
import type { FlowDiagramData } from '../types';
import s from './FlowDiagram.module.css';

interface FlowDiagramProps {
  data: FlowDiagramData;
  className?: string;
}

export default function FlowDiagram({ data, className }: FlowDiagramProps) {
  const { columns, connectors } = data;
  const colTemplate = columns
    .map((_, i) => (i < columns.length - 1 ? '1fr auto' : '1fr'))
    .join(' ');

  const items: React.ReactNode[] = [];
  columns.forEach((group, i) => {
    items.push(<DiagramGroup key={group.id} {...group} />);
    if (i < connectors.length) {
      items.push(<DiagramConnector key={`connector-${i}`} {...connectors[i]} />);
    }
  });

  return (
    <GlassPanel className={className}>
      <div className={s.grid} style={{ gridTemplateColumns: colTemplate }}>
        {items}
      </div>
    </GlassPanel>
  );
}
