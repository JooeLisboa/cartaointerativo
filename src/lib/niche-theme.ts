import { glowByAccent } from './gradients';

export const getNicheGlow = (accent: string) => glowByAccent[accent] ?? glowByAccent.cyan;
