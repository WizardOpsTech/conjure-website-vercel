import {
  Code, Sparkles, Zap, Container, GitBranch, Layers, Server, Cloud,
  ArrowRight, Database, FileCode, Terminal, Globe, Shield, Settings,
  Package, Download, Upload, RefreshCw, CheckCircle, Eye,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code, Sparkles, Zap, Container, GitBranch, Layers, Server, Cloud,
  ArrowRight, Database, FileCode, Terminal, Globe, Shield, Settings,
  Package, Download, Upload, RefreshCw, CheckCircle, Eye,
};

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] ?? null;
}
