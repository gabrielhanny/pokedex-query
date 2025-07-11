interface Stat {
  name: string;
  value: number;
}

interface PokemonStatsProps {
  stats: Stat[];
}

function formatStatLabel(name: string): string {
  switch (name.toLowerCase()) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defense';
    case 'special-attack':
      return 'Sp. Attack';
    case 'special-defense':
      return 'Sp. Defense';
    case 'speed':
      return 'Speed';
    default:
      return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

export default function PokemonStats({ stats }: PokemonStatsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 pt-0 pb-12'>
      <h2 className='text-xl font-semibold text-neutral-900 mb-6'>Stats</h2>
      <div className='flex flex-col gap-4'>
        {stats.map((stat) => (
          <div key={stat.name}>
            <div className='flex items-center gap-4 mb-1'>
              {/* Label */}
              <span className='w-28 text-sm font-medium text-neutral-700'>
                {formatStatLabel(stat.name)}
              </span>

              {/* Value */}
              <span className='text-sm font-semibold text-neutral-900 w-10 text-right'>
                {stat.value}
              </span>

              {/* Progress Bar */}
              <div className='flex-1 h-2 rounded-full bg-neutral-200 overflow-hidden'>
                <div
                  className={`h-full rounded-full ${
                    stat.value >= 70
                      ? 'bg-green-500'
                      : stat.value >= 40
                        ? 'bg-yellow-400'
                        : 'bg-red-500'
                  }`}
                  style={{ width: `${stat.value}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
