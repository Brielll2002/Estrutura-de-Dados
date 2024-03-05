#include <iostream>
#include <string>
#include <locale.h>

int main(){
setlocale(LC_ALL,"");

int length;

std::cout << "Qual será o tamanho da fila ? ";
std::cin >> length;

int fila[length];

for(int c = 0; c < length; c++){
    std::cout << "Adicione o " <<c+1<<"º número a fila: " << std::endl;
    std::cin >> fila[c];
}

std::cout << "A fila ficou assim: ";
for(int i = 0; i < length; i++){
    if(i+1 == length){
        std::cout<<fila[i]<<".";
    }
    else{
        std::cout<<fila[i]<<", ";
    }
}
std::cout<<"\n"<<std::endl;
std::cout<<"Agora tire os itens da fila apertando em qualquer tecla.\n"<<std::endl;
for(int x = 0; x < length; x++){
    system("pause");
    std::cout<<"Removendo número "<<fila[x]<<"."<<std::endl;
    fila[x] = 0;
}

delete[] fila;
return 0;
}
