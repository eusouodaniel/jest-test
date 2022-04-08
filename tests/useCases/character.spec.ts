import OperationsService from '../../src/services/operations.service';

describe('Character', () => {
    const operationsService = new OperationsService();

    it('test find i in chain character', async () => {
        const result = operationsService.getCharacterPosition("isso é um teste", "i");
        expect(result).toEqual(
            1
        );
    })

    it('test find u in chain character', async () => {
        const result = operationsService.getCharacterPosition("isso é um teste", "u");
        expect(result).toEqual(
            8
        );
    })

    it('test invalid chain = 0 character', async () => {
        const result = operationsService.getCharacterPosition("", "u");
        expect(result).toEqual(
            operationsService.CHAIN_CHARACTERS_INVALID_CHAIN
        );
    })

    it('test invalid chain = > 20 characters', async () => {
        const result = operationsService.getCharacterPosition("isso é um testeisso é um teste", "u");
        expect(result).toEqual(
            operationsService.CHAIN_CHARACTERS_INVALID_CHAIN
        );
    })

    it('test invalid character = > 1', async () => {
        const result = operationsService.getCharacterPosition("isso é um teste", "dd");
        expect(result).toEqual(
           operationsService.CHAIN_CHARACTERS_INVALID_CHARACTERE
        );
    })

    it('test invalid character', async () => {
        const result = operationsService.getCharacterPosition("isso é um teste", "d");
        expect(result).toEqual(
           -1
        );
    })
})