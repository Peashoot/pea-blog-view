import utils from './utils';
import fingerprint from './fingerprint';
import iphelper from 'http://pv.sohu.com/cityjson?ie=utf-8';

function Visitor() {
    let os = {};
    utils.setOsData(os);
    // 浏览器名称
    this.broswer = utils.getBrowser();
    // 客户端外网IP
    this.ip = iphelper.returnCitySN['cip'];
    // 客户端系统版本
    this.os = os.name;
    // 外网IP对应区域
    this.location = iphelper.returnCitySN['cname'];
    // 浏览器canvas指纹
    this.fingerprint = new fingerprint.Fingerprint({ canvas: true }).get();
    // 访客名称
    this.name = "";
}