import type { LucideIcon } from 'lucide-react';

export type DiagramColor = 'primary' | 'secondary' | 'accent';

export interface DiagramNodeData {
  id: string;
  label: string;
  icon?: string;
  color?: DiagramColor;
  size?: 'default' | 'small';
  children?: DiagramNodeData[];
}

export interface DiagramGroupData {
  id: string;
  title?: string;
  variant?: 'dashed' | 'solid';
  nodes: DiagramNodeData[];
  footer?: string;
  gridCols?: number;
}

export interface DiagramConnectorData {
  label?: string;
  icon?: boolean;
}

export interface FlowDiagramData {
  columns: DiagramGroupData[];
  connectors: DiagramConnectorData[];
}

export interface MetricData {
  value: string;
  label: string;
  color?: DiagramColor;
}

export interface StepData {
  label: string;
  status: 'complete' | 'active' | 'pending';
  duration?: string;
}

export interface ComparisonData {
  title: string;
  subtitle?: string;
  items: string[];
  color?: DiagramColor;
  icon?: string;
}
