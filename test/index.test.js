const { describe, expect, it } = require("@jest/globals");
const Calculadora = require("../src/services/avaliacao");

describe("Testes da calculadora", () => {
  const servico = new Calculadora();

  //Somar
  it("Should sum two numbers", () => {
    const result = servico.Somar(1, 2);
    expect(result).toBe(3);
  });

  it("Should sum two numbers", () => {
    const result = servico.Somar(2, 1);
    expect(result).toBe(3);
  });

  it("Should sum two numbers", () => {
    const result = servico.Somar(-2, 1);
    expect(result).toBe(-1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Somar(1, -2);
    expect(result).toBe(-1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Somar(-1, -1);
    expect(result).toBe(-2);
  });

  it("Should error", () => {
    const result = () => servico.Somar(1, "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Somar("a", 1);
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Somar("a", "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  //Subtrair
  it("Should sum two numbers", () => {
    const result = servico.Subtrair(1, 2);
    expect(result).toBe(-1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Subtrair(2, 1);
    expect(result).toBe(1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Subtrair(-2, 1);
    expect(result).toBe(-3);
  });

  it("Should sum two numbers", () => {
    const result = servico.Subtrair(1, -2);
    expect(result).toBe(3);
  });

  it("Should sum two numbers", () => {
    const result = servico.Subtrair(-1, -1);
    expect(result).toBe(0);
  });

  it("Should error", () => {
    const result = () => servico.Subtrair(1, "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Subtrair("a", 1);
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Subtrair("a", "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  //Multiplicar
  it("Should sum two numbers", () => {
    const result = servico.Multiplicar(1, 2);
    expect(result).toBe(2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Multiplicar(2, 1);
    expect(result).toBe(2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Multiplicar(-2, 1);
    expect(result).toBe(-2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Multiplicar(1, -2);
    expect(result).toBe(-2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Multiplicar(-1, -1);
    expect(result).toBe(1);
  });

  it("Should error", () => {
    const result = () => servico.Multiplicar(1, "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Multiplicar("a", 1);
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Multiplicar("a", "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  //Dividir
  it("Should sum two numbers", () => {
    const result = servico.Dividir(1, 2);
    expect(result).toBe(0.5);
  });

  it("Should sum two numbers", () => {
    const result = servico.Dividir(2, 1);
    expect(result).toBe(2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Dividir(-2, 1);
    expect(result).toBe(-2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Dividir(1, -2);
    expect(result).toBe(-0.5);
  });

  it("Should sum two numbers", () => {
    const result = servico.Dividir(-1, -1);
    expect(result).toBe(1);
  });

  it("Should error", () => {
    const result = () => servico.Dividir(1, "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Dividir("a", 1);
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Dividir("a", "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  //Potência
  it("Should sum two numbers", () => {
    const result = servico.Potencia(1, 2);
    expect(result).toBe(1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Potencia(2, 1);
    expect(result).toBe(2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Potencia(-2, 1);
    expect(result).toBe(-2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Potencia(1, -2);
    expect(result).toBe(1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Potencia(-1, -1);
    expect(result).toBe(-1);
  });

  it("Should error", () => {
    const result = () => servico.Potencia(1, "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Potencia("a", 1);
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });

  it("Should error", () => {
    const result = () => servico.Potencia("a", "a");
    console.log("Error");
    expect(result).toThrowError("Favor informar números");
  });
});
