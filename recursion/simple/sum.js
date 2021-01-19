function sum(num) {
    if(num===0) return 0;
    return sum(num-1)+num;
}

const result =sum(10);
console.log("Result",result);
