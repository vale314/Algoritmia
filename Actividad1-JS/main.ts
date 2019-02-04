
var trapecios=function(){
    var a,b,n,h,FX,Fa,Fb,SUM=0,I,XI,FXI;

    a=0

    b=1

    n=100000

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
        throw Error("No Se Pudo");
        
    }


    console.log(`Trapecios:`);
    var millis = Date.now() - start;
    console.log(`Milleseconds: ${millis}`)
    console.log(`EL RESULTADO ES: ${FX*4}`)
}


 var simpson=function(){
    var a,b,h,FX,Fa,Fb,SUM=0,XI,FXI;
    var n,I;
    a=0;

    b=1;

    n=100000;

    if(n%2==1)
        throw Error("Invalido Numero Impar")

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
        throw Error("No Se Pudo")
    
    console.log("Simpsons");

    console.log(`El Resultado Es: ${FX*4}`)
}

simpson();
trapecios();
