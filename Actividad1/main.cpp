#include <iostream>
#include<math.h>
#include <chrono>

using namespace std;
using namespace std::chrono;

void trapecios(){
    double a,b,n,h,FX,Fa,Fb,SUM=0,I,XI,FXI;

    cout<<endl<<"INFERIOR"<<endl;
    cin>>a;

    cout<<"SUPERIOR"<<endl;
    cin>>b;

    cout<<"TRAPECIOS"<<endl;
    cin>>n;

    const std::clock_t start = std::clock();

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

    const std::clock_t end = std::clock();
    const double elapsed_processor_time_millisecs = (end-start) * 1000.0 / CLOCKS_PER_SEC;

    cout<<endl<<endl<<"Trapecios:"<<endl<<endl;

    cout << "Algorithm Runtime is: " << elapsed_processor_time_millisecs/1000.0 << " seconds."<<endl
         << "Algorithm Runtime is: " << elapsed_processor_time_millisecs << " Millisecs."<<endl<<endl;

    cout<<"EL RESULTADO ES: "<<FX*4<<endl;
}


void simpson(){
    double a,b,h,FX,Fa,Fb,SUM=0,XI,FXI;
    int n,I;
    cout<<endl<<"INFERIOR"<<endl;
    cin>>a;

    cout<<"SUPERIOR"<<endl;
    cin>>b;

    cout<<"TRAPECIOS"<<endl;
    cin>>n;

    if(n%2==1){
        cout<<"Invalido n es Impar"<<endl;
        return;
    }

    const std::clock_t start = std::clock();

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
    const std::clock_t end = std::clock();
    const double elapsed_processor_time_millisecs = (end-start) * 1000.0 / CLOCKS_PER_SEC;

    cout<<endl<<endl;
    cout<<"Simpson"<<endl<<endl;

    cout << "Algorithm Runtime is: " << elapsed_processor_time_millisecs/1000.0 << " seconds."<<endl
         << "Algorithm Runtime is: " << elapsed_processor_time_millisecs << " Millisecs."<<endl<<endl;

    cout<<"EL RESULTADO ES: "<<FX*4<<endl;
}

int main()
{
    simpson();
    trapecios();
    return 0;
}
