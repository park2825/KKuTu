/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

const log4js = require('log4js');
const logConfig = require('./log4js.json');
let logger;

exports.init = function() {
	logger = log4js.getLogger();
	log4js.configure(logConfig);
	logger.level = 'ALL';
};

// legacy code
// function callLog(text){
// 	var date = new Date();
// 	var o = {
// 		year: 1900 + date.getYear(),
// 		month: date.getMonth() + 1,
// 		date: date.getDate(),
// 		hour: date.getHours(),
// 		minute: date.getMinutes(),
// 		second: date.getSeconds()
// 	}, i;
//
// 	for(i in o){
// 		if(o[i] < 10) o[i] = "0"+o[i];
// 		else o[i] = o[i].toString();
// 	}
// 	console.log("["+o.year+"-"+o.month+"-"+o.date+" "+o.hour+":"+o.minute+":"+o.second+"] "+text);
// }

exports.log = function(text){
	logger.info(text);
};
exports.info = function(text){
	logger.info(text);
};
exports.success = function(text){
	logger.info(text);
};
exports.alert = function(text){
	logger.warn(text);
};
exports.warn = function(text){
	logger.warn(text);
};
exports.error = function(text){
	logger.error(text);
};