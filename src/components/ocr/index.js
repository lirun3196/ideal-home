// Libs
import React from 'react';

class Ocr extends React.Component {
  state: {};
  handleImage = e => {
    const eve = e;
    console.info(eve);
    console.info(eve.target);
    console.info(eve.target.files);
    const file = eve.target.files[0];
    const reader = new FileReader();
    const self = this;
    reader.onload = function() {
      // 通过 reader.result 来访问生成的 base64 DataURL
      var base64 = reader.result.replace(/data:image\/jpeg;base64,/, '');
      //   console.log(base64);
      //上传图片
      self.congnizeImage(base64);
    };
    reader.readAsDataURL(file);
  };
  congnizeImage = imageInfo => {
    const formData = new FormData();
    formData.append('image_type', 'BASE64');
    formData.append('group_id', 'book');
    formData.append('user_id', 1);
    formData.append('image', imageInfo);
    const access_token =
      '24.6f9c93c954684711d7285bc90963da31.2592000.1547389952.282335-14417961';
    const url = `https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=${access_token}`;
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      data: formData,
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
      .then(function(responseAsJson) {
        // Do stuff with the JSON
        console.info(responseAsJson);
      })
      .catch(function(error) {
        console.log('Looks like there was a problem: \n');
        console.info(error);
      });
  };
  render() {
    return (
      <input
        type="file"
        id="ocr-file"
        onChange={this.handleImage}
        accept="image/png, image/jpeg"
      />
    );
  }
}

export default Ocr;
