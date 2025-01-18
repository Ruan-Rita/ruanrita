export default function ObjectGet(obj, keyPath) {
    return keyPath.split('.').reduce((acc, key) => {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
}