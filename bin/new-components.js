#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { prompt } = require('enquirer');
const clc = require('cli-color');
const gradient = require('gradient-string');

const createFile = (fileName, content, componentName) => {
  // Ruta del nuevo archivo
  const dirPath = path.join(process.cwd(), 'src', 'components');
  const filePath = path.join(dirPath, fileName);

  // Asegurarse de que las carpetas existen
  fs.ensureDirSync(dirPath);

  // Crear el archivo con el contenido proporcionado
  fs.outputFileSync(filePath, content);

  const asciiArtPath = path.join(__dirname, 'ascii-art.txt');

  fs.readFile(asciiArtPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    // Mostrar el contenido del archivo con degradado
    console.log(gradient(['violet', '#F5A875'])(data));
  });
};

const componentName1 = 'Componente1';
const fileName1 = 'Componente1.jsx';

const componentName2 = 'Componente2';
const fileName2 = 'Componente2.jsx';

// Pregunta para el usuario
const question = {
  type: 'select',
  name: 'componentType',
  message: '¿Qué componente quieres crear?',
  choices: ['Componente 1', 'Componente 2'],
};

prompt(question).then(answer => {
  const { componentType } = answer;

  const reactComponent1 = `import React from 'react';

const ${componentName1} = () => {
  return (
    <div>
      <h1>Hola, soy el componente ${componentName1}!</h1>
    </div>
  );
};

export default ${componentName1};`;

const reactComponent2 = `import React from 'react';

const ${componentName2} = () => {
  return (
    <div>
      <h1>Hola, soy el componente ${componentName2}!</h1>
    </div>
  );
};

export default ${componentName2};`;

  if (componentType === 'Componente 1') {
    createFile(fileName1, reactComponent1, componentName1);
  } else {
    createFile(fileName2, reactComponent2, componentName2);
  }
});