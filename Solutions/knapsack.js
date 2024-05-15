function maxLoot(capacity, items) {
    const n = items.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
    printTable(dp);
    for (let i = 1; i <= n; i++) {
      const [item, weight, value] = items[i - 1];
      for (let w = 1; w <= capacity; w++) {
        if (weight <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    const maxValue = dp[n][capacity];
    const selectedItems = [];
    let i = n;
    let w = capacity;
    while (i > 0 && w > 0) {
      if (dp[i][w] !== dp[i - 1][w]) {
        selectedItems.push(items[i - 1][0]);
        w -= items[i - 1][1];
      }
      i--;
    }
  
    return [maxValue, selectedItems.reverse(), dp];
  }
  
  // Example usage:
  const items = [
    ["Diamond necklace", 2, 50000],
    ["Antique gold pocket watch", 1, 8000],
    ["Rare vintage wine collection", 20, 15000],
    ["Original Picasso painting", 6, 200000],
    ["Emerald-encrusted bracelet", 1, 25000],
    ["Sculpted marble statue", 50, 30000],
    ["Signed first edition books", 10, 12000],
    ["Precious ancient coins", 3, 18000],
    ["Designer handbags", 4, 6000],
    ["High-end electronics", 8, 10000],
    ["Expensive leather jackets", 6, 4000],
    ["Rare sports memorabilia", 3, 7000],
    ["Handcrafted silk rug", 15, 9000],
    ["Limited edition designer shoes", 2, 3000],
    ["Platinum cufflinks", 1, 5000],
    ["Valuable postage stamp collection", 2, 14000],
    ["Vintage movie posters", 3, 2500],
    ["Collectible action figures", 5, 1500],
    ["Fine china dining set", 12, 8000],
    ["Swarovski crystal figurines", 7, 4500],
  ];

  const printTable = (table) => {
    for (let i = 0; i < table.length; i++) {
        let row = "";
        for (let j = 0; j < table[i].length; j++) {
            row += table[i][j] + " ";
        }
        console.log(row);
    }
  }
  
  const capacity = 30;
  const [maxValue, selectedItems, dp] = maxLoot(capacity, items);
  
  console.log("Maximum loot value:", maxValue);
  console.log("Selected items:", selectedItems);
  printTable(dp);