exports.BOOTSTRAP_CONFIG = 0
exports.BOOTSTRAP_PLUGINS = 1
exports.BOOTSTRAP_GRAPHQL = 2
exports.BOOTSTRAP_FULL = Number.MAX_SAFE_INTEGER

exports.internalRE = /^internal\:\/\//
exports.transformerRE = /(?:^@?gridsome[/-]|\/)transformer-([\w-]+)/