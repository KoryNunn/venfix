var props;

function venfix(property){
    if(cache[property]){
        return cache[property];
    }

    if(!props){
        props = Object.keys(document.body);
    }

    if(property in document.body){
        return property;
    }

    for(var i = 0; i < props.length; i++) {
        if(props[i].match(new RegExp(property, 'i'))){
            return cache[property] = props[i];
        }
    }
}

module.exports = venfix;