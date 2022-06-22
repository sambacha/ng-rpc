import { Module, Injectable } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  ClientsModule,
  Transport,
  ClientsModuleOptionsFactory,
  ClientOptions,
  ClientTCP,
  RpcException,
} from '@nestjs/microservices';

class ErrorHandlingProxy extends ClientTCP {
  serializeError(err) {
    return new RpcException(err);
  }
}
