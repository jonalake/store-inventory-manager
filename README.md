# Store Inventory Manager - Guilded Rose

Deployed Link: https://jonalake.github.io/store-inventory-manager/

Welcome to the Gilded Rose. This web app controls our store inventory management system. The app allows you add new items and displays the current state of the inventory as of a certain date. All items have a `sell_in` value which denotes the number of days we have left to sell the item and a `quality` value which denotes how valuable the item is. At the end of each day our software lowers both values for every item by 1. Degradation is calculated based on the date the item was added.

## Parameters

* Once the `sell_in` days is less then zero, `quality` degrades twice as fast;
* The `quality` of an item can never be negative or increase beyond 50;
* The "Aged Brie" goods actually increases in `quality` each passing day;
* "Sulfuras" goods, being legendary items, never change their `sell_in` or `quality` values;
* "Backstage passes", like aged brie, increases in `quality` as its `sell_in` value decreases;
* Not just that: for "backstage passes" `quality` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but `quality` drops to 0 after the concert (`sell_in` 0 or lower).
* "Conjured" items degrade in quality twice as fast as normal items.
* An item can never have its `quality` increase above 50, however "Sulfuras" is a legendary item and as such its `quality` is 80 and it never alters.

Items do not have mixed categories (like a "Conjured Sulfuras / Backstage pass of Doom"), but the category name does not have to be in the first position (ie: "SuperUberSword, Conjured" or "Mighty Sulfuras Armour of Ultimate Awesomeness").

## Starting Inventory

|                   Item                    | Sell In | Quality |
|                    ---                    |   ---   |   ---   |
| +5 Dexterity Vest                         |    10   |    20   |
| Aged Brie                                 |     2   |     0   |
| Elixir of the Mongoose                    |     5   |     7   |
| Sulfuras, Hand of Ragnaros                |     0   |    80   |
| Backstage passes to a TAFKAL80ETC concert |    15   |    20   |
| Conjured Mana Cake                        |     3   |     6   |
