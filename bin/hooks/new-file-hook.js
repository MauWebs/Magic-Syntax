#!/usr/bin/env node

// new-file-hook.js
import fs from 'fs-extra';
import path from 'path';
import gradient from 'gradient-string';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createFile = (fileName, content) => {
    // Ruta del nuevo archivo
    const dirPath = path.join(process.cwd(), 'src', 'components');
    const filePath = path.join(dirPath, fileName);

    // Asegurarse de que las carpetas existen
    fs.ensureDirSync(dirPath);

    // Crear el archivo con el contenido proporcionado
    fs.outputFileSync(filePath, content);

    const asciiArtPath = path.join(__dirname, '..', 'tx', 'successfully.txt');

    fs.readFile(asciiArtPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        // Mostrar el contenido del archivo con degradado
        console.log(gradient(['violet', '#F5A875'])(data));
    });
};

export default createFile;