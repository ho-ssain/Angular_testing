import { LoggerService } from './logger.service';

describe('loggerService', () => {
  let service: LoggerService;
  beforeEach(() => {
    service = new LoggerService();
  });

  it('should not have any messages at starting', () => {
    //arrange
    //act
    let count = service.message.length;

    //assert
    expect(count).toBe(0);
  });

  it('should add the message when log is called!', () => {
    //act
    service.log('message');

    //assert
    expect(service.message.length).toBe(1);
  });

  it('should clear all the messages!', () => {
    service.log('message');

    //act
    service.clear();

    //assert
    expect(service.message.length).toBe(0);
  });
});
