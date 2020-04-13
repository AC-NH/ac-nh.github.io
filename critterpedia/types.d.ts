declare module Critterpedia {
  type ActiveHours = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
  type Seasonality = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  type PeriodType = 'activeHours' | 'seasonality'
  type Period<T> = { start: T, end: T }
  type Hemisphere = 'northern' | 'southern'
  type Hemispheres<T> = { northern: T, southern: T }

  type InsectLocation = 'Flying' | 'Flying bv hybrid flowers' | 'Flying by purple flowers' | 'Flying by lights' | 'On trees' | 'On ground' | 'Underground' | 'On flowers' | 'On white flowers' | 'Falls from shaking trees' | 'Pond' | 'Pond and river' | 'On tree stumps' | 'On palm trees' | 'Pushing snowballs' | 'On coconut trees' | 'Near trees, disguised as furniture leaf' | 'On rotten food' | 'Beach' | 'On rocks at beach' | 'On trash items' | 'On villagers' | 'On rocks (raining)' | 'Hit rocks'
  type FishLocation = 'River' | 'Pond' | 'River (Clifftop)' | 'River (Mouth)' | 'Sea' | 'Pier' | 'River (Rainy Days)'
  type FishSize = 'Smallest' | 'Small' | 'Medium' | 'Large' | 'Largest' | 'X Large'

  interface Critter {
    name: string,
    location: InsectLocation | FishLocation,
    value: number,
    activeHours: Array<Period<ActiveHours>>,
    seasonality: Hemispheres<Array<Period<Seasonality>>>
  }

  interface Insect extends Critter {
    insectNumber: number,
    location: InsectLocation,
  }

  interface Fish extends Critter {
    fishNumber: number,
    location: FishLocation,
    size: FishSize,
  }
}

declare module 'insects.json' {
  const value: Array<Critterpedia.Insect>
  export default value
}

declare module 'fish.json' {
  const value: Array<Critterpedia.Fish>
  export default value
}
