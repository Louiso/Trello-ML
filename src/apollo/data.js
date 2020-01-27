import { mongoObjectId } from "../utils";

export const data = {
  boards: [{
    _id: 1,
    __typename: 'Board',
    title: 'ATS',
    createdBy: {
      _id: mongoObjectId(),
      __typename: 'User',
      firstName: 'Luis Alfredo',
      lastName: 'Sullca Huaracca',
      email: 'Gransullca.25@gmail.com'
    },
    columns: [{
      _id: mongoObjectId(),
      __typename: 'Column',
      tasks: [{
        _id: mongoObjectId(),
        __typename: 'Task',
        title: 'Cocinar',
        members: [{
          _id: mongoObjectId(),
          __typename: 'User',
          firstName: 'Luis Alfredo',
          lastName: 'Sullca Huaracca',
          email: 'luis.sullca.h@uni.pe'
        }, {
          _id: mongoObjectId(),
          __typename: 'User',
          firstName: 'Mayte',
          lastName: 'Samaniego',
          email: 'mayte2@gmail.com'
        }]
      }]
    }]
  }, {
    _id: 2,
    __typename: 'Board',
    title: 'Tablero 2',
    createdBy: {
      _id: mongoObjectId(),
      __typename: 'User',
      firstName: 'Luis Alfredo',
      lastName: 'Sullca Huaracca',
      email: 'Gransullca.25@gmail.com'
    },
    columns: [{
      _id: mongoObjectId(),
      __typename: 'Column',
      tasks: [{
        _id: mongoObjectId(),
        __typename: 'Task',
        title: 'Cocinar',
        members: [{
          _id: mongoObjectId(),
          __typename: 'User',
          firstName: 'Luis Alfredo',
          lastName: 'Sullca Huaracca',
          email: 'luis.sullca.h@uni.pe'
        }, {
          _id: mongoObjectId(),
          __typename: 'User',
          firstName: 'Mayte',
          lastName: 'Samaniego',
          email: 'mayte2@gmail.com'
        }]
      }]
    }]
  }]
}