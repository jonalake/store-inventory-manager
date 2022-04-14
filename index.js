const form = document.forms.input

function handleSubmit(event) {
    event.preventDefault()
    console.log("Yay, it works")
}

form.addEventListener("submit", handleSubmit)






/* [{
    item_name:
    quality:
    sell_in:
    date_added:
    category:
}, {
    item_name:
    quality:
    sell_in:
    date_added:
    category:
}] */