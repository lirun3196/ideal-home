export const copyToClipboard = str => {
  navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
    if (result.state === 'granted' || result.state === 'prompt') {
      /* write to the clipboard now */
      return navigator.clipboard.writeText(str);
    }
    console.warn('获取权限失败');
  });
};
