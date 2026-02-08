import type { FlowDiagramData } from '../types';

export const conjureArchitecture: FlowDiagramData = {
  columns: [
    {
      id: 'authors',
      title: 'Template Authors',
      variant: 'dashed',
      nodes: [
        { id: 'templates', label: 'Templates', icon: 'FileCode', color: 'secondary' },
        { id: 'bundles', label: 'Bundles', icon: 'Package', color: 'secondary' },
      ],
    },
    {
      id: 'conjure-repo',
      title: 'Conjure Repo',
      variant: 'solid',
      nodes: [
        { id: 'index', label: 'Template Index', icon: 'Database', color: 'primary' },
        { id: 'api', label: 'REST API', icon: 'Globe', color: 'primary' },
        { id: 'auth', label: 'Auth + RBAC', icon: 'Shield', color: 'primary', size: 'small' },
      ],
    },
    {
      id: 'consumers',
      title: 'Consumers',
      variant: 'dashed',
      nodes: [
        { id: 'cli', label: 'Conjure CLI', icon: 'Terminal', color: 'accent' },
        { id: 'ci', label: 'CI/CD Pipelines', icon: 'RefreshCw', color: 'accent' },
        { id: 'devs', label: 'Developers', icon: 'Code', color: 'accent' },
      ],
    },
  ],
  connectors: [
    { label: 'Publish' },
    { label: 'Consume' },
  ],
};
