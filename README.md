
# A minimax [Battlesnake](http://play.battlesnake.com) Written in JavaScript for Node.js

- First place in RBC AI snake competition 
- Gold rank in [Battlesnake Spring League](https://play.battlesnake.com/league/spring-league-2021/) 
- Utilizes a minimax algorithm with backtracking and alpha-beta pruning optimized for JavaScript

### Details and Replay of the Tournament:

- We are the pink snake (Royal Bank of Poogers), this recorded replay highlights the finals of the Battlesnake Competition.
- Interns spent 3 months total preparing their snake AI for this final tournament.
- Breakdown of game 1 finals can be seen here: https://www.twitch.tv/videos/989800618?t=01h09m42s 
- The tournament was a battle royale style, where only the top snake from each bracket can proceed.

<img width="697" alt="Screen Shot 2021-06-17 at 1 29 15 AM" src="https://user-images.githubusercontent.com/43080845/122336925-92d5b100-cf0b-11eb-8399-6fa6f030e905.png">

- In the above screenshot you can see the minimax algorithm taking effect and driving the enemy snake into the corner.

### Algorithm Visualization Tool

- Additionally, debugging heuristics of our minimax algorithm was difficult using only empirical results
- An algorithm decision tree visualizer was built to debug heuristics including A* and floodfill.
- Different flags were added to the decision tree to symbolize whether the path was taken, or if specific paths would lead to death / victory 
<img width="961" alt="Screen Shot 2021-06-17 at 2 11 05 AM" src="https://user-images.githubusercontent.com/43080845/122341279-4ab98d00-cf11-11eb-8965-9b6a43c59042.png">

- Each leaf in the minimax decision tree has the corresponding grid along with scores for each evaluated heuristic.
- Overall, the visualizer was extremely important in the outcome of our AI, as it greatly helped us debug our algorithm.
<img width="762" alt="Screen Shot 2021-06-17 at 2 14 20 AM" src="https://user-images.githubusercontent.com/43080845/122341657-bb60a980-cf11-11eb-8b6e-c1c973be6299.png">

