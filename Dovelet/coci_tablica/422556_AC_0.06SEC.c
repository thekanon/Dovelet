#include <stdio.h>
void main()
{
	int a[5],b[4],c[4];
	int n=0;

	int i,max=4,cou=0;

	for(i=0;i<4;i++)
	{
		scanf("%d",&a[i]);
		b[i]=a[i];
	}
	
	while(n!=4)
	{
		b[0]=a[0];
		b[1]=a[1];
		b[2]=a[2];
		b[3]=a[3];
		c[n]=a[0]/a[2]+a[1]/a[3];

		n++;
		if(n==4)
			break;
		for(i=0;i<4;i++)
		{
			if(i==0)
				a[i]=b[2];
			else if(i==1)
				a[i]=b[0];
			else if(i==2)
				a[i]=b[3];
			else if(i==3)
				a[i]=b[1];
			
		}


		
		


	}
	n--;
	a[4]=0;

	for(i=0;i<=n;i++)
	{	
		if(c[i]>=c[max])
		{
			max=i;
		}
	}

printf("%d",max);
	


}