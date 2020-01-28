const formatTime = date => {  
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function recordTime(date) {

  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()

  return [month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':')
}

/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function formatTimeTwo(number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

/**
 * requestPromise用于将wx.request改写成Promise方式
 * @param：{string} myUrl 接口地址
 * @return: Promise实例对象
 */
const requestPromise = (myUrl, myData, myMethod) => {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    console.log("in promise")
    console.log(myUrl + ' ' + myData)
    wx.request({
      url: myUrl,
      data: myData,
      method: myMethod,
      success: res => resolve(res)
    })
  })
}

 /**
 * 从本地相册选择图片或使用相机拍照。
 * @param {number} count 最多可选图片的数量
 * @param {array} sizeType original 原图，compressed 压缩图
 * @param {array} sourceType album 从相册选图，camera 使用相机
 */
const chooseImage = (count = 1, sizeType = ['compressed'], sourceType = ['album', 'camera'])=> {
  return new Promise((resolve, reject) => wx.chooseImage({ count, sizeType, sourceType, success: resolve, fail: reject }));
}

/**
 * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
 * @param {boolean} compressed 是否压缩
 * @param {array} sourceType album 从相册选图，camera 使用相机
 * @param {number} maxDuration 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
*/
const chooseVideo = (compressed = true, sourceType = [ 'camera'], maxDuration = 60)=>{
  return new Promise((resolve, reject) => wx.chooseVideo({ sourceType, compressed, maxDuration, success: resolve, fail: reject }));
}

  /**
 * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求
 * @param {string} url 开发者服务器 url
 * @param {string} filePath 要上传文件资源的路径
 * @param {string} name 
 * @param {object} formData HTTP 请求中其他额外的 form data
 */
const uploadFile=(url, filePath, name, formData = { openid: "test" })=> {
  return new Promise((resolve, reject) => {
    let opts = { url, filePath, name, formData, header: { 'Content-Type': "multipart/form-data" }, success: resolve, fail: reject };
    wx.uploadFile(opts);
  });
}

module.exports = {
  formatTime: formatTime,
  formatTimeTwo: formatTimeTwo,
  recordTime: recordTime,
  requestPromise: requestPromise,
  chooseImage: chooseImage,
  chooseVideo: chooseVideo,
  uploadFile, uploadFile
}
