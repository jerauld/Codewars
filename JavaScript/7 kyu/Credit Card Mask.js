function maskify(cc) {
  return cc.length > 4 ? Array(cc.length - 4).fill('#').join("") + cc.split("").splice(-4).join("") : cc;
}
