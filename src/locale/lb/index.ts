import type { Locale } from '../types.js'
import { formatDistance } from './_lib/formatDistance/index.js'
import { formatLong } from './_lib/formatLong/index.js'
import { formatRelative } from './_lib/formatRelative/index.js'
import { localize } from './_lib/localize/index.js'
import { match } from './_lib/match/index.js'

/**
 * @category Locales
 * @summary Luxembourgish locale.
 * @language Luxembourgish
 * @iso-639-2 ltz
 * @author Daniel Waxweiler [@dwaxweiler](https://github.com/dwaxweiler)
 */
export const lb: Locale = {
  code: 'lb',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}
