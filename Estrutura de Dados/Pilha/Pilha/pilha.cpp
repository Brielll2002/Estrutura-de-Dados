#include <iostream>
#include <string>
#include <locale.h>

int main(){
setlocale(LC_ALL,"");

    int length;

    std::cout << "Qual será o tamanho da pilha ? ";
    std::cin >> length;

    int *pilha = new int[length];

    for(int x = 0; x < length; x++){
        pilha[x] = 0;
    }

    std::cout << "Adicione " << length << " itens à pilha: \n";
    for(int c = 0; c<length; c++){
        std::cin >> pilha[c];
    }

    std::cout << "Agora tire os itens pelo topo: \n";
    for(int i = length-1; i > -1; i--){
        if(i == 0){
            system("pause");
            std::cout << "O item '" << pilha[i] << "'(último) está sendo removido\n";
            pilha[i] = 0;
        }
        else{
        system("pause");
        std::cout << "O item '" << pilha[i] << "' está sendo removido\n";
        pilha[i] = 0;
        }
    }
    delete[] pilha;

return 0;
}
