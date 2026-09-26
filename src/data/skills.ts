import { SkillItem, SoftwareItem } from '../types';

export const skills: SkillItem[] = [
  {
    name: "Video Editing",
    level: 95,
    iconName: "Film",
    description: "Frame-accurate pacing, multi-camera assembly, jump cuts, and high-retention storytelling.",
    tools: "Premiere Pro / CapCut"
  },
  {
    name: "Color Grading",
    level: 90,
    iconName: "Palette",
    description: "Cinematic teal & orange, film halation, tone curve balance, Rec.709 & Log workflows.",
    tools: "DaVinci Resolve / Lumetri"
  },
  {
    name: "Motion Graphics",
    level: 85,
    iconName: "Sparkles",
    description: "Custom lower thirds, title animations, kinetic text, mask transitions, and logo stings.",
    tools: "After Effects"
  },
  {
    name: "Sound Design",
    level: 80,
    iconName: "Volume2",
    description: "Layered whooshes, risers, impact sub-drops, ambient room tones, and beat-synced audio.",
    tools: "Fairlight / Audition"
  },
  {
    name: "Subtitles & Captions",
    level: 90,
    iconName: "Type",
    description: "Dynamic animated karaoke-style text popups, highlight words, and modern social typography.",
    tools: "CapCut Pro / After Effects"
  },
  {
    name: "Transitions",
    level: 88,
    iconName: "RefreshCw",
    description: "Whip pans, zoom punch-ins, match cuts, mask reveals, and speed ramps synced to kicks.",
    tools: "Custom Bezier Curves"
  }
];

export const softwareSuite: SoftwareItem[] = [
  {
    name: "CapCut Pro",
    level: 95,
    badge: "Viral Shorts & Fast Turnaround",
    color: "#00D4FF",
    role: "Speed ramps, dynamic auto-captions, vertical video optimization, and trending social audio sync."
  },
  {
    name: "Adobe After Effects",
    level: 85,
    badge: "VFX & Motion Graphics",
    color: "#9999FF",
    role: "Kinetic typography, tracking, spatial compositing, glowing title stings, and glitch effects."
  },
  {
    name: "Adobe Premiere Pro",
    level: 80,
    badge: "Cinematic Assembly",
    color: "#EA77FF",
    role: "Multi-track sequence editing, proxy workflows, beat matching, audio ducking, and master cuts."
  },
  {
    name: "DaVinci Resolve",
    level: 75,
    badge: "Color Science & Mastery",
    color: "#FF6B35",
    role: "Node-based primary and secondary color correction, film grain emulation, and dynamic range polish."
  }
];
