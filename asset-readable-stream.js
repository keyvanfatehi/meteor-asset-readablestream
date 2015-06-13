var BufferStreamReader = Npm.require('buffer-stream-reader');

AssetReadableStream = function(_externalAssets) {
  return {
    get: function(name) {
      return new BufferStreamReader(new Buffer(_externalAssets.getBinary(name)));
    }
  }
}
