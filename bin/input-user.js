#!/usr/bin/env node

// import { getDeviceInfo } from './hooks/device-hook.js';

// console.log(getDeviceInfo());

import inquirer from 'inquirer';
import { fetchDataBasic } from './api/services/basic-components-services.js';

async function input() {

  const components = await fetchDataBasic();

  const choices = components.map(component => ({
    name: `${component.name} (${component.plan})`,
    value: component.id
  }));

  const question = {
    type: 'list',
    name: 'componentType',
    message: '¿Qué componente quieres crear?',
    choices: choices,
  };

  inquirer.prompt(question).then(async (answer) => {
    console.log('Componente seleccionado:', answer.componentType);
  });

};

input();