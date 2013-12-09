## venfix

## Wat

venfix will give you the right vendor prefixed css name for a property you pass it.

## Usage

    venfix('translate'); // -> webkitTranslate or mozTranslate etc

you can also pass it a different object and venfix will scan it for vendorized properties, eg window:

    venfix('requestFileSystem', window); // -> webkitRequestFileSystem

venfix will cache css properties for next time, so it should be pretty quick.