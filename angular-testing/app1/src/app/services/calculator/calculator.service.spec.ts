import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('calculatorService', () => {
  let calculator: any;
  let mockLoggerService: any;

  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('loggerService', ['log']);
    // spyOn(loggerService, 'log');
    calculator = new CalculatorService(mockLoggerService);
  });

  it('should add two numbers', () => {
    let result = calculator.add(2, 3);
    expect(result).toBe(5);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let result = calculator.subtract(6, 3);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
