# The Knapsack Problem

This month's kata is a variation of the Knapsack Problem. The Knapsack Problem is a well-known optimization problem from the field of combinitorial optimization. It has been studied for over a hundred years, long before the advent of digital computers.

[Wikipedia](https://en.wikipedia.org/wiki/Knapsack_problem) describes the problem as follows:

Given a set of items, each with a weight and a value, determine which items to include in the collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. 

The name, 'knapsack problem' derives from an informal understanding of the problem as  finding the maximum value of items that can be put into a knapsack with a limited capacity. Each item has a weight and a value, and the goal is to maximize the total value of items in the knapsack without exceeding its weight capacity.

## Real-world Application

The Knapsack Problem has applications in numerous areas of theoretical and practical computer science. Here are a few examples of where it has been and continues to be used:

1. Inventory Management: Scenario: Optimize the inventory levels for a retail store with limited storage space to maximize profits.
2. Portfolio Optimization: Scenario: Determine the optimal allocation of assets in an investment portfolio to maximize returns while minimizing risk.
3. Sequence Alignment in Bioinformatics: Scenario: Find the best alignment between DNA sequences to identify similarities and differences for genetic analysis.
4. Shortest Path Routing: Scenario: Determine the shortest path for a delivery truck to reach its destination in a city with multiple routes and traffic constraints.
5. Text Justification: Scenario: Optimize the formatting of a given text by adjusting the spacing between words to achieve visually appealing justification.
6. Resource Allocation: Scenario: Allocate limited resources (e.g., budget, staff) among various projects to maximize overall productivity and meet deadlines.
7. Longest Increasing Subsequence: Scenario: Identify the longest increasing subsequence in a series of stock prices to determine the best buying and selling points.
8. Edit Distance: Scenario: Determine the minimum number of operations required to transform one string into another for text correction or similarity comparison.
9. Optimal Matrix Chain Multiplication: Scenario: Find the most efficient way to multiply a chain of matrices to minimize the number of scalar multiplications in a scientific computing application.
10. Knapsack Problem in Resource Optimization: Scenario: Select a subset of items with maximum total value to include in a backpack with limited capacity for a hiking trip.

## Dynamic Programming

Notice that many of the problems listed in the real-world scenarios above are what in computer science are called [NP-complete](https://en.wikipedia.org/wiki/NP-completeness) problems. Informally, an NP-complete problem can be solved only by exhaustively generating all possible solutions and then choosing the best one. For real-world problems these algorithms would chug for thousands of years before finishing. 

Due to this limitation, we often use heuristics and cheap party tricks to generate solutions that are good, but not optimal. There is a way for many of these problems, though, for us to generate the optimal answer without the use of time travel: [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming).

Dynamic programming breaks problems down into simpler subproblems. It is solves each subproblem only once and stores the results to use in solving the remainder of the problem. This avoids redundant calculations.

[GeeksforGeeks](https://www.geeksforgeeks.org/) has a nice discussion of dynamic programming at https://www.geeksforgeeks.org/dynamic-programming/. It may be helpful in solving this month's kata.

## Solution Steps

To solve the Knapsack Problem using dynamic programming, you can follow these steps:

1. Define the problem:

Given a set of items, each with a weight and a value, and a knapsack with a maximum weight capacity, determine the maximum total value of items that can be put into the knapsack without exceeding its capacity.


3. Identify the subproblems:

Define a subproblem as the maximum value that can be obtained by considering a subset of items and a smaller knapsack capacity.
Let dp[i][w] represent the maximum value that can be obtained by considering items from index 0 to i and a knapsack capacity of w.


3. Define the base cases:

Set dp[0][w] = 0 for all w from 0 to the maximum knapsack capacity, as no items are considered.
Set dp[i][0] = 0 for all i from 0 to the number of items, as the knapsack capacity is 0.


4. Define the recurrence relation:

For each item i and knapsack capacity w, there are two options:

Include the item: If the weight of item i is less than or equal to w, you can include it and add its value to the maximum value obtained from the remaining capacity (w - weight of item i) and the subproblem considering items up to index i-1.
Exclude the item: Skip the item and consider the maximum value obtained from the subproblem considering items up to index i-1 and the same capacity w.


The recurrence relation can be written as:

    dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]]) if weight[i] <= w
    dp[i-1][w] if weight[i] > w



