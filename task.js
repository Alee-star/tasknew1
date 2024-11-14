//palindrome
function isPalindrome(str) {
    let revString = ""
    let strLowCase = str.toLowerCase()
    // avoiding all punctations and spaces
    let ignore1 = strLowCase.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    let ignore2 = ignore1.replace(/\s/g, "")
    //reverse the string
    for(let i = ignore2.length - 1; i >= 0 ; i--) {
        revString += ignore2[i]
    }
    if(revString == ignore2){
        console.log('string is a palindrome')
    }
    else{
        console.log('string is not a palindrome')
    }
    
}
const string1 = "Mala ya ! la M"
const string2 = "english"
isPalindrome(string1);
isPalindrome(string2);

// uniqueValues
function uniqueValues(array) {  
    let uniqueArray = []
    array.forEach(item=> {
        // if not in array it adds
        if(!uniqueArray.includes(item)) {
            uniqueArray.push(item)
        }
    });
    console.log(uniqueArray)
}
const array1 = [1, 3, 7, 3, 2, 7, 1, 4]
const array2 = [1, 4, 5, 6, 7, 3, 4, 4, 5, 0]
uniqueValues(array1)
uniqueValues(array2)

//fetch
function fetchData(urls) {
    const fetchurl = urls.map(url => 
        fetch(url) 
            .then(response => response.json())
    )
    Promise.all(fetchurl)
        .then(responses => {
            const newData =  responses.map(response => response)
            console.log('data', newData)
        })
        .catch(error => console.error('error in fetching', error))
}
const urlsFetch = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/1/comments"
]
fetchData(urlsFetch)

//deep clone(using json.parse and stringify)
function deepclone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
let Obj1 = {
    place: "Sulthan Bathery",
    district: "Wayanad",
    attractions: {
        dam: "Karappuzha",
        cave: "Edakkal"
    }
}
console.log(deepclone(Obj1.place))
console.log(deepclone(Obj1.attractions))

//counter
// let count = 0
// let counter = function() {
//     return {
//         function increment() {

//         }
//     }
// }();

//safeParse
function safeParse(jsonString) {
    if(!typeof jsonString == "string") {
        console.log("Error! Not valid}")
    }
    try {
        JSON.parse(jsonString)
        console.log("Valid JSON String")
    }
    catch {
        console.log("Error! Not valid")
    }
}
let string3 = '{"name": "Aleena", "dept": "ec"}'
let string4 = '[name: "Aleena". dept: "ec"]'
safeParse(string3)
safeParse(string4)

//sum
function findTwoSum(nums, target) {
    for(let i = 0; i < nums.length; i ++) {
        for( let j = i + 1 ; j < nums.length ; j++) {
            if(nums[i] + nums[j] == target){
                console.log('the pair is at index', [i, j])
            }
        }
    }
}
const nums1 = [3, 4, 5, 6, 7]
const target1 = [9]
findTwoSum(nums1, target1)
