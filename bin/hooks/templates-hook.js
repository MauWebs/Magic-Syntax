#!/usr/bin/env node

import { fetchData1, fetchData2, fetchData3 } from '../api/services/templates-api.js';
import createFile from './new-file-hook.js';

async function Template1() {
    const data = await fetchData1();
    createFile(`${data.id}.jsx`, data.body);
};

async function Template2() {
    const data = await fetchData2();
    createFile(`${data.id}.jsx`, data.body);
};

async function Template3() {
    const data = await fetchData3();
    createFile(`${data.id}.jsx`, data.body);
};

export { Template1, Template2, Template3 };