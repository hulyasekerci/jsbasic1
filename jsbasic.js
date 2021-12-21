//1. Print 1-135

for(let i=1; i <= 135; i++) {
    console.log(i)
}

//2. Print Odd Numbers 1 - 135

for(let i=1; i <= 135; i++) {
    if(i%2 ===1){
        console.log(i)
    }
}    

//3. Sum of Printed Numbers

let sum = 0;

for(var i = 0; i<= 135; i++) {
    sum = sum + 1;
    console.log('Number is:' + ' ' + i + ' Sum is :' + ' ' + sum);  
}


//4. Print the elements of an array

const y = [1, 4, 2, 12];

console.log(y[0], y[1], y[2], y[3]);

//below is updated with the stand-up to practice

for(var i =0; i< y.length; i++) {
    console.log(y[i]);
}




//5. Find Max

const X = [ 3, 5, 7, 23, 0, -7, -3];

console.log(Math.max(...X));





//6. Get Average

//Got help from the stand-up meeting

const Z = [2, 6, 9, 13] ;

let sum = 0

for(let i = 0; i<Z.length ; i++) {
    sum = sum + Z[i]
}

console.log(sum/Z.length)




// 7. Eliminate the Negatives

//Got a bit help from the stand-up.

const A = [2,-1,4,-3]

for (var i =0; i< A.length; i++) {
    if (A[i]<0) { 
        console.log(A[i]=0);
    }

}

console.log(A)


//8. Number to String

const B = [1,-4,0,-1]

for (var i =0; i< B.length; i++) {
    if (B[i]<0) { 
        console.log(B[i]=('turing'));
    }

}
console.log(B)
