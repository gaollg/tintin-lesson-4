for (let k in process.env) {
  let v = process.env[k];
  console.log(`${k} = ${v}`);
}
console.log('---------');
console.log(process.env.web3_address);
console.log(process.env.web3_privateKey);
