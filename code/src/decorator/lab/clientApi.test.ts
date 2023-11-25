import { Customer } from './customer';
import { CustomerApi } from './decoratorApi/customerApi';
import { CustomerWrappedApi } from './decoratorApi/customerWrappedApi';
import { EncryptedCustomerApi } from './decoratorApi/encryptedCustomerApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should build response with wrapped status and data', () => {

    //given
    const api = new CustomerApi();
    const wrappedApi = new CustomerWrappedApi(api);
    const expectedData = {
      status: 'ok',
      data: {
        customer: new Customer('John', 'Doe', 30)
      }
    };

    //when
    const result = wrappedApi.get();

    //then
    expect(result).toEqual(expectedData);
  });

  it('should return response with encrypted customer data', () => {
    
    //given
    const api = new CustomerApi();
    const encryptedApi = new EncryptedCustomerApi(api);
    const expectedData = {
      name: 'encrypted John',
      lastName: 'encrypted Doe',
      age: 30,
    };

    //where
    const result = encryptedApi.get();
    
    //then
    expect(result).toEqual(expectedData);
  });

  it('should return response with encrypted customer data wrapped with status and data', () => {
      //given
      const api = new CustomerApi();
      const encryptedApi = new EncryptedCustomerApi(api);
      const wrappedApi = new CustomerWrappedApi(encryptedApi);
      const expectedData = {
        status: 'ok',
        data: {
          customer: {
            name: 'encrypted John',
            lastName: 'encrypted Doe',
            age: 30,
          }
        }
      };

      //when
      const result = wrappedApi.get();

      //then
      expect(result).toEqual(expectedData);
  });
});
