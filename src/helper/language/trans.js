import { useLanguage } from "../../context/language-context";
import ObjectGet from "../object-get";
import languageEn from './languageEn.json'
import languagePt from './languagePt.json'

export default function Trans(key_trans) {
    const {language} = useLanguage();
        
    if (language === 'en') {
        return ObjectGet(languageEn, key_trans) || ObjectGet(languageEn, key_trans) || '';
    }
    
    return ObjectGet(languagePt, key_trans) || ObjectGet(languageEn, key_trans) || '';
}


