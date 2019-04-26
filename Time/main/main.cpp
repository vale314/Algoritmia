#include <iostream>

using namespace std;

void ciclo(int n);
void ciclo2(int n);
int main()
{
    ciclo2(5);
    return 0;
}

void ciclo(int n)
{
    int i = n;
    int contI = 0, contJ = 0, contN=0;
    while (i > 0) {
        contI++;
        for (int j = 0; j < n; ++j){
            cout<<"*";
            contJ++;
        }
        cout<<endl<<"I actual"<<i<<endl;
        i = i / 2;
    }

    cout<<endl<<"While: "<<contI<<" FOR: "<<contJ<<" N: "<<n<<" I: "<<i<<endl;
}


void ciclo2(int n)
{
    cout<<"N: "<<n<<endl;
    int contI = 0, contJ = 0, contN=0;
    while (n > 0) {
        contI++;
        for (int j = 0; j < n; ++j){
            cout<<"*";
            contJ++;
        }
        n = n / 2;
    }

    cout<<endl<<"While: "<<contI<<" FOR: "<<contJ<<" N: "<<n<<endl;
}
