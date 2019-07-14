import { Component, OnInit } from '@angular/core';

export class CustomerModel {

  public name: string;
  public nip: number;
  public street: string;
  public postCode: string;
  public city: string;
  public country: string;
  public dateCreated: Date;
  
  constructor() { }
}
