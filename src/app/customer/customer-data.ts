import { CustomerModel } from './customer-model';

export const CUSTOMERS: CustomerModel[] = [
   {
       name: 'First Default Customer',
       nip: '7352221133',
       street: 'SteetName 01',
       postCode: '32-300',
       city: 'CityName',
       country: 'CountryName',
       dateCreated: new Date()
   },
   {
        name: 'Second Default Customer',
        nip: '7352221133',
        street: 'SteetName 02',
        postCode: '32-300',
        city: 'CityName02',
        country: 'CountryName02',
        dateCreated: new Date()
   }
];