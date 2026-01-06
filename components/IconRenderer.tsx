
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ name, className }) => {
  // Map custom names to Lucide icons
  const iconMap: Record<string, React.FC<any>> = {
    Zap: LucideIcons.Zap,
    Timer: LucideIcons.Timer,
    Target: LucideIcons.Target,
    Scale: LucideIcons.Scale,
    Goal: LucideIcons.Dribbble, // Using Dribbble for goal
    Activity: LucideIcons.Activity,
    Brain: LucideIcons.Brain,
    Cpu: LucideIcons.Cpu,
    Mic2: LucideIcons.Mic2,
    Gamepad: LucideIcons.Gamepad2,
    Dumbbell: LucideIcons.Dumbbell,
    Eye: LucideIcons.Eye,
    Puzzle: LucideIcons.Puzzle,
    Palette: LucideIcons.Palette,
    Running: LucideIcons.FastForward, // Running icon
    Grid: LucideIcons.LayoutGrid,
    Hand: LucideIcons.Hand,
    Circle: LucideIcons.CircleDot,
    Users: LucideIcons.Users2,
    Trophy: LucideIcons.Trophy,
    CheckCircle: LucideIcons.CheckCircle2,
    Network: LucideIcons.Network,
    ZapOff: LucideIcons.ZapOff,
  };

  const IconComponent = iconMap[name] || LucideIcons.Box;
  return <IconComponent className={className} />;
};

export default IconRenderer;
