#!/usr/bin/env node

import inquirer from 'inquirer';
import { Template1, Template2, Template3 } from './hooks/templates-hook.js';

const question = {
  type: 'list',
  name: 'componentType',
  message: '¿Qué componente quieres crear?',
  choices: ['Template1', 'Template2', 'Template3'],
};


inquirer.prompt(question).then(async (answer) => {
  switch (answer.componentType) {
    case 'Template1':
      Template1();
      break;
    case 'Template2':
      Template2();
      break;
    case 'Template3':
      Template3();
      break;
    default:
      console.log('Opción no válida');
  };
});