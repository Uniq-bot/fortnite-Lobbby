export function getRarityClasses(rarity) {
  const key = (rarity || '').toLowerCase();
  switch (key) {
    case 'legendary':
      return 'bg-gradient-to-br from-amber-500/30 to-amber-800/30 border-amber-400/40';
    case 'epic':
      return 'bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-800/30 border-fuchsia-400/40';
    case 'rare':
      return 'bg-gradient-to-br from-sky-500/30 to-sky-800/30 border-sky-400/40';
    case 'uncommon':
      return 'bg-gradient-to-br from-emerald-500/30 to-emerald-800/30 border-emerald-400/40';
    case 'common':
      return 'bg-gradient-to-br from-gray-500/30 to-gray-700/30 border-gray-500/30';
    default:
      return 'bg-gray-500/50 border-gray-500/30';
  }
}
