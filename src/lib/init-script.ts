import { LANG_STORAGE_KEY } from "@/components/providers/language-provider";
import { THEME_STORAGE_KEY } from "@/components/providers/theme-provider";

/**
 * Runs synchronously in <head> before hydration so the document direction,
 * language, and color theme are correct on the very first paint.
 */
export const initScript = `(function(){try{
var d=document.documentElement;
var lang=localStorage.getItem('${LANG_STORAGE_KEY}');
if(lang!=='en'&&lang!=='ar'){lang=((navigator.language||'en').slice(0,2)==='ar')?'ar':'en';}
d.lang=lang;d.dir=(lang==='ar')?'rtl':'ltr';
var t=localStorage.getItem('${THEME_STORAGE_KEY}');
if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
if(t==='dark'){d.classList.add('dark');}
}catch(e){}})();`;
