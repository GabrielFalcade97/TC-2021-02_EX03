class CalculadoraDeSalario {
    constructor() {}
  
    calculaSalarioLiquido(salarioBase, percentualDesconto) {
      return (salarioBase * (100 - percentualDesconto)) / 100;
    }
  
    salDesenvolvedor(salarioBase) {
      const percentualDesconto = salarioBase >= 3000.0 ? 20 : 10;
      return this.calculaSalarioLiquido(salarioBase, percentualDesconto);
    }
  
    salDBA(salarioBase) {
      const percentualDesconto = salarioBase >= 2000.0 ? 25 : 15;
      return (salarioBase * (100 - percentualDesconto)) / 100;
    }
  
    salTestador(salarioBase) {
      const percentualDesconto = salarioBase >= 2000.0 ? 25 : 15;
      return this.calculaSalarioLiquido(salarioBase, percentualDesconto);
    }
  
    salGerente(salarioBase) {
      const percentualDesconto = salarioBase >= 5000.0 ? 30 : 20;
      return this.calculaSalarioLiquido(salarioBase, percentualDesconto);
    }
  
    calculaSalario(funcionario) {
      if (
        funcionario.nome.length == 0 ||
        funcionario.email.length == 0 ||
        funcionario.salarioBase <= 0 ||
        funcionario.cargo.length == 0
      ) {
        return "campos 'nome', 'email', 'salarioBase' e 'cargo' tem que ser validos!";
      }
  
      let percentualDesconto = 0;
  
      switch (funcionario.cargo) {
        case "desenvolvedor":
          return this.salDesenvolvedor(funcionario.salarioBase);
        case "dba":
          return this.salDBA(funcionario.salarioBase);
        case "testador":
          return this.salTestador(funcionario.salarioBase);
        case "gerente":
          return this.salGerente(funcionario.salarioBase);
      }
    }
  }
  
  module.exports = CalculadoraDeSalario;