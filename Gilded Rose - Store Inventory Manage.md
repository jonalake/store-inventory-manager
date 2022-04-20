### Gilded Rose - Store Inventory Manager

Write a web app that allows you add new items and displays the current state of the inventory. Degradation should be calculated based on the date the item was added.

## Example Inventory:

|                   Item                    | Sell In | Quality |
|                    ---                    |   ---   |   ---   |
| +5 Dexterity Vest                         |    10   |    20   |
| Aged Brie                                 |     2   |     0   |
| Elixir of the Mongoose                    |     5   |     7   |
| Sulfuras, Hand of Ragnaros                |     0   |    80   |
| Backstage passes to a TAFKAL80ETC concert |    15   |    20   |
| Conjured Mana Cake                        |     3   |     6   |

Note: Category name may be not in the first position (ie: "SuperUberSword, Conjured" or "Mighty Sulfuras Armour of Ultimate Awesomeness") - need to parse the name of the item to determine its type

## Parameters
`sell_in` - days left to sell an item
`quality` - value of an item

At the end of each day, `sell_in` and `quality` decrease by 1
When `sell_in` < 0, `quality` decreases by 2
0 <= `quality` <= 50, except for legendary items

Special Item Categories:

"Aged Brie" - `quality` increases by 1 each day

"Sulfuras" - lengendary item, `sell_in` and `quality` do not decrease

"Backstage passes" - 
    `quality` increases by 1 when `sell_in` > 10
    `quality` increases by 2 when `sell_in` <= 10
    `quality` increases by 3 when `sell_in` <= 5
    `quality` = 0 when `sell_in` <= 0

"Conjured" - 
    `quality` decreases by 2 when `sell_in` >= 0
    `quality` decreases by 4 when `sell_in` < 0

Note: item cannot have mixed categories


[{
    item_name:
    quality:
    sell_in:
    date_added:
    category:
},{
    item_name:
    quality:
    sell_in:
    date_added:
    category:
}]