class CalculadoraDeSalario {
    constructor() {}
  
    calculaSalario(funcionario) {
      if (
        funcionario.nome.length == 0 ||
        funcionario.email.length == 0 ||
        funcionario.salarioBase <= 0 ||
        funcionario.cargo.length == 0
      ) {
        return "campos 'nome', 'email', 'salarioBase' e 'cargo' precisam ser validos";
      }

      let percentualDesconto = 0;

    switch (funcionario.cargo) {
      case "desenvolvedor":
        if (funcionario.salarioBase >= 3000.0) {
          percentualDesconto = 20;
        }

        if (funcionario.salarioBase < 3000.0) {
          percentualDesconto = 10;
        }

        case "dba":
        if (funcionario.salarioBase >= 2000.0) {
          percentDeseconto = 25;
        }

        if (funcionario.salarioBase < 2000.0) {
            percentualDesconto = 15;
        }

        return (funcionario.salarioBase * (100 - percentualDesconto)) / 100;
    }
    }
  }
  
  module.exports = CalculadoraDeSalario;