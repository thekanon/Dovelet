#include <stdio.h>
void main()
{
	int n,i,max=0;

	scanf("%d",&n);

	for(i=1;i<n;i++)
	{
		if(n%i==0)
			max+=i;
	}

	if(max==n)
		printf("yes");
	else
		printf("no");

}