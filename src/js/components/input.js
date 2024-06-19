const input = function (data) {
  return `
        <input type="${data.type}" placeholder=""${data.placeholder} id="${data.id}"> 
        `;
};

export default input;