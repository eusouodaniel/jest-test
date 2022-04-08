import OperationsService from './services/operations.service';

class App {
    initApp() {
        const operationsService = new OperationsService();
        operationsService.getCharacterPosition();
        operationsService.getFibonacciElement();
        operationsService.getTriangleType();
    }
}

export default new App();