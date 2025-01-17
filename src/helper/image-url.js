export function ImageUrl(path) {
    const fullPath = '';
    const firstString = String(path).substring(0, 1);

    console.log('TEST', process.env.NODE_ENV);
    
    if (process.env.NODE_ENV !== 'development') {
        console.log(`is here`);
        
        fullPath = '/RuanRita'
    }
    
    if (! firstString.includes('/')) {
        path = `/${path}` 
    }

    const pathToFile = `${fullPath}${path}`; 
    console.log(`PATH`, pathToFile);
    return pathToFile;
}