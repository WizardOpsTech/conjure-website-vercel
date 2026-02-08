import type { MetricData, StepData, ComparisonData } from '../types';

export const conjureMetrics: MetricData[] = [
  { value: '127', label: 'Active Spells', color: 'secondary' },
  { value: '99.7%', label: 'Success Rate', color: 'accent' },
  { value: '45', label: 'Templates', color: 'primary' },
  { value: '12', label: 'Active Authors', color: 'secondary' },
];

export const conjureDeploySteps: StepData[] = [
  { label: 'Fetch template', status: 'complete', duration: '1.2s' },
  { label: 'Parse variables', status: 'complete', duration: '0.3s' },
  { label: 'Render output', status: 'complete', duration: '0.8s' },
  { label: 'Validate schema', status: 'active' },
  { label: 'Write artifacts', status: 'pending' },
];

export const conjureComparison: ComparisonData[] = [
  {
    title: 'Self-Hosted',
    subtitle: 'Full control over your template repository',
    icon: 'Server',
    color: 'secondary',
    items: [
      'Deploy on your infrastructure',
      'Bring your own auth (OIDC)',
      'Air-gapped environments',
      'Unlimited templates',
    ],
  },
  {
    title: 'Conjure CLI',
    subtitle: 'Works standalone or with a repo',
    icon: 'Terminal',
    color: 'primary',
    items: [
      'Local template rendering',
      'Interactive variable prompts',
      'Git-based template sources',
      'CI/CD pipeline integration',
    ],
  },
];
