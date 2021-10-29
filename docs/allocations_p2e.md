---
sidebar_position: 6
---

# Play to Earn


| Tokens Allocated | % of Max Supply |
| ---------------- | --------------- |
| 240 000 000      | 48%             |

30% of $FOSSIL token's max supply will be allocated for Play to Earn rewards. Players will receive some `$FOSSIL` token after completing a battle.

The reason we chose a limited supply for something that could be played unlimited times is that we want to combat inflation. But limiting supply could possibly rewards players 0 token when all tokens are already minted. So to overcome this problem, we simply create features that requires the burning of `$FOSSIL`.

As defined in [Tokenomics Overview](./tokenomics). There are multiple features that could burn your `$FOSSIL`, 
- Leveling up Dinosaurs
- Reviving Dinosaurs
- Breeding Dinosaurs
- Archeological Excavations

Burned tokens will be allocated back to the Play to Earn token pool, replenishing the pool.

### Thresholding Mechanism

However, even with burning mechanism. We are also anticipating the case where tokens are not being burned as fast as it is minted, causing the same problem of no token left to mint.

To combat this problem, we borrow a part of this concept from our forefather Bitcoin, which is the Halving system. Which halves the rewards for every `n` number of blocks.

But since we have a burning system, the mint rate would eventually be a lot slower than the burn rate if the rewards keep being halved.

Therefore, we adjust the Halving system to fit our usecase and we name it **Thresholding Mechanism**. So, instead of Halving every `n` number of blocks, we have a dynamic rewards based on the number of circulating tokens.

(numbers are not final, just for visualization purposes)

| Tokens in circulation | Battle Rewards |
| --------------------- | -------------- |
| 5 000 000             | 5              |
| 10 000 000            | 2.5            |
| 20 000 000            | 1.25           |
| 40 000 000            | 0.75           |
| 80 000 000            | 0.375          |
| 160 000 000           | 0.1875         |
| 320 000 000           | 0.09375        |
| 500 000 000           | 0.046875       |

This way, if we have 4 million tokens in circulation, players would receive 5 $FOSSIL per win, and if the circulating supply rises to say 6 million tokens, players would get 2.5 $FOSSIL per win. But if a lot of players are suddenly leveling up their Dinosaurs (burning some $FOSSIL) and reducing the circulating supply back to 4.5 million tokens, the rewards per win would be back to 5 $FOSSIL.

We designed this mechanism with these things in mind:
- Inflation Resistance
- Incentive to the community for spending the tokens


