#include <stdio.h>
void main()
{
	double x1,y1,x2,y2;
	scanf("%lf %lf %lf %lf",&x1,&y1,&x2,&y2);
	printf("%.0lf %.0lf",(y2-y1)/(x2-x1),y1-((y2-y1)/(x2-x1))*x1);
}