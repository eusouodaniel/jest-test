class OperationsService {

  public CHAIN_CHARACTERS_INVALID_CHAIN = "Cadeia Inválida.";
  public CHAIN_CHARACTERS_INVALID_CHARACTERE = "Caractere inválido.";
  public FIBONNACI_BIGGER_THAN_ZERO = "n deve ser maior que zero.";

  public TRIANGLE_NON_EXISTENT = "INEXISTENTE" 
  public TRIANGLE_ISOSCELES = "ISOSCELES"
  public TRIANGLE_SCALENE = "ESCALENO"
  public TRIANGLE_EQUILATERAL = "EQUILATERO"

  public getCharacterPosition(chain, character) {
    if (chain.length == 0 || chain.length > 20) {
      return this.CHAIN_CHARACTERS_INVALID_CHAIN;
    }
    if (character.length != 1) {
      return this.CHAIN_CHARACTERS_INVALID_CHARACTERE;
    }
    for (let i = 1; i <= chain.length; i++) {
      if (chain[i-1].toString() == character) {
        return i;
      }
    }

    return -1;
  }

  public getFibonacciElement(n) {
    if (n < 1) {
      return this.FIBONNACI_BIGGER_THAN_ZERO;
    }
    let elementoAnterior1 = 1;
    let elementoAnterior2 = 1;
    let elementoAtual = elementoAnterior1;
    if (n == 2) {
      elementoAtual = elementoAnterior1;
    } else {
      for (let i = 3; i <= n; i++) {
        elementoAtual = elementoAnterior1 + elementoAnterior2;
        elementoAnterior1 = elementoAnterior2;
        elementoAnterior2 = elementoAtual;
      }
    }

    return elementoAtual;
  }

  public getTriangleType(a, b, c) {
    let tipo = this.TRIANGLE_SCALENE;
    if (a <= 0 || b <= 0 || c <= 0) {
      tipo = this.TRIANGLE_NON_EXISTENT;
    } else {
      if (!(a + b > c && a + c > b && b + c > a)) {
        tipo = this.TRIANGLE_NON_EXISTENT;
      } else {
        if (a == b) {
          tipo = this.TRIANGLE_ISOSCELES;
          if (b == c) {
            tipo = this.TRIANGLE_EQUILATERAL;
          }
        } else {
          if (b == c || a == c) {
            tipo = this.TRIANGLE_ISOSCELES;
          }
        }
      }
    }

    return tipo;
  }

}

export default OperationsService;