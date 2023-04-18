// You manage a grocery store and need to keep track of the inventory of various items.
//  You will use arrays to store the data and various functions to manipulate and analyze the data.


// Create an array containing the names of all items in the inventory maximum of 10.
arrGroceries = ["apples","oranges","carrots","tomatoes","potatoes","onions","garlic",
"ginger","bananas"];
arrGroceriesList = [50,50,60,50,30,80,70,90,100]
allGrocery=Object.fromEntries(arrGroceries.map((a,b)=>[a,arrGroceriesList[b]]))
 console.log(allGrocery);

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// arrGroceriesList = [50,50,60,50,30,80,70,90,100]
// console.log(arrGroceriesList);

// Write a function to add a new item to the inventory, updating both arrays.
 function inventoryList(allGrocery) {
    allGrocery.mangoes=67
     console.log(allGrocery)
 }
 inventoryList(allGrocery)
    // arrGroceriesList.push(40)
//     console.log(arrGroceriesList)
    
// }

// inventoryList(arrGroceries,arrGroceriesList)

// Write a function to update the stock quantity of an existing item.
 function updateQty(allGrocery){
    // let itemIndex = allItems.indexOf(item);
    // quantity.splice(itemIndex, 0, newValue)
    // allGrocery.push(tomatoes[45])
 allGrocery.tomatoes=90
 return allGrocery
 }
 console.log(updateQty(allGrocery))
// // Write a function to calculate the total number of items in the inventory.

 function totalNumbers() {
    let values= Object.values(allGrocery);
    let total=values.reduce((accumulator,value)=>{
        return accumulator+value
    },0)
    console.log(total);
 }
 totalNumbers()
// Write a function to find the item with the lowest stock quantity.

 function lowestQuantity(arrGroceries){
    let lowest = arrGroceries[0]
    for(let i = 0;i<arrGroceries.length;i++){

    
    if(arrGroceries[i]>lowest)
    lowest = arrGroceries[i]
    }
    console.log(lowest)

 }
 lowestQuantity(arrGroceries)

    

//     }

//     }

