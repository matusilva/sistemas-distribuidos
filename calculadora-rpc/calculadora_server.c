/*
 * This is sample code generated by rpcgen.
 * These are only templates and you can use them
 * as a guideline for developing your own functions.
 */

#include "calculadora.h"

int *
soma_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para somar: %d e %d\n", argp->x, argp->y);
	result = argp->x + argp->y;

	return &result;
}

int *
sub_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para subtrair: %d e %d\n", argp->x, argp->y);
	result = argp->x - argp->y;

	return &result;
}

int *
mult_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para multiplicar: %d e %d\n", argp->x, argp->y);
	result = argp->x * argp->y;

	return &result;
}

int *
div_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para dividir: %d e %d\n", argp->x, argp->y);
	result = argp->x / argp->y;

	return &result;
}

int *
resto_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para calcular o resto da divisão: %d e %d\n", argp->x, argp->y);
	result = argp->x % argp->y;

	return &result;
}

int *
potencia_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para calcular a potência: %d e %d\n", argp->x, argp->y);
	int acumulador = 1;

	for(int i = 0; i < argp->y; i++){
		acumulador *= argp->x;
	}
	result = acumulador;

	return &result;
}

int *
maior_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para mostrar o maior: %d e %d\n", argp->x, argp->y);
	if (argp->x > argp->y){
		result = argp->x;
	}
	else
	{
		result = argp->y;
	}

	return &result;
}

int *
menor_1_svc(numbers *argp, struct svc_req *rqstp)
{
	static int  result;
	printf("Recebi para mostrar o menor: %d e %d\n", argp->x, argp->y);
	printf("------------------------------------\n");
	if (argp->x < argp->y){
		result = argp->x;
	}
	else
	{
		result = argp->y;
	}
	
	return &result;
}