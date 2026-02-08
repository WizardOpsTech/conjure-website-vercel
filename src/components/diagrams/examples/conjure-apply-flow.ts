import type { FlowDiagramData } from '../types';

export const conjureApplyFlow: FlowDiagramData = {
  columns: [
    {
      id: 'spell-scroll',
      title: 'Your Spell Scroll',
      variant: 'dashed',
      nodes: [
        { id: 'conjure-yaml', label: 'conjure.yaml', icon: 'Code', color: 'secondary' },
        { id: 'template', label: 'template.tmpl', icon: 'FileCode', color: 'secondary' },
        { id: 'values', label: 'values.yaml', icon: 'Settings', color: 'secondary' },
      ],
      footer: 'Your Grimoire',
    },
    {
      id: 'conjure-realm',
      title: 'Conjure Realm',
      variant: 'solid',
      nodes: [
        {
          id: 'orchestrator',
          label: 'Orchestrator',
          icon: 'Zap',
          color: 'primary',
          children: [
            { id: 'parse', label: 'Parse template', icon: 'Code', color: 'primary', size: 'small' },
            { id: 'inject', label: 'Inject values', icon: 'Sparkles', color: 'primary', size: 'small' },
            { id: 'validate', label: 'Validate output', icon: 'Shield', color: 'primary', size: 'small' },
          ],
        },
      ],
    },
    {
      id: 'summoned',
      title: 'Summoned Artifacts',
      variant: 'solid',
      nodes: [
        { id: 'k8s', label: 'k8s-manifest.yaml', icon: 'Container', color: 'accent' },
        { id: 'terraform', label: 'main.tf', icon: 'Layers', color: 'accent' },
        { id: 'config', label: 'app-config.json', icon: 'Settings', color: 'accent' },
      ],
    },
  ],
  connectors: [
    { label: 'Cast' },
    { label: 'Summon' },
  ],
};
