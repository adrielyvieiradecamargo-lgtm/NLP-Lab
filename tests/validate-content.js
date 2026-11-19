/* Executar com: node tests/validate-content.js */
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(new URL('../js/content.js', `file://${__filename}`), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);
const data = sandbox.window.NLPCONTENT;
const fail = [];
if (data.modules.length !== 8) fail.push(`Esperados 8 módulos; encontrados ${data.modules.length}.`);
const units = data.modules.flatMap(m => m.units);
if (units.length !== 24) fail.push(`Esperadas 24 unidades; encontradas ${units.length}.`);
const ids = new Set();
for (const m of data.modules) {
  if (m.units.length !== 3) fail.push(`Módulo ${m.id} não possui exatamente 3 unidades.`);
  for (const u of m.units) {
    if (ids.has(u.id)) fail.push(`ID duplicado: ${u.id}.`);
    ids.add(u.id);
    if (!u.objective || !u.lead || !u.sections?.length || !u.bullets?.length || !u.question || !u.options?.length || typeof u.correct !== 'number' || !u.feedback) {
      fail.push(`Unidade incompleta: ${u.id}.`);
    }
    if (u.correct < 0 || u.correct >= u.options.length) fail.push(`Gabarito fora do intervalo em ${u.id}.`);
  }
}
if (data.glossary.length < 20) fail.push('Glossário com menos de 20 entradas.');
if (data.references.length < 8) fail.push('Menos de 8 referências.');
if (data.concepts.length < 20) fail.push('Menos de 20 conceitos.');
if (fail.length) {
  console.error('FALHAS DE CONTEÚDO:\n- ' + fail.join('\n- '));
  process.exit(1);
}
console.log(`OK: ${data.modules.length} módulos, ${units.length} unidades, ${data.concepts.length} conceitos, ${data.glossary.length} termos e ${data.references.length} referências.`);
