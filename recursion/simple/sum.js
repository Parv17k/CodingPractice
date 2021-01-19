function sum(num) {
    if(num===0) return 0;
    return sum(num-1)+num;
}
function sumTail(num,sum=0){
    // Tail recursion for sum in JavaScript/ Node.js 
    if(num===0)
    return sum;

    sum=sum+num;
    return sumTail(num-1,sum);

}

const result =sum(10);
const resultTail=sumTail(10);
console.log("Result of sum",result);
console.log("Result of Tail sum :",resultTail);
