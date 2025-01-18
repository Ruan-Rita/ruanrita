export function Url(path) {
    const fullPath = '';
    const firstString = String(path).substring(0, 1);

    if (process.env.NODE_ENV !== 'development') {
        fullPath = '/RuanRita'
    }
    
    if (! firstString.includes('/')) {
        path = `/${path}` 
    }

    const pathToFile = `${fullPath}${path}`; 
    return pathToFile;
}