#include <iostream>
#include <string>
#include <locale.h>

int main(){
setlocale(LC_ALL, "");

std::string vetor[10] = {"Teste 1","Teste 2","Teste 3","Teste 4","Teste 5","Teste 6","Teste 7","Teste 8","Teste 9","Teste 10"};

for(int c = 0; c < 10; c++){
    std::cout << vetor[c] << "\n";
}

return 0;
}
