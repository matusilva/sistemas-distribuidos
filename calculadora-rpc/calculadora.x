struct numbers {
    int x;
    int y;
};

program SIMP_PROG {
    version SIMP_VERSION {
        int soma(numbers) = 1;
        int sub(numbers) = 2;
        int mult(numbers) = 3;
        int div(numbers) = 4;
        int resto(numbers) = 5;
        int potencia(numbers) = 6;
        int maior(numbers) = 7;
        int menor(numbers) = 8;
        
    } = 1;
} = 0x2fffffff;