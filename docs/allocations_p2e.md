---
sidebar_position: 6
---

# Play to Earn

| Tokens Allocated | % of Max Supply |
| ---------------- | --------------- |
| 240,000,000      | 48%             |

30% of $FOSSIL tokens max supply will be allocated for Play to Earn rewards. 
Players will receive some `$FOSSIL` tokens after winning a battle.

The reason we chose a limited supply for something that could be played unlimited times is to combat inflation.
But limiting supply could possibly lead to a situation where rewards becomes 0 when all tokens have already been minted. To overcome this problem, we simply create features that requires burning of `$FOSSIL`.

As defined in [Tokenomics Overview](./tokenomics). There are multiple features that require burning your `$FOSSIL`,

- Leveling up Dinosaurs
- Reviving Dinosaurs
- Breeding Dinosaurs
- Archeological Excavations

Burned tokens will be allocated back to the Play to Earn token pool to replenish the pool.

### Thresholding Mechanism

However, even with a burning mechanism, we are still anticipating a case where tokens are not being burned as fast as they are minted, causing the same problem of no token left to mint.

To combat this problem, we borrow a part of this concept from our forefather Bitcoin called Halving where mining rewards are halved for every `n` number of blocks.

However, since we have a burning system, the mint rate would eventually be a lot slower than the burn rate if the rewards keep being halved.
Therefore, we adjust the Halving system to fit our usecase. Instead of halving every `n` number of blocks, we have dynamic reward calculation based on the amount of circulating tokens.

(numbers are not final, just for visualization purposes)

| Tokens in circulation | Battle Rewards |
| --------------------- | -------------- |
| 5,000,000             | 5              |
| 10,000,000            | 2.5            |
| 20,000,000            | 1.25           |
| 40,000,000            | 0.75           |
| 80,000,000            | 0.375          |
| 160,000,000           | 0.1875         |
| 320,000,000           | 0.09375        |
| 500,000,000           | 0.046875       |

This way, if we have 4 million tokens in circulation, players will receive 5 $FOSSIL per win, and if the circulating supply rises to 6 million tokens, players would get 2.5 $FOSSIL per win.
But if a lot of players are suddenly leveling up their Dinosaurs (burning some $FOSSIL) and reducing the circulating supply back to 4.5 million tokens, the reward per win would be back to 5 $FOSSIL.

We designed this mechanism with these things in mind:

- Inflation resistance
- Incentive to the community for spending the tokens
