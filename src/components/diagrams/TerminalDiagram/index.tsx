"use client";

import classNames from 'classnames';
import { useDiagramTheme } from '../useTheme';
import { textColor, bgColor } from '../color-map';
import type { StepData } from '../types';
import s from './TerminalDiagram.module.css';

interface TerminalDiagramProps {
  command: string;
  info?: string[];
  steps?: StepData[];
  className?: string;
}

export default function TerminalDiagram({ command, info, steps, className }: TerminalDiagramProps) {
  const theme = useDiagramTheme();
  const txtColor = textColor(theme);
  const backgroundColor = bgColor(theme);

  const terminalBg = theme === 'dark' ? '#16161A' : '#EBE6DD';

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

  return (
    <div
      className={classNames(s.terminal, className)}
      style={{ backgroundColor: terminalBg, color: txtColor }}
    >
      <div className={s.command}>$ {command}</div>
      {info && info.length > 0 && (
        <div className={s.infoList}>
          {info.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      )}
      {steps && steps.length > 0 && (
        <div>
          {steps.map((step, idx) => (
            <div key={idx}>
              {getStatusSymbol(step.status)} {step.label}
              {step.duration && ` (${step.duration})`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
