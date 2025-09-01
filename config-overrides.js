module.exports = function override(config, env) {
  // Désactiver complètement le source-map-loader pour éliminer tous les warnings
  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.filter(rule => {
      // Filtrer les règles qui contiennent source-map-loader
      if (rule.use && Array.isArray(rule.use)) {
        return !rule.use.some(use => 
          use.loader && use.loader.includes('source-map-loader')
        );
      }
      // Filtrer aussi les règles avec oneOf
      if (rule.oneOf && Array.isArray(rule.oneOf)) {
        rule.oneOf = rule.oneOf.filter(oneOfRule => {
          if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
            return !oneOfRule.use.some(use => 
              use.loader && use.loader.includes('source-map-loader')
            );
          }
          return true;
        });
      }
      return true;
    });
  }

  // Désactiver également la génération de source maps
  config.devtool = false;
  
  return config;
};
