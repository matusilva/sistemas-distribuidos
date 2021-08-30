/*
 * This is sample code generated by rpcgen.
 * These are only templates and you can use them
 * as a guideline for developing your own functions.
 */

#include "calculadora.h"


void
simp_prog_1(char *host, int x, int y)
{
	CLIENT *clnt;
	int  *result_1;
	numbers  soma_1_arg;
	int  *result_2;
	numbers  sub_1_arg;
	int  *result_3;
	numbers  mult_1_arg;
	int  *result_4;
	numbers  div_1_arg;
	int  *result_5;
	numbers  resto_1_arg;
	int  *result_6;
	numbers  potencia_1_arg;
	int  *result_7;
	numbers  maior_1_arg;
	int  *result_8;
	numbers  menor_1_arg;

#ifndef	DEBUG
	clnt = clnt_create (host, SIMP_PROG, SIMP_VERSION, "udp");
	if (clnt == NULL) {
		clnt_pcreateerror (host);
		exit (1);
	}
#endif	/* DEBUG */

	soma_1_arg.x = x;
	soma_1_arg.y = y;

	sub_1_arg.x = x;
	sub_1_arg.y = y;

	mult_1_arg.x = x;
	mult_1_arg.y = y;

	div_1_arg.x = x;
	div_1_arg.y = y;

	resto_1_arg.x = x;
	resto_1_arg.y = y;

	potencia_1_arg.x = x;
	potencia_1_arg.y = y;

	maior_1_arg.x = x;
	maior_1_arg.y = y;

	menor_1_arg.x = x;
	menor_1_arg.y = y;

	
	result_1 = soma_1(&soma_1_arg, clnt);
	if (result_1 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Soma = %d\n", *result_1);
	}

	result_2 = sub_1(&sub_1_arg, clnt);
	if (result_2 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Subtração = %d\n", *result_2);
	}

	result_3 = mult_1(&mult_1_arg, clnt);
	if (result_3 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Multiplicação = %d\n", *result_3);
	}

	result_4 = div_1(&div_1_arg, clnt);
	if (result_4 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Divisão = %d\n", *result_4);
	}

	result_5 = resto_1(&resto_1_arg, clnt);
	if (result_5 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Resto da Divisão = %d\n", *result_5);
	}

	result_6 = potencia_1(&potencia_1_arg, clnt);
	if (result_6 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Potência = %d\n", *result_6);
	}

	result_7 = maior_1(&maior_1_arg, clnt);
	if (result_7 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Maior = %d\n", *result_7);
	}

	result_8 = menor_1(&menor_1_arg, clnt);
	if (result_8 == (int *) NULL) {
		clnt_perror (clnt, "call failed");
	}
	else
	{
		printf("Menor = %d\n", *result_8);
	}

#ifndef	DEBUG
	clnt_destroy (clnt);
#endif	 /* DEBUG */
}


int
main (int argc, char *argv[])
{
	char *host;

	if (argc < 2) {
		printf ("usage: %s server_host number_x number_y\n", argv[0]);
		exit (1);
	}
	host = argv[1];
	simp_prog_1 (host, atoi(argv[2]), atoi(argv[3]));
exit (0);
}