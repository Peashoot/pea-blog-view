'use strict'

import cryptoJs from 'crypto-js'

export default {
  /**
   * MD5加密
   * @param word 待加密字符串
   */
  md5Hash (word: string): string {
    return cryptoJs.MD5(word).toString()
  }
}
