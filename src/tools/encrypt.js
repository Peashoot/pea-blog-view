'use strict'

import cryptoJs from 'crypto-js'
let keyOne = '313233343536373a'

export default {
    // 加密函數
    md5Hash(word) {
        return cryptoJs.MD5(word).toString();
    }
}