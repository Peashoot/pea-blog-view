import * as utils from './utils';
import fingerprint from './fingerprint';
import http from 'http';

class Visitor {
    /**
     * 浏览器名称
     */
    broswer: string;
    /**
     * 客户端外网IP
     */
    public ip: string;
    /**
     * 外网IP对应区域
     */
    location: string;
    /**
     *  客户端系统版本
     */
    os: string;
    /**
     * 浏览器canvas指纹
     */
    fingerprint: string;
    /**
     * 访客名称
     */
    name: string;
    constructor() {
        let osData = utils.setOsData();
        this.broswer = utils.getBrowser();
        this.os = osData.name;
        this.fingerprint = new fingerprint({ canvas: true }).get();
        this.name = this.location = this.ip = "";
        this.generateName();
    };
    
//     this.ip = iphelper.returnCitySN['cip'];
//     this.location = iphelper.returnCitySN['cname'];

    queryIPAndLocation() {
        let options: http.RequestOptions = {
            hostname: "pv.sohu.com",
            path: '/cityjson?ie=utf-8',
            method: 'GET'
        }
        let temObj: Visitor = this;
        let req = http.request(options, function(res: http.IncomingMessage) {
            res.setEncoding('utf8');
            res.on('data', function (chunk:any) {
                let body = <string>chunk;
                body = body.replace("var returnCitySN = ", "");
                let bodyJson = JSON.parse(body);
                temObj.ip = bodyJson["cip"];
                temObj.location = bodyJson["cname"];
            })
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        req.end();
    };
    /**
     * 生成访客名称
     */
    generateName() {
        let body = {
            visitorIp: this.ip,
            browserFingerprint: fingerprint,
            visitTime: new Date(),
            location: this.location,
            os: this.os
        }
        let options: http.RequestOptions = {
            hostname: "127.0.0.1",
            port: 8081,
            path: '/visitor/generate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
        let temObj: Visitor = this;
        let req = http.request(options, function(res: http.IncomingMessage) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                console.log('BODY: ' + chunk);
                let resBody = JSON.parse(chunk);
                if (resBody["code"] == "200") {
                    temObj.name = resBody["data"]["visitorName"];
                }
            });
        });
        req.write(JSON.stringify(body));
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
        req.end();
    };
}
