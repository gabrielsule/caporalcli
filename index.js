const prog = require('caporal');

prog
  .version('0.0.1')
  .help('Culpa cupidatat occaecat officia qui consectetur est cillum.')
  .command('deploy', 'Deply de aplicaciones')
  .argument('<app>', 'Nombre de la app', /^myapp|otherapp$/)
  .argument('[env]', 'Nombre del entorno', /^dev|qa|prod$/, 'local')
  .action(function(args, options, logger) {
      console.log(args);
      logger.info("Deploy exitoso");
  });

prog.parse(process.argv);