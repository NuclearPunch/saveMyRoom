import React from "react";


function srcConvert(str, opt) {

    if (!str) {
        return '';
    }
    if (!/^\/file\/download/.test(str)) {
        return str;
    }
    if (!opt) {
        opt = 1;
    }
    var match = str.match(/\/file\/download\/(\w+\.\w{2,5})/),
        result;


    match = match? match[1] : str;
    switch (opt) {
        case 1:
            result = '/file/download/small-' + match;
            break;

        case 2:
            result = '/file/download/medium-' + match;
            break;

        case 3:
            result = '/file/download/large-' + match;
            break;

        default:
            throw new Error('src2convert ' + opt + ' is default');
    }

    return result;
}//end of srcConvert


function isNumeric(text, option) {
    // 좌우 trim(공백제거)을 해준다.
    text = String(text).replace(/^\s+|\s+$/g, "");
    let regex;
    if(typeof option.toString() === "undefined" || option.toString() === "1"){
        // 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
        regex = /^[+]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    }else if(option.toString() === "2"){
        // 부호 미사용, 자릿수구분기호 선택, 소수점 선택
        regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    }else if(option.toString() === "3"){
        // 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
        regex = /^[0-9]+(\.[0-9]+)?$/g;
    }else{
        // only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
        regex = /^[0-9]$/g;
    }

    if( regex.test(text) ){
        text = text.replace(/,/g, "");
        return isNaN(text) ? false : true;
    } else {
        return false;
    }
}

function dehtmlSpecialChars(text) {

    if (!text) {

        return '';
    }
    if ( isNumeric(text, 1) ) {
        //text = String(text);

        text = text.toString();
        return text;
    }
    if ( typeof text != 'string' ) {
        return text;
    }

    return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
}//end of dehtmlSpecialChars


function numberComma(number) {
    if(number < 1){
        return 0;
    }
    return removeComma(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function removeComma(number) {
    return parseInt(number.toString().replace(/,/g,""));
}



function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

const imageExtension = ['HEIC', 'HEIF'];

function objToQueryString(obj) {
    const keyValuePairs = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
        keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`);
    }
    return keyValuePairs.join('&');
}



const baseUrl = `http://192.168.1.119:3001`;
const laspUrl = `http://192.168.0.102:5000`;

export default{
    srcConvert,
    dehtmlSpecialChars,

    numberComma,
    removeComma,
    laspUrl,
    baseUrl,
    replaceAll,
    objToQueryString,

}