#include <iostream>
using namespace std;
int main(){
    int n;
    int i;
    int j;

    cin >> n;

    for(i=1;i<=n;i++){
        for(j=n;j>i;j--){
            printf(" ");
        }

        for(j=0;j<i;j++){
            printf("*");
        }
        printf("\n");
    }
}