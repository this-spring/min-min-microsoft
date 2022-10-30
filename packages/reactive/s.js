let CURRENT = null;
class DataNode {
  constructor(v) {
    this.nodes = [];
    this.value = v;
  }
}
function S(fn) {
  fn();
  CURRENT.nodes.push(fn);
}

function run(dataNode) {
  for (let i = 0; i < dataNode.nodes.length; i += 1) {
    dataNode.nodes[i]();
  }
}

S.data = (value) => {
  const node = new DataNode(value);
  return function(data) {
    if (arguments.length == 0) {
      // 读取值，添加依赖
      CURRENT = node;
      return node.value;
    } else {
      node.value = data;
      // 设置值，响应式变更
      run(node);
    }
  }
}