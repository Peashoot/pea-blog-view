'use strict'

/**
 * OS匹配规则
 */
export class OsMatcher {
    /**
     * 名称
     */
    name: string;
    /**
     * 分组
     */
    group:string;
    /**
     * 匹配标识
     */
    identifier: string;
    /**
     * 版本
     */
    version?: string;
    /**
     * 版本分隔符
     */
    versionSeparator?: string;
    /**
     * 版本标识符
     */
    versionIdentifier?: string;
    constructor() {
        this.name = this.group = this.identifier = "未知";
    }
};

/**
 * 已知OS集合
 */
let osData: OsMatcher[] = [
    { name: 'Windows 2000', group: 'windows_server', identifier: 'Windows NT 5.0', version: '5.0'},
    { name: 'Windows XP', group: 'windows', identifier: 'Windows NT 5.1', version: '5.1'},
    { name: 'Windows 2003', group: 'windows_server', identifier: 'Windows NT 5.2', version: '5.2'},
    { name: 'Windows Vista', group: 'windows', identifier: 'Windows NT 6.0', version: '6.0'},
    { name: 'Windows 7', group: 'windows', identifier: 'Windows NT 6.1', version: '7.0'},
    { name: 'Windows 8', group: 'windows', identifier: 'Windows NT 6.2', version: '8.0'},
    { name: 'Windows 8.1', group: 'windows', identifier: 'Windows NT 6.3', version: '8.1'},
    { name: 'Windows 10', group: 'windows', identifier: 'Windows NT 10.0', version: '10.0'},
    { name: 'Windows 2008', group: 'windows_server', identifier: 'Windows NT 6.0; WOW64', version: '6.0'},
    { name: 'Windows 2008', group: 'windows_server', identifier: 'Windows NT 6.1; WOW64', version: '6.1'},
    { name: 'Windows 2012', group: 'windows_server', identifier: 'Windows NT 6.3; Win64', version: '6.3'},
    { name: 'Chrome OS', group: 'windows', identifier: 'CrOS'},
    { name: 'Mac OS X Capitan', group: 'mac', identifier: 'Mac OS X (10([_|\.])11([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Yosemite', group: 'mac', identifier: 'Mac OS X (10([_|\.])10([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Mavericks', group: 'mac', identifier: 'Mac OS X (10([_|\.])9([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Mountain Lion', group: 'mac', identifier: 'Mac OS X (10([_|\.])8([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Lion', group: 'mac', identifier: 'Mac OS X (10([_|\.])7([0-9_\.]*))', versionSeparator: '[_|\.]' },
    { name: 'Mac OS X Snow Leopard', group: 'mac', identifier: 'Mac OS X (10([_|\.])6([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Leopard', group: 'mac', identifier: 'Mac OS X (10([_|\.])5([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Tiger', group: 'mac', identifier: 'Mac OS X (10([_|\.])4([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Panther', group: 'mac', identifier: 'Mac OS X (10([_|\.])3([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Jaguar', group: 'mac', identifier: 'Mac OS X (10([_|\.])2([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Puma', group: 'mac', identifier: 'Mac OS X (10([_|\.])1([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS X Cheetah', group: 'mac', identifier: 'Mac OS X (10([_|\.])0([0-9_\.]*))', versionSeparator: '[_|\.]'},
    { name: 'Mac OS', group: 'mac', identifier: 'Mac OS'},
    { name: 'Ubuntu', group: 'linux_server', identifier: 'Ubuntu', versionIdentifier: 'Ubuntu/([0-9\.]*)' },
    { name: 'CentOs', group: 'linux_server', identifier: 'CentOs', versionIdentifier: 'CentOs/([0-9\.]*)' },
    { name: 'Debian', group: 'linux_server', identifier: 'Debian'},
    { name: 'Gentoo', group: 'linux_server', identifier: 'Gentoo'},
    { name: '国产系统', group: 'linux', identifier: 'Linux'}
];

/**
 * 获取当前OS信息
 * @param os os信息
 */
export function setOsData(): OsMatcher {
    let userAgent = navigator.userAgent.toLowerCase();
    console.log(userAgent);
    // Check browser type
    for (let i in osData) {
        if (osData.hasOwnProperty(i)) {
            let osRegExp = new RegExp(osData[i].identifier.toLowerCase());
            let osRegExpResult = osRegExp.exec(userAgent);

            if (osRegExpResult != null) {
                return osData[i];
            }
        }
    }
    return new OsMatcher();
};

/**
 * 获取浏览器类型
 */
export function getBrowser() :string {
    let browserName = navigator.userAgent.toLowerCase();
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        return "IE";
    } else if (/firefox/i.test(browserName)) {
        return "Firefox";
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        return "Chrome";
    } else if (/opera/i.test(browserName)) {
        return "Opera";
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        return "Safari";
    } else {
        return "unKnow";
    }
};

/**
 * 2进制转16进制
 * @param binStr 2进制字符串
 */
function bin2hex(binStr: string): string {
    let i: number, l: number, hexStr = '', n: string;
    binStr += '';
    for (i = 0, l = binStr.length; i < l; i++) {
        n = binStr.charCodeAt(i)
            .toString(16);
        hexStr += n.length < 2 ? '0' + n : n;
    }
    return hexStr;
};
/**
 * 获取浏览器canvas指纹
 * @param domain 请求域名
 */
export function getFingerprint(domain: string) :string {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext("2d");
    let txt = domain;
    if (ctx == null) {
        return "error";
    }
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    let b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
    let bin = atob(b64);
    let crc = bin2hex(bin.slice(-16, -12));
    return crc;
};
