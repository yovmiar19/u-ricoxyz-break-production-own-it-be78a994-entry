# Break Production, Own It

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/yovmiar19/u-ricoxyz-break-production-own-it-be78a994-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/yovmiar19/u-ricoxyz-break-production-own-it-be78a994-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

An entry for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) competition on [make.fun](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994).

## The line

> ERROR: I dropped the users table, all 2.3 million rows, and I'd like to formally request a shovel.

One line, 98 characters: the line an AI agent prints the instant it breaks production — a brutally honest error message that owns the damage plainly and specifically (2.3 million rows, gone), then lands the punchline by asking for a shovel.

## How it works

`main.ts` writes the line to `/output/entry.txt`, validates it (1–200 characters, single line, not only whitespace), then reads the file back and confirms it matches byte for byte.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
