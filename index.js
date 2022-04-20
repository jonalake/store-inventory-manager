const input = document.querySelector("#input")
const report = document.querySelector("#report")
const reportOuput = document.querySelector(".report")
const today = "2022-04-20"
let inventory = [{
    item_name: "+5 Dexterity Vest",
    sell_in: 3,
    quality: 20,
    date_added: today,
    category: "none",
}, {
    item_name: "Aged Brie",
    sell_in: 2,
    quality: 0,
    date_added: today,
    category: "Aged Brie",
}, {
    item_name: "Elixir of the Mongoose",
    sell_in: 5,
    quality: 7,
    date_added: today,
    category: "none",
}, {
    item_name: "Sulfuras, Hand of Ragnaros ",
    sell_in: 0,
    quality: 80,
    date_added: today,
    category: "Sulfuras",
}, {
    item_name: "Backstage passes to a TAFKAL80ETC concert",
    sell_in: 10,
    quality: 20,
    date_added: today,
    category: "Backstage passes",
}, {
    item_name: "Conjured Mana Cake",
    sell_in: 3,
    quality: 16,
    date_added: today,
    category: "Conjured",
}]

console.log(inventory)

input.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const item = {
        item_name: formData.get("item"),
        quality: +formData.get("quality"),
        sell_in: +formData.get("sell_in"),
        date_added: formData.get("date_added"),
        category: "none",
    }
    setCategory(item)
    qualityCheck(item)
    inventory = [...inventory, item]
    console.log(inventory)
    return inventory
})

report.addEventListener("submit", (event) => {
    event.preventDefault()
    const title = document.createElement("div")
    title.classList = "title"
    title.innerHTML = `
        <p>Item</p>
        <p>Sell In</p>
        <p>Quality</p>
    `
    reportOuput.replaceChildren(title)
    const formData = new FormData(event.target)
    const reportDate = `${formData.get("report_date")}`
    let items = _.cloneDeep(inventory)
    items.forEach(item => {
        const time = daysSinceAdded(reportDate, item)
        degrade(item, time)
        if (time >= 0) {
            reportOuput.append(createItemListing(item))
        }
    })
})

function setCategory(item) {
    if (item.item_name.includes("Aged Brie")) {
        item.category = "Aged Brie"
    } else if (item.item_name.includes("Sulfuras")) {
        item.category = "Sulfuras"
    } else if (item.item_name.includes("Backstage passes")) {
        item.category = "Backstage passes"
    } else if (item.item_name.includes("Conjured")) {
        item.category = "Conjured"
    }
    return item
}

function daysSinceAdded(reportDate, item) {
    return (new Date(`${reportDate}`) - new Date(`${item.date_added}`)) / 86400000
}

function degrade(item, time) {
    const sellBy = item.sell_in
    switch (item.category) {
        case "Sulfuras":
            break;
        case "Aged Brie":
            item.sell_in -= time
            item.quality += time
            break;
        case "Conjured":
            item.sell_in -= time
            if (item.sell_in >= 0) {
                item.quality -= (time * 2)
            } else {
                item.quality -= ((2 * sellBy) + (4 * (time - sellBy)))
            }
            break;
        case "Backstage passes":
            item.sell_in -= time
            if (item.sell_in > 10) {
                item.quality += time
            } else if (item.sell_in <= 10 && item.sell_in > 5) {
                if (sellBy > 10) {
                    item.quality += ((sellBy - 9) + (2 * (time - (sellBy - 10))))
                } else {
                    item.quality += (time * 2)
                }
            } else if (item.sell_in <= 5 && item.sell_in > 0) {
                if (sellBy > 10) {
                    item.quality += ((sellBy - 10) - 3 + (3 * (time - (sellBy - 10))))
                } else if (sellBy > 5) {
                    item.quality += ((sellBy + 1) + (3 * (time - (sellBy - 5))))
                } else {
                    item.quality += (time * 3)
                }
            } else {
                item.quality = 0
            }
            break;
        default:
            item.sell_in -= time
            if (item.sell_in >= 0) {
                item.quality -= time
            } else {
                item.quality -= (sellBy + (2 * (time - sellBy)))
            }
    }
    qualityCheck(item)
    return item
}

function qualityCheck(item) {
    if (item.category === "Sulfuras") {
        item.quality = 80
    } else if (item.quality >= 50) {
        item.quality = 50
    } else if (item.quality <= 0) {
        item.quality = 0
    }
    return item
}

function createItemListing(item) {
    const list = document.createElement("div")
    list.classList = "list"
    list.innerHTML = `
            <p>${item.item_name}</p> 
            <p>${item.sell_in}</p>
            <p>${item.quality}</p> 
        `
    return list
}