
const a=0,b=1,n=1000000000


var trapecios=function(){
    var h,FX,Fa,Fb,SUM=0,I,XI,FXI;
    var start = Date.now();

    if(n>3){
        //h ES Una FORMULa
        h=(b-a)/n;
        //limites de la fucion en la funcion del circulo
        Fa=Math.sqrt((Math.pow(2,2)-Math.pow(a,2)));
        Fb=Math.sqrt((Math.pow(2,2)-Math.pow(b,2)));

        for(I=1;I<=n-2;I++){
            //El valor de cada funcion evaluara o el inicio de cada trapecio
            XI=a+(I*h);
            //Evaluar cada funcion con el XI
            FXI=Math.sqrt((Math.pow(b,2)-Math.pow(XI,2)));
            //sumar los valores resultantes de la funcion
            SUM=SUM+FXI;
        }
        //sumar los Vlaores Extremos de la funcion  y aplicando la formula
        FX=(h/2)*(Fa+(2*SUM)+Fb);
    }else{
        console.log("No Se Pudo");
        
    }


    console.log(`Trapecios:`);
    var millis = Date.now() - start;
    console.log(`Milleseconds: ${millis}`)
    console.log(`EL RESULTADO ES: ${FX*4}`)
}


 var simpson=function(){
    var h,FX,Fa,Fb,SUM=0,XI,FXI,I;

    var start = Date.now();

    if(n%2==1)
        console.log("Invalido Numero Impar")

    if(n>3){
        //h ES Una FORMULa
        h=(b-a)/n;
        //limites de la fucion en la funcion del circulo
        Fa=Math.sqrt((Math.pow(2,2)-Math.pow(a,2)));
        Fb=Math.sqrt((Math.pow(2,2)-Math.pow(b,2)));

        for(I=1;I<=n-2;I++){
            //El valor de cada funcion evaluara o el inicio de cada trapecio
            XI=a+(I*h);//apertura
            //Evaluar cada funcion con el XI
            FXI=Math.sqrt((Math.pow(b,2)-Math.pow(XI,2)));
            //sumar los valores resultantes de la funcion
            if(I%2==0)
                FXI=FXI*4;
            else
                FXI=FXI*2;
            SUM=SUM+FXI;
        }
        //sumar los Vlaores Extremos de la funcion  y aplicando la formula
        FX=((b-a)/(3*n))*(Fa+SUM+Fb);
    }else
        console.log("No Se Pudo")
    
    console.log("Simpsons");
    var millis = Date.now() - start;
    console.log(`Milleseconds: ${millis}`)
    console.log(`El Resultado Es: ${FX*4}`)
}

trapecios();
simpson();

