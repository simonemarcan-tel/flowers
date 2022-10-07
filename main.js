
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/

/*
    The function should iterate through the object and its price, push the flower
    which fits the conditions, and log it to the console
*/


//****** EXERCISE ONE **********

//create a for loop that loops through the price of each flower
//if the price is less than 2, push the object into the filteredFlowers variable
//once all have been looped through, log the flowers' prices to the console
//log the filteredFlowers array to the console before returning the whole code block



const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify


    for (const flowerObject of flowers) {
        if (flowerObject.price < 2) {
            filteredFlowers.push(flowerObject)

            //console.log(flowerObject.price)
        }
    }

    // Write your algorithm first, and then your code. Feel free to remove this comment


    //console.log(filteredFlowers)
    return filteredFlowers  // Do not modify




}
inexpensiveFlowers()


//********** EXERCISE TWO ************
/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/

//iterate through flowers
//within the for loop, include the criteria of growth in USDA zones 3 and 8
//push the filtered objects into the filteredFlowers array
//call the function

const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify

    for (const flowerArray of flowers) {
        if (flowerArray.usdaZones.includes(3) && flowerArray.usdaZones.includes(8)) {
            filteredFlowers.push(flowerArray)




        }
    }





    // Write your algorithm first, and then your code. Feel free to remove this comment



    return filteredFlowers  // Do not modify

}
zoneFlowers()
//************ EXERCISE THREE ************


/*
    This function should return flowers that come in the color Orange
*/

//declare criteria to be "orange"
//iterate through flowers
//concatenate the "criteria", if it is included then-
//-push orangesFlowers into the filteredFlowers variable 


const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
    let criteria = "Orange"


    for (const orangesFlowers of flowers) {
        if (orangesFlowers.colors.includes(`${criteria}`)) {
            filteredFlowers.push(orangesFlowers)
        }
    }

    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}
orangeFlowers()


/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article> 
*/
//iterate through flower objects
//concatenate between <article> tags </article>
//iterate through flower colors
//concatenate between <section> tags </section>
//iterate through flower USDA zone
//concatenate betwen <div> tags </div>

const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify

    for (const flowerType of flowers) {
        flowersHTMLString += `<article>${flowerType.type}</article>\n`
        for (const flowersColors of flowerType.colors) {
            flowersHTMLString += `<section>${flowersColors}</section>\n`
        }


    //because the for ..of loop is iterating through the const flowerType -
        //-it needs to be "of" that loop and not "flowers"


        for (const flowerZones of flowerType.usdaZones) {
            flowersHTMLString += `<div>${flowerZones}</div>\n`
        }
    }
        

    



    return flowersHTMLString  // Do not modify
}
flowersAsHTML()















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

