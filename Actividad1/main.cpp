#include <iostream>
#include<math.h>

using namespace std;

void trapecios(){
    double a,b,n,h,FX,Fa,Fb,SUM=0,I,XI,FXI;

    cout<<"INFERIOR"<<endl;
    cin>>a;

    cout<<"SUPERIOR"<<endl;
    cin>>b;

    cout<<"TRAPECIOS"<<endl;
    cin>>n;

    if(n>3){
        //h ES Una FORMULa
        h=(b-a)/n;
        //limites de la fucion en la funcion del circulo
        Fa=sqrt((pow(2,2)-pow(a,2)));
        Fb=sqrt((pow(2,2)-pow(b,2)));

        for(I=1;I<=n-2;I++){
            //El valor de cada funcion evaluara o el inicio de cada trapecio
            XI=a+(I*h);
            //Evaluar cada funcion con el XI
            FXI=sqrt((pow(b,2)-pow(XI,2)));
            //sumar los valores resultantes de la funcion
            SUM=SUM+FXI;
        }
        //sumar los Vlaores Extremos de la funcion  y aplicando la formula
        FX=(h/2)*(Fa+(2*SUM)+Fb);
    }else{
        cout<<"NO SE PUDO"<<endl;
    }
    cout<<"EL RESULTADO ES: "<<FX*4<<endl;
    system("pause");
}


void simpson(){
    double a,b,h,FX,Fa,Fb,SUM=0,XI,FXI;
    int n,I;
    cout<<"INFERIOR"<<endl;
    cin>>a;

    cout<<"SUPERIOR"<<endl;
    cin>>b;

    cout<<"TRAPECIOS"<<endl;
    cin>>n;

    if(n%2==1){
        cout<<"Invalido n es Impar"<<endl;
        return;
    }


    if(n>3){
        //h ES Una FORMULa
        h=(b-a)/n;
        //limites de la fucion en la funcion del circulo
        Fa=sqrt((pow(2,2)-pow(a,2)));
        Fb=sqrt((pow(2,2)-pow(b,2)));

        for(I=1;I<=n-2;I++){
            //El valor de cada funcion evaluara o el inicio de cada trapecio
            XI=a+(I*h);//apertura
            //Evaluar cada funcion con el XI
            FXI=sqrt((pow(b,2)-pow(XI,2)));
            //sumar los valores resultantes de la funcion
            if(I%2==0)
                FXI=FXI*4;
            else
                FXI=FXI*2;
            SUM=SUM+FXI;
        }
        //sumar los Vlaores Extremos de la funcion  y aplicando la formula
        FX=((b-a)/(3*n))*(Fa+SUM+Fb);
    }else{
        cout<<"NO SE PUDO"<<endl;
    }
    cout<<"EL RESULTADO ES: "<<FX*4<<endl;
    system("pause");
}

int main()
{
    simpson();
    trapecios();
    return 0;
}