5. Fill the DP table:

Initialize a 2D DP table of size (number of items + 1) × (maximum knapsack capacity + 1) with base cases.
Iterate through the items from index 1 to the number of items.
For each item, iterate through the knapsack capacities from 1 to the maximum capacity.
Apply the recurrence relation to fill the DP table.


6. Retrieve the maximum value:

The maximum value that can be obtained will be stored in dp[number of items][maximum knapsack capacity].


7. Reconstruct the selected items (optional):

To determine which items are selected, you can backtrack from the final cell of the DP table.
If the value in the current cell is greater than the value in the cell above it, the current item is included in the knapsack.
Move to the cell corresponding to the remaining capacity and the previous item.
Repeat until you reach the first row or the first column of the DP table.



The time complexity of this dynamic programming solution is O(nW), where n is the number of items and W is the maximum knapsack capacity. The space complexity is also O(nW) to store the DP table.
Note that this solution assumes that the weights and values are integers. If they are floating-point numbers, you may need to modify the solution accordingly.

## Your Assignment

This month, your assignment is to help the world renown jewel-thief and cat-burglar, Ken "The Compiler" Baum as he plunders the home of famous billionaire, Matt Brewer. Matt became a billionaire by inventing "Invisible Socks" - a revolutionary fashion statement that took the world by storm, offering the comfort of socks without the unsightly appearance.

The Compiler has done extensive research on the Brewer Compound. He will be able to get by the security system, but there are dozens of guards moving about the mansion so he will need to get in and out quickly. He also needs to move fast, so he can't carry so much loot that it slows him down. Therefor he chooses a size small Benny the Dip Burglar Sack :tm: which is limited to carrying 30 pounds. With this relatively tiny capacity compared to Brewer's immense wealth, he must choose carefully which items to steal so he can maximize the value of his haul. Not surprisingly, he relies on his programming background to solve the problem.

Noting that this problem is the very definition of the knapsack problem, he chooses to use dynamic programming to ensure he can get the maximum value for the items he can fit in the bag.

The mansion contains the following items:


| Item                               | Weight (lbs) | Value ($) |
|------------------------------------|--------------|-----------|
| Diamond necklace                   | 2            | 50,000    |
| Antique gold pocket watch          | 1            | 8,000     |
| Rare vintage wine collection       | 20           | 15,000    |
| Original Picasso painting          | 6            | 200,000   |
| Emerald-encrusted bracelet         | 1            | 25,000    |
| Sculpted marble statue             | 50           | 30,000    |
| Signed first edition books         | 10           | 12,000    |
| Precious ancient coins             | 3            | 18,000    |
| Designer handbags                  | 4            | 6,000     |
| High-end electronics               | 8            | 10,000    |
| Expensive leather jackets          | 6            | 4,000     |
| Rare sports memorabilia            | 3            | 7,000     |
| Handcrafted silk rug               | 15           | 9,000     |
| Limited edition designer shoes     | 2            | 3,000     |
| Platinum cufflinks                 | 1            | 5,000     |
| Valuable postage stamp collection  | 2            | 14,000    |
| Vintage movie posters              | 3            | 2,500     |
| Collectible action figures         | 5            | 1,500     |
| Fine china dining set              | 12           | 8,000     |
| Swarovski crystal figurines        | 7            | 4,500     |

Your assignment is to use dynamic programming generate the solution matrix to this problem so that The Compiler knows which items to steal.

NOTE: Ignore size constraints and use the weight of the items only.



# C3ProjectTemplate

See solutions in different languages in the "Templates" directory. Once you decide which language you'd like to use,
simply open that directory in your favorite IDE, and you should be able to run the included unit tests "out of the box".

The recommended IDEs are as follows, but feel free to use whatever IDE you are comfortable with.

-   [C#](Templates/C%23) - [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs/community/)
-   [Java](Templates/Java) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [JavaScript](Templates/JavaScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
-   [Kotlin](Templates/Kotlin) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [Python](Templates/Python) - [Pycharm](https://www.jetbrains.com/pycharm/download/?section=windows) (Community Edition is fine)
-   [TypeScript](Templates/TypeScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
