var cache = {},
    bodyStyle;

function getBodyStyleProperties(){
    if(!bodyStyle){
        var values = {},
            items = document.defaultView.getComputedStyle(document.body);

        for(var i = 0; i < items.length; i++){
            values[items[i]] = null;
        }
        bodyStyle = values;
    }
    return bodyStyle;
}

function venfix(property, target){
    var bodyStyle = getBodyStyleProperties();

    if(!target && cache[property]){
        return cache[property];
    }

    target = target || bodyStyle;

    var props = [];

    for(var key in target){
        cache[key] = key;
        props.push(key);
    }

    if(property in target){
        return property;
    }

    var propertyRegex = new RegExp('^(' + venfix.prefixes.join('|') + ')' + property + '$', 'i');

    for(var i = 0; i < props.length; i++) {
        if(props[i].match(propertyRegex)){
            if(target === bodyStyle){
                cache[property] = props[i]
            }
            return props[i];
        }
    }
}

// Add extensibility
venfix.prefixes = ['webkit', 'moz', 'ms', 'o'];

module.exports = venfix;