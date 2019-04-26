#include <bits/stdc++.h>
#include <stdio.h>
#include <iostream>

#define N 8

static int cx[N] = {1,1,2,2,-1,-1,-2,-2};
static int cy[N] = {2,-2,1,-1,2,-2,1,-1};

//Ayuda a establecer que el caballo este dentro de UN tablero de Ajedrez de longitud N Matricial
bool limites(int x, int y)
{
    return ((x >= 0 && y >= 0) && (x < N && y < N));
}

/*Compruba si el cuadro actual no esta vacion y si es valido*/
bool isEmpty(int a[], int x, int y)
{
    return (limites(x, y)) && (a[y*N+x] < 0);
}

/*Devuelve el numero de espacios vacios que tiene el tablero*/
int getNumEspaciosVacios(int a[], int x, int y)
{
    int count = 0;
    for (int i = 0; i < N; ++i)
        if (isEmpty(a, (x + cx[i]), (y + cy[i])))
            count++;

    return count;
}
/*Devuelve si es verdadero el siguiente movimiento que deberiamos hacer el Valido*/
bool nextMove(int a[], int *x, int *y)
{
    int minimoId = -1, c, minDeg = (N+1), nX, nY;

    // Prueba todas las N adyacentes de (* x, * y) comenzando
    // de un azar adyacente. Encontrar el adyacente
    // con grado mínimo.
    int inicio = rand()%N;
    for (int count = 0; count < N; ++count)
    {
        int i = (inicio + count)%N;
        nX = *x + cx[i];
        nY = *y + cy[i];
        if ((isEmpty(a, nX, nY)) &&
        (c = getNumEspaciosVacios(a, nX, nY)) < minDeg)
        {
            minimoId = i;
            minDeg = c;
        }
    }

    // No se econtro la siguiente celda
    if (minimoId == -1)
        return false;

    // Almacena las coordenadas del siguiente punto
    nX = *x + cx[minimoId];
    nY = *y + cy[minimoId];

    // Mark next move
    a[nY*N + nX] = a[(*y)*N + (*x)]+1;

    // Actualizar el siguiente punto
    *x = nX;
    *y = nY;

    return true;
}

/*Muestra el tablero co todos los movimientos*/
void print(int a[])
{
    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < N; ++j)
            printf("%d\t",a[j*N+i]);
        printf("\n");
    }
}

bool vecinos(int x, int y, int xx, int yy)
{
    for (int i = 0; i < N; ++i)
        if (((x+cx[i]) == xx)&&((y + cy[i]) == yy))
            return true;

    return false;
}

/* Genera Movimientos Validos*/
bool validarMovimiento()
{
    // Busca los lugares en la matrix con -1
    int a[N*N];
    for (int i = 0; i< N*N; ++i)
        a[i] = -1;

    // Posicion inicial Random
    int sX = rand()%N;
    int sY = rand()%N;

    // Declaramos los puntos actuales iguales que los iniciales
    int x = sX;
    int y = sY;

    a[y*N+x] = 1;

    // Sigue escogiendo los siguientes puntos usando
    // La heurística de Warnsdorff.

    for (int i = 0; i < N*N-1; ++i)
        if (nextMove(a, &x, &y) == 0)
            return false;

    //Coprobamos si el tour esta cerrado
    if (!vecinos(x, y, sX, sY))
        return false;

    print(a);
    return true;
}

int main()
{

    srand(time(NULL));

    const std::clock_t start = std::clock();

    while (!validarMovimiento()){;}

    const std::clock_t end = std::clock();
    const double elapsed_processor_time_millisecs = (end-start) * 1000.0 / CLOCKS_PER_SEC;

    std::cout << "Algorithm Runtime is: " << elapsed_processor_time_millisecs/1000.0 << " seconds."<<std::endl
         << "Algorithm Runtime is: " << elapsed_processor_time_millisecs << " Millisecs."<<std::endl<<std::endl;

    return 0;
}
