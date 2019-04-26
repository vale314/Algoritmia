/*var n = 10;
var i = n;
while (i > 0) {
    for (var j = 0; i < n; j++) {
        console.log("*");
    }
    i = i / 2;
}
*/

var a=[1,6,3,4,5,2]
var n=5
var aux;

console.log(a)

var numInve=0;
for(var i=0;i<n;i++){
    console.log(i)
    for(var j=i+1;j<=n;j++){
        if(a[i]>a[j]){
            aux=a[j]
            a[j]=a[i]
            a[i]=aux
            numInve++;
        }
    }
}

console.log(a)




console.log(numInve)