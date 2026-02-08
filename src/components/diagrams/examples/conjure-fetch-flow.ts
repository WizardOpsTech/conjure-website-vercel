import type { FlowDiagramData } from '../types';

export const conjureFetchFlow: FlowDiagramData = {
  columns: [
    {
      id: 'source',
      title: 'Remote Repository',
      variant: 'dashed',
      nodes: [
        { id: 'repo', label: 'conjure-templates/', icon: 'GitBranch', color: 'secondary' },
        { id: 'template', label: 'deployment.tmpl', icon: 'FileCode', color: 'secondary', size: 'small' },
        { id: 'values', label: 'values.yaml', icon: 'Code', color: 'secondary', size: 'small' },
      ],
    },
    {
      id: 'cli',
      title: 'Conjure CLI',
      variant: 'solid',
      nodes: [
        { id: 'fetch', label: 'conjure fetch', icon: 'Download', color: 'primary' },
        { id: 'render', label: 'conjure render', icon: 'Sparkles', color: 'primary' },
      ],
    },
    {
      id: 'output',
      title: 'Generated Config',
      variant: 'solid',
      nodes: [
        { id: 'config', label: 'deployment.yaml', icon: 'FileCode', color: 'accent' },
        { id: 'apply', label: 'Ready to apply', icon: 'CheckCircle', color: 'accent', size: 'small' },
      ],
    },
  ],
  connectors: [
    { label: 'Fetch' },
    { label: 'Cast' },
  ],
};
