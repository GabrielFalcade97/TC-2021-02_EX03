const CalculadoraDeSalario = require("../lib/calculadoraDeSalario");

const calculadoraDeSalario = new CalculadoraDeSalario();

const cargos = {
  DESENVOLVEDOR: "desenvolvedor",
  DBA: "dba",
  TESTADOR: "testador",
  GERENTE: "gerente",
};

describe("CalculadoraDeSalario", () => {
  test("verificando os campos do funcionario", () => {
    let funcionario = {
      nome: "",
      email: "paulo.roberto@mail.com",
      salarioBase: 7000.0,
      cargo: cargos.GERENTE,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(
      "campos 'nome', 'email', 'salarioBase' e 'cargo' tem que ser validos!"
    );
  });

  test("validando o salario do desenvolvedor >= 3000.00", () => {
    let funcionario = {
      nome: "João Souza",
      email: "jsouza@mail.com",
      salarioBase: 3500.0,
      cargo: cargos.DESENVOLVEDOR,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(2800.0);
  });

  test("validando o salario do desenvolvedor < 3000.00", () => {
    let funcionario = {
      nome: "Valter Dias",
      email: "vDias@mail.com",
      salarioBase: 2870.0,
      cargo: cargos.DESENVOLVEDOR,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(2520.0);
  });

  test("validando o salario do dba >= 2000.00", () => {
    let funcionario = {
      nome: "Roberto Carlos",
      email: "carlosRoberto@mail.com",
      salarioBase: 3500.0,
      cargo: cargos.DBA,
    };
    expect(calculadoraDeSalario.calculaSalario(funcionario)).toBe(2334.78);
  });

});
