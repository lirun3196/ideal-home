// Libs
import React from 'react';
import axios from 'axios';
import { Spin, message } from 'antd';
import { copyToClipboard } from '../util';

import './index.css';

const errMsgs = {
  '17': '今日识别次数已用完，请明天再试',
  '19': '识别次数已用完，请明天再试',
};

class Ocr extends React.Component {
  state = {
    recogResult: '',
    polymer: [],
    loading: false,
  };
  handleResult = result => {
    const { words_result, error_msg, error_code } = result;
    if (error_code) {
      const errMsg = [17, 19].includes(error_code)
        ? errMsgs[`${error_code}`]
        : error_msg;
      return message.error(errMsg);
    }
    const recogResult = words_result.map(i => i.words).join('\n');
    this.setState({ recogResult });
  };
  handleImage = e => {
    const eve = e;
    const file = eve.target.files[0];
    const reader = new FileReader();
    const self = this;
    reader.onload = function() {
      var base64 = reader.result.replace(/data:image\/.*;base64,/, '');
      // console.log(base64);
      self.recognizeImage(base64);
    };
    reader.readAsDataURL(file);
  };
  recognizeImage = imageInfo => {
    const setLoadingFalse = () =>
      this.setState({
        loading: false,
      });
    this.setState({
      loading: true,
    });
    const { handleResult } = this;
    axios({
      url: 'http://judasnow.ml/ocr',
      method: 'post',
      data: `imageInfo=${encodeURIComponent(imageInfo)}`,
      timeout: 120000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(responseAsJson => {
        handleResult(responseAsJson.data);
        setLoadingFalse();
      })
      .catch(function(error) {
        message.error(`${error}`);
        setLoadingFalse();
      });
  };
  copyResult = () => {
    copyToClipboard(this.state.recogResult);
    message.success('复制成功！');
  };
  handleResultChange = e => {
    this.setState({
      recogResult: e.target.value,
    });
  };
  handleShowTip = tipMsg => {
    this.setState({
      showTip: true,
      tipMsg,
    });
  };
  copyPolymer = () => {
    copyToClipboard(this.state.polymer.join('\n'));
    message.success('复制成功！');
  };
  addtToPolymer = () => {
    const { polymer, recogResult } = this.state;
    this.setState({
      polymer: polymer.concat(recogResult),
    });
  };
  render() {
    const { recogResult, polymer, loading } = this.state;
    return (
      <div className="ocr-wrapper">
        <Spin spinning={loading} tip="识别中..." delay={300}>
          <label htmlFor="ocr-file" className="btn btn-primary btn-ocr">
            选择图片
          </label>
          <input
            type="file"
            id="ocr-file"
            onChange={this.handleImage}
            className="btn-choose-file"
            accept="image/png, image/jpeg"
            hidden={true}
          />
          {!!recogResult && (
            <div>
              <textarea
                className="recog-result"
                value={recogResult}
                onChange={this.handleResultChange}
              />
              <button
                className="btn btn-primary btn-ocr"
                onClick={this.copyResult}
              >
                复制识别结果
              </button>
              <button
                className="btn btn-default btn-ocr"
                onClick={this.addtToPolymer}
              >
                添加到聚合板
              </button>
            </div>
          )}
          {!!polymer.length && (
            <div>
              <textarea
                className="recog-result"
                value={polymer.join('\n')}
                readOnly={true}
              />
              <button
                className="btn btn-default btn-ocr"
                onClick={this.copyPolymer}
              >
                复制聚合内容
              </button>
            </div>
          )}
        </Spin>
      </div>
    );
  }
}

export default Ocr;
