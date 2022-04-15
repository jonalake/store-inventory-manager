const input = document.querySelector("#input")
const status = document.querySelector("#status")
let inventory = []

input.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const item = {
        item_name: formData.get("item"),
        quality: formData.get("sell_in"),
        sell_in: formData.get("quality"),
        date_added: formData.get("date_added"),
        category: "none",
    }
    if (item.item_name.includes("Aged Brie")) {
        item.category = "Aged Brie"
    } else if (item.item_name.includes("Sulfuras")) {
        item.category = "Sulfuras"
    } else if (item.item_name.includes("Backstage passes")) {
        item.category = "Backstage passes"
    } else if (item.item_name.includes("Conjured")) {
        item.category = "Conjured"
    }
    inventory = [...inventory, item]
    console.log(inventory)
})