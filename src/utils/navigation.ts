export const removePrefix = (path: string, prefix: string) => {
    if(!path){
        return ""
    }
    if (path.startsWith(prefix)) {
        return path.substring(prefix.length);
    }
    return path;
}

export const appendPrefix = (path: string, prefix: string) => {
    if(!path){
        return ""
    }
    if (path.startsWith(prefix)) {
        return path;
    }
    return `${prefix}/${path}`;
}
