"use client";

import classNames from 'classnames';
import { useDiagramTheme } from '../useTheme';
import { resolveColor, textColor } from '../color-map';
import type { StepData } from '../types';
import s from './StepTimeline.module.css';

interface StepTimelineProps {
  steps: StepData[];
  className?: string;
}

export default function StepTimeline({ steps, className }: StepTimelineProps) {
  const theme = useDiagramTheme();
  const txtColor = textColor(theme);
  const primaryColor = resolveColor('primary', theme);
  const accentColor = resolveColor('accent', theme);

  const getStatusSymbol = (status: StepData['status']) => {
    switch (status) {
      case 'complete':
        return '✓';
      case 'active':
        return '●';
      case 'pending':
        return '○';
    }
  };

  const getStatusColor = (status: StepData['status']) => {
    switch (status) {
      case 'complete':
        return accentColor;
      case 'active':
        return primaryColor;
      case 'pending':
        return txtColor;
    }
  };

  return (
    <div
      className={classNames(s.timeline, className)}
      style={{ borderColor: primaryColor, color: txtColor }}
    >
      {steps.map((step, idx) => {
        const statusColor = getStatusColor(step.status);
        const symbol = getStatusSymbol(step.status);
        return (
          <div key={idx} className={s.step}>
            <span style={{ color: statusColor }}>{symbol}</span> {step.label}
            {step.duration && <span style={{ opacity: 0.6 }}> ({step.duration})</span>}
          </div>
        );
      })}
    </div>
  );
}
