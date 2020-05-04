
(5.1234).toPrecision(3) //outputs 5.12 (assuming the 3 at the end means will have 3 nnumbers max, cant get this to display in vs code without any code)

function number (x, y)
{
    const result = Number.parseInt(x,y) //number.parseint takes a string and converts it to an integer (number)
    if (Number.isNaN(result)) //dont know what the result means but this is providing an option to output 0 if it doesnt work out to be a number
    {
        return 0;
    }
    return result * 10 //the number function will be multiplied by ten
}
console.log(number ('5', 10))

function money(x,y)
{
    x = Number(x) //x must be a number
    y = y || "$" //i think this means y will display the string $

    if(Number.isNaN(x) || typeof y != 'string') //if x isnt a number and y isnt a string then it will return null
    {
        return null
    }
    return y + x.toFixed(2) //this is making it so the number of digit after decimal is 2
}

console.log(money(15, "$"))
console.log(money(6))
console.log(money(7, "S$"))

function anyFunction(data, callback)
{
    async-process(data).then  //do async request
    (
        function(result)       //then on return
        {
            callback(result)   //execute callback
        }
    )

    // insert code here
}
//this is for when you want a function to start but you dont want it to run just yet

functionOne(data, function(resultOne){
    functionTwo(resultOne, function(resultTwo) {
        functionThree(resultTwo, function(resultThree){
            //code goes here
        })
    })
})
//i have no idea what this means but ill never use this in my life