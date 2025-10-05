let fruits = ['banana','Orange'];

const longest = (fruits)=>{
    let lword = ''
    for (let i=0;i<fruits.length;i++){
        if(fruits[i].length>lword.length){
            lword=fruits[i]
        }
    }return lword
}

console.log(longest(fruits))

const x = 20

function foo(){
    console.log(x)
    x=10
}
foo()
console.log(x)