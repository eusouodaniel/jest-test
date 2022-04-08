import OperationsService from '../../src/services/operations.service';

describe('Fibonacci', () => {
    const operationsService = new OperationsService();

    it('test find position 10 in fibonacci', async () => {
        const result = operationsService.getFibonacciElement(10);
        expect(result).toEqual(
            55
        );
    })

    it('test find position 2 in fibonacci', async () => {
        const result = operationsService.getFibonacciElement(2);
        expect(result).toEqual(
            1
        );
    })

    it('test number 0', async () => {
        const result = operationsService.getFibonacciElement(0);
        expect(result).toEqual(
            operationsService.FIBONNACI_BIGGER_THAN_ZERO
        );
    })

    it('test number < 0', async () => {
        const result = operationsService.getFibonacciElement(-2);
        expect(result).toEqual(
            operationsService.FIBONNACI_BIGGER_THAN_ZERO
        );
    })
})