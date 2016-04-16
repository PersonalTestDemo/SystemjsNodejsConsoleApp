global.ts = require('typescript');
var System = require('systemjs');

System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    packages: { 'app': { defaultExtension: 'ts' } }
});

System.import('app/main')
    .then(null, console.error.bind(console));