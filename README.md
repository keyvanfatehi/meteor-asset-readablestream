# meteor-asset-readablestream
Load a Meteor Asset as a readable stream

## Installation

`meteor add keyvan:asset-readable-stream`

## Usage

Only on the server, you will have a new global function AssetReadableStream used as such:

```javascript
AssetReadableStream(Assets).get('some-file').pipe(this.response);
```

## Why?

I created this because I use IronRouter's server-side methods to serve files and it's very convenient to be able to simply `pipe()` data to the response object.
