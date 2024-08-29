#!/usr/bin/env node

import inquirer from 'inquirer';
import { Template1, Template2, Template3 } from './hooks/templates-hook.js';
import { startServer, stopServer } from './server/express.js';

startServer();

const question = {
  type: 'list',
  name: 'componentType',
  message: '¿Qué componente quieres crear?',
  choices: ['Template1', 'Template2', 'Template3'],
};

inquirer.prompt(question).then(async (answer) => {

  switch (answer.componentType) {
    case 'Template1':
      await Template1();
      break;
    case 'Template2':
      await Template2();
      break;
    case 'Template3':
      await Template3();
      break;
    default:
      console.log('Opción no válida');
  }

  stopServer();

});