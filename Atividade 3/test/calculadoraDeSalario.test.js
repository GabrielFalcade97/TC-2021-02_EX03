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
});