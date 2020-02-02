> Hola amigos de la #Nerdytud

Les comparto una forma realmente sencilla para la generación de una aplicación del tipo **CLI** con la librería **Caporal**


### Instalación
```bash
npm i caporal
```

### Código
```javascript
const prog = require('caporal');

prog
  .version('0.0.1')
  .help('Culpa cupidatat occaecat officia qui consectetur est cillum.')
  .command('deploy', 'Deploy de aplicaciones')
  .argument('<app>', 'Nombre de la app', /^myapp|otherapp$/)
  .argument('[env]', 'Nombre del entorno', /^dev|qa|prod$/, 'local')
  .action(function(args, options, logger) {
      console.log(args);
      logger.info("Deploy exitoso");
  });

prog.parse(process.argv);
```

### Ejecución
```bash
node index.js
```

### [Buy me a coffee ☕](https://www.buymeacoffee.com/HvQATbz)
