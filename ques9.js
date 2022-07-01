function getEvenNumbers() {
    var arr = [1, 2, 3, 4, 5, 6,4,2];
    odd=[];
    even=[];
    final=[];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
           even.push(arr[i]);
        }
        
        if (arr[i] % 2 != 0) {
            odd.push(arr[i]);
         }
    }
    let ans = even.concat(odd);
    console.log(ans);
    
    let uniqueChars = [...new Set(ans)];
    console.log(uniqueChars);
    
}

getEvenNumbers();