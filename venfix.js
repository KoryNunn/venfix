var props,
    cache = {};

function venfix(property){
    if(cache[property]){
        return cache[property];
    }

    if(!props){
        props = Object.keys(document.body.style);
    }

    if(property in document.body.style){
        return property;
    }

    for(var i = 0; i < props.length; i++) {
        if(props[i].match(new RegExp('(' + venfix.prefixes.join('|') + ')'+property, 'i'))){
            return cache[property] = props[i];
        }
    }
}

// Add extensibility
venfix.prefixes = ['webkit', 'moz', 'ms', 'o'];

module.exports = venfix;