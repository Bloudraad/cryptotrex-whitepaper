---
sidebar_position: 4
---

# Gameplay

At the core of the game, a battle is between at least 2 players (real players or bots) with each side having 3 nests: 2 side nests and a King's nest.
The goal of the game is to destroy more nests than your opponent when time runs out or getting an immediate win through destroying opponent's `King's nest`.

Play area will be divided into 2 sides on which each player can deploy their dinos on.
The deployed dinos will automatically move toward the nearest possible target to attack and move on to the next one once the previous one has been defeated.
To deploy a dino, players must use meat points (think mana) which replenish over time with the maximum cap of 10.

## PvE

Players can go on expedition to find wild dino nests to attack.
There will be multiple wild nests that can be found on the map when players start an expedition.
If the player choose to attack a nest, a battle will begin with potential rewards as below

| Outcome | $FOSSIL                                                             | Artifact       |
| ------- | ------------------------------------------------------------------- | -------------- |
| Win     | dynamic value based on opponent's deck score and circulating tokens | 1 random piece |
| Loss    | 0                                                                   | None           |

Battle rewards per win will be based on multiple factors:

- Thresholding Mechanism, see [here](./allocations_p2e#thresholding-mechanism)
- Opponent's Deck score, the stronger the opponent is, the bigger rewards players get

## PvP

If a player choose to have a PvP battle, they will be matched with another player who has a similar deck score.
Player have to stake some $FOSSIL to play PvP mode, which will contribute towards the reward outcome of the battle.
The required stake amount will be determined automatically using a quadratic function of the player's deck score.

| Outcome | $FOSSIL                 | Artifact            |
| ------- | ----------------------- | ------------------- |
| Win     | twice the staked amount | 1 to 2 random piece |
| Loss    | -(staked amount)        | None                |

## Tournaments

There will be organised tournaments with prize pools from collected fees and possible sponsorships.
